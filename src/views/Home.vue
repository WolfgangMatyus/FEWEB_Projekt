<template>
  <div class="container">
    <div class="Home">
      <Title type="h1">Willkommen auf unserer Seite.</Title>
      <div>
        <Paragraph>Hier sehen Sie die neuesten Angebote</Paragraph>
      </div>
      <div>
        <div v-for="(cardData, index) in cardList" :key="index">
          <Card :cardData="cardData" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/atoms/Title.vue";
import Paragraph from "@/components/atoms/Paragraph.vue";
import Card from "@/components/organism/Card.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Title,
    Paragraph,
    Card,
  },
  data() {
    return {
      cardList: [],
    };
  },
  mounted() {
    // Fetch data when the component is mounted
    this.fetchCardData();
  },
  methods: {
    async fetchCardData() {
      try {
        // Adjust the path to your JSON file
        const response = await axios.get("../assets/ResourceList/Resources.json");
        this.cardList = response.data;
      } catch (error) {
        console.error("Error fetching card data:", error);
      }
    },
  },
};
</script>
