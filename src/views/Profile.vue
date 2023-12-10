import Paragraph from '@/components/atoms/Paragraph.vue';
<template>
  <div class="container">
  <div class="About">
    <Title :type="titleType">{{ titleContent }}</Title>
    <hr>
      <Paragraph>{{ ParagraphContent }}</Paragraph>
  </div>
  </div>
  
</template>

<script>
import Title from "@/components/atoms/Title.vue";
import Paragraph from "@/components/atoms/Paragraph.vue";

export default {
  name: "About",
  components: {
    Title,
    Paragraph,
  },

  data() {
    return {
      titleType: 'h1',
      titleContent: 'Über uns',
      ParagraphContent: 'Wir sind 3 Fh- Kollegen die Spaß an Webentwicklung haben.',
    };
  },
};
</script>
