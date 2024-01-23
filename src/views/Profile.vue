import Paragraph from '@/components/atoms/Paragraph.vue';
<template>
  <div class="container">
    <div class="Profile">
      <Title :type="titleType">{{ titleContent }}</Title>

      <form @submit.prevent="submitForm">
        <label for="uuid">product-uuid:</label>
        <br />
        <input v-model="productData.uuid" type="UUID" id="uuid" />
        <br />
        <button type="submit">Buy Product via uuid</button>
      </form>
      <hr />
      <Button @click="getCart">Get my Cart</Button>
      <div
        v-if="
          $data.cart && $data.cart.products && $data.cart.products.length > 0
        "
      >
        <div>
          <h3>Cart-UUID: {{ cart.uuid }}</h3>
          <div v-for="product in cart.products" :key="product.uuid">
            <!-- Render content for each product -->
            <p>Name: {{ product.name }}</p>
            <p>Kategorie: {{ product.category }}</p>
            <p>Preis: {{ product.price }}</p>
            <!-- Add more details or customize as needed -->
            <hr />
          </div>
        </div>
      </div>
      <div v-else>
        <!-- Render loading or placeholder content -->
        No products in the cart
      </div>
      <hr />
      <ProductForm @form-submitted="handleFormSubmitted2" />
      <hr />
      <div>
        <Button @click="this.store.user">Userdetails</Button>

        <div>
          {{ this.store.token }}
        </div>
        <Paragraph v-if="this.store.isLoggedIn">
          <div>
            <b> uuid: </b>
            {{ this.store.uuid }}
          </div>
          <div>
            <b> Profile Picture: </b>
          </div>
          <div>
            <Image :url="imageUrl" />
          </div>
          <div>
            <b> Gender: </b>
            {{ this.store.gender }}
          </div>
          <div>
            <b> Anrede: </b>
            {{ this.store.salutation }}
          </div>
          <div>
            <b> Name: </b>
            {{ this.store.username }}
          </div>
          <div>
            <b> Email: </b>
            {{ this.store.email }}
          </div>
          <div>
            <b> Role: </b>
            {{ this.store.role }}
          </div>
        </Paragraph>
      </div>
      <UpdateForm @form-submitted="handleFormSubmitted" />

      <hr />
    </div>
  </div>
</template>

<script>
import Title from "@/components/atoms/Title.vue";
import Paragraph from "@/components/atoms/Paragraph.vue";
import Image from "@/components/atoms/Image.vue";
import { useUserStore } from "@/pinia-store/user";
import Button from "@/components/atoms/Button.vue";
import UpdateForm from "@/components/molecules/UpdateForm.vue";
import ProductForm from "@/components/molecules/ProductForm.vue";
import { ref } from "vue";

export default {
  name: "Profile",
  components: {
    Title,
    Paragraph,
    Button,
    UpdateForm,
    Image,
    ProductForm,
  },
  setup() {
    const productData = ref({
      uuid: "",
    });

    const submitForm = async () => {
      try {
        const accessToken = localStorage.getItem("access_token");
        const uuid = useUserStore().uuid;
        const response = await fetch("/api/user/cart/" + uuid, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const cart = await response.json();
        const cartUuid = cart.uuid;
        const response2 = await fetch("/api/user/cart/addProduct", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            cartUuid: cartUuid,
            productUuid: productData.value.uuid,
          }),
        });

        await response2;
      } catch (error) {
        // Handle other errors (e.g., network error)
        console.error("Error submitting form:", error);
      }
    };

    const registeredUser = ref(null);
    const newProduct = ref(null);
    const handleFormSubmitted = async (formData) => {
      try {
        const accessToken = localStorage.getItem("access_token");
        const uuid = useUserStore().uuid;
        console.log("/api/user/" + uuid);
        // Your API call code here
        const response = await fetch("/api/user/" + uuid, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // API call succeeded, handle success
          registeredUser.value = formData;
        } else {
          // API call failed, handle error
          console.error("API call failed:", response.statusText);
        }
      } catch (error) {
        // Handle other errors (e.g., network error)
        console.error("Error submitting form:", error);
      }
    };

    const handleFormSubmitted2 = async (formData) => {
      try {
        // Your API call code for handleFormSubmitted2
        const accessToken = localStorage.getItem("access_token");
        // Modify the next line according to your API endpoint
        const response = await fetch("/api/user/product", {
          method: "POST", // or "PUT" depending on your API
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // API call succeeded, handle success
          newProduct.value = formData;
        } else {
          // API call failed, handle error
          console.error("API call failed:", response.statusText);
        }
      } catch (error) {
        // Handle other errors (e.g., network error)
        console.error("Error submitting form:", error);
      }
    };

    return {
      newProduct,
      registeredUser,
      handleFormSubmitted,
      handleFormSubmitted2,
      productData,
      submitForm,
    };
  },
  data() {
    return {
      store: useUserStore(),
      titleType: "h1",
      titleContent: "Dein Profil",
      imageUrl: "/img/" + useUserStore().gender + ".png",
      cart: [],
    };
  },
  mounted: async function () {
    console.log(this.store.isLoggedIn);
  },
  methods: {
    async getCart() {
      try {
        const accessToken = localStorage.getItem("access_token");
        const uuid = useUserStore().uuid;
        const apiUrl = "/api/user/cart/" + uuid;
        console.log("api: " + apiUrl);
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const cart = await response.json();
        this.cart = cart;
        console.log(cart);
      } catch (error) {
        console.error("Error during api-call:", error);
        throw error;
      }
    },
  },
};
</script>
