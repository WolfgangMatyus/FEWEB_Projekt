import Paragraph from '@/components/atoms/Paragraph.vue';

<template>
  <div class="container">
  <div class="profile">
    <Title :type="titleType">{{ titleContent }}</Title>
    <div>
      <Paragraph v-if="this.store.isLoggedIn">
        <b>
          Name:
        </b>
        {{ this.store.email }}
      </Paragraph>
    </div>
    
    <hr>
      <Paragraph>{{ ParagraphContent }}</Paragraph>
  </div>
  </div>
  
</template>

<script>
import Title from "@/components/atoms/Title.vue";
import Paragraph from "@/components/atoms/Paragraph.vue";
import { useUserStore } from '@/pinia-store/user';

export default {
  name: 'Profile',
  components: {
    Title,
    Paragraph,
  },

  data() {
    return {
      store: useUserStore(),
      titleType: 'h1',
      titleContent: 'Über uns',
      ParagraphContent: 'Wir sind 3 Fh- Kollegen die Spaß an Webentwicklung haben.',
    };
  },
  mounted: async function () {
    console.log('mounted about');
    console.log(this.store.isLoggedIn);
  },
};
</script>
