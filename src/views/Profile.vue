import Paragraph from '@/components/atoms/Paragraph.vue';
<template>
  <div class="container">
    <div class="Profile">
      <Title :type="titleType">{{ titleContent }}</Title>
      <div>
        <Button @click="this.store.user">Userdetails</Button>

        <div>
          {{ this.store.token }}
        </div>
        <Paragraph v-if="this.store.isLoggedIn">
          <div>
            <b> Anrede: </b>
            {{ this.store.gender }}
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
      <Paragraph>{{ ParagraphContent }}</Paragraph>
    </div>
  </div>
</template>

<script>
import Title from "@/components/atoms/Title.vue";
import Paragraph from "@/components/atoms/Paragraph.vue";
import { useUserStore } from "@/pinia-store/user";
import Button from "@/components/atoms/Button.vue";
import UpdateForm from "@/components/molecules/UpdateForm.vue";
import { ref } from "vue";


export default {
  name: "Profile",
  components: {
    Title,
    Paragraph,
    Button,
    UpdateForm,
  },
  setup() {
    const registeredUser = ref(null);

    const handleFormSubmitted = async (formData) => {
      try {


      // Access the email property in the payload

        
        const accessToken = localStorage.getItem('access_token');
        
        // Your API call code here
        const response = await fetch("/api/user/" + formData.email + "?username=" + formData.username, {
          
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`,
          },
          body: JSON.stringify(formData),
        });
        console.log(formData);
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
    return { registeredUser, handleFormSubmitted };
  },
  data() {
    return {
      store: useUserStore(),
      titleType: "h1",
      titleContent: "Über uns",
      ParagraphContent:
        "Wir sind 3 Fh- Kollegen die Spaß an Webentwicklung haben.",
    };
  },
  mounted: async function () {
    console.log("mounted about");
    console.log(this.store.isLoggedIn);
  },
};
</script>
