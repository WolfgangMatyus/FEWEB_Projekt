<!-- Home.vue -->
<template>
  <div class="container">
    <div class="Home">
      <Title :type="titleType">{{ titleContent }}</Title>
      <div>
        <Paragraph>{{ subtitleContent }}</Paragraph>
      </div>
      <div class="row">
        <Card v-for="(card, index) in cards" :key="index" :cardData="card" :class="ClassStyle"/>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/atoms/Title.vue";
import Paragraph from "@/components/atoms/Paragraph.vue";
import Card from "@/components/organism/Card.vue";
import { useUserStore } from '@/pinia-store/user';

export default {
  name: "Home",
  components: {
    Title,
    Paragraph,
    Card,
  },
  data() {
    return {
      store: useUserStore(),
      titleType: 'h1',
      titleContent: 'Willkommen auf unserer Auktionsplattform',
      subtitleContent: 'Hier sehen Sie unsere neuesten Objekte:',
      ClassStyle: ' col-sm-7 col-md-5 col-lg-3',
      cards: [
        { id: 1, title: "Auktionsobjekt 1", subtitle: "Dieses Objekt ist ganz was besonderes...", imageUrl:"/img/SYS_logo.jpg", content: "Content 1" },
        { id: 2, title: "Auktionsobjekt 2", subtitle: "Dieses Objekt ist einzigartig...", imageUrl:"/img/SYS_logo.jpg", content: "Content 2" },
        { id: 3, title: "Auktionsobjekt 3", subtitle: "Dieses Objekt ist speziell für...", imageUrl:"/img/SYS_logo.jpg", content: "Content 3" },
        { id: 4, title: "Auktionsobjekt 4", subtitle: "Dieses Objekt ist ganz was besonderes...", imageUrl:"/img/SYS_logo.jpg", content: "Content 4" },
        { id: 5, title: "Auktionsobjekt 5", subtitle: "Dieses Objekt ist ganz was besonderes...", imageUrl:"/img/SYS_logo.jpg", content: "Content 5" },
        { id: 6, title: "Auktionsobjekt 6", subtitle: "Dieses Objekt ist ganz was besonderes...", imageUrl:"/img/SYS_logo.jpg", content: "Content 6" },
      ],
    };
  },
};
</script>

<style scoped>
</style>