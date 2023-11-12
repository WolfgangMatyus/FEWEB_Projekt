<template>
  <div class="container">
    <div class="Home">
      <Title type="h1">Willkommen auf unsere Seite.</Title>
       <div>
        <paragraph>
          Willkommen auf unsere Seite.
        </paragraph>
        
       </div>
       </div>
  </div>

  </template>

<script>
import Title from "@/components/atoms/Title.vue";
import Paragraph from "@/components/atoms/Paragraph.vue";

export default {
  name: "Imprint",
  components: {
    Title,
    Paragraph,
  },
};
</script>