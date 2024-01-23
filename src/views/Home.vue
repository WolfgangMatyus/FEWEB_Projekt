<template>
  <div class="container">
    <div class="Home">
      <Button @click="getProducts">Get All Products</Button>
      <div v-if="isLoading">Loading...</div>
      <Title :type="titleType">{{ titleContent }}</Title>
      <div>
        <Paragraph>{{ subtitleContent }}</Paragraph>
      </div>

      <!-- Use the SearchField component here -->
      <SearchField
        :labelId="labelId"
        :labelType="labelType"
        :labelValue="labelValue"
        :inputId="inputId"
        :inputType="inputType"
        :placeholder="searchPlaceholder"
        @search="handleInput"
      ></SearchField>

      <!-- Display search results here -->
      <ul v-if="searchResults.length > 0">
        <li v-for="result in searchResults" :key="result.id">
          {{ result.title }}
        </li>
      </ul>

    <div>
      {{ products }}
    </div>

      <div class="row">
        <!-- Verwenden Sie filteredCards anstelle von cards -->
        <Card
          v-for="(card, index) in filteredCards"
          :key="index"
          :cardData="card"
          :class="ClassStyle"
        />
      </div>
    </div>
  </div>
</template>

<script>
import mitt from "mitt";
import Title from "@/components/atoms/Title.vue";
import Paragraph from "@/components/atoms/Paragraph.vue";
import Card from "@/components/organism/Card.vue";
import SearchField from "@/components/molecules/SearchField.vue";
import Button from "@/components/atoms/Button.vue";

export default {
  name: "Home",
  components: {
    Title,
    Paragraph,
    Card,
    SearchField,
    Button,
  },
  data() {
    return {
      titleType: "h1",
      titleContent: "Willkommen auf unserer Auktionsplattform",
      subtitleContent: "Hier sehen Sie unsere neuesten Objekte:",
      ClassStyle: "col-sm-7 col-md-5 col-lg-3",
      emitter: mitt(),
      labelId: "searchLabel1",
      labelType: "text",
      labelValue: "Search",
      inputId: "searchInput1",
      inputType: "text",
      searchPlaceholder: "Search...",
      searchQuery: "",
      searchResults: [],
      products: [],
      isLoading: false,
      cards: [
        {
          id: 1,
          title: "Auktionsobjekt 1",
          subtitle: "Dieses Objekt ist ganz was besonderes...",
          imageUrl: "/img/SYS_logo.jpg",
          content: "Content 1",
        },
        {
          id: 2,
          title: "Auktionsobjekt 2",
          subtitle: "Dieses Objekt ist einzigartig...",
          imageUrl: "/img/SYS_logo.jpg",
          content: "Content 2",
        },
        {
          id: 3,
          title: "Auktionsobjekt 3",
          subtitle: "Dieses Objekt ist speziell für...",
          imageUrl: "/img/SYS_logo.jpg",
          content: "Content 3",
        },
        {
          id: 4,
          title: "Auktionsobjekt 4",
          subtitle: "Dieses Objekt ist ganz was besonderes...",
          imageUrl: "/img/SYS_logo.jpg",
          content: "Content 4",
        },
        {
          id: 5,
          title: "Auktionsobjekt 5",
          subtitle: "Dieses Objekt ist ganz was besonderes...",
          imageUrl: "/img/SYS_logo.jpg",
          content: "Content 5",
        },
        {
          id: 6,
          title: "Auktionsobjekt 6",
          subtitle: "Dieses Objekt ist ganz was besonderes...",
          imageUrl: "/img/SYS_logo.jpg",
          content: "Content 6",
        },
      ],
    };
  },
  computed: {
    filteredCards() {
      // Filter cards based on the search query
      const filtered = this.cards.filter((card) =>
        card.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );

      // Log the intermediate results for debugging
      console.log("Filtered:", filtered);

      return filtered;
    },
  },
  methods: {
    // Handle the search event triggered by Navigation.vue
    handleInput(query) {
      this.searchQuery = query;
    },
    async getProducts() {
      console.log("hierher?");
      try {
        this.isLoading = true;
        
        const apiUrl = "/api/products";

        const response = await fetch(apiUrl, {
          method: "GET",
          
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const products = await response.json();
        this.products = products;
        console.log(products);
      } catch (error) {
        console.error("Error during api-call:", error);
        // handle error
      } finally {
       this.isLoading = false;
      }
    },
  },
  created() {
    // Listen for the search event from Navigation.vue
    mitt().on("search", this.handleInput);
  },
  
};
</script>

<style scoped></style>
