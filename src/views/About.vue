import Paragraph from '@/components/atoms/Paragraph.vue';
<template>
  <div class="About">
    <Title type="h1">Über uns</Title>
    <Paragraph>
      Wir sind 3 Fh- Kollegen die Spaß an Webentwicklung haben.
    </Paragraph>
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
};
</script>
