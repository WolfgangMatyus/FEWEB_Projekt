import Paragraph from '@/components/atoms/Paragraph.vue';
<template>
  <div class="container">
    <div class="Profile">
      <Title :type="titleType">{{ titleContent }}</Title>
      <div>
        <button @click="this.store.login">login</button>
        <button @click="this.store.user">user</button>
        <button @click="this.store.update">update</button>
        <div>
          {{ this.store.token }}
        </div>
        <Paragraph v-if="this.store.isLoggedIn">
          <b> Name: </b>
          <div>
            {{ this.store.username }}
            {{ this.store.email }}
          </div>
        </Paragraph>
      </div>

      <hr />
      <Paragraph>{{ ParagraphContent }}</Paragraph>
    </div>
  </div>
</template>

<script>
import Title from "@/components/atoms/Title.vue";
import Paragraph from "@/components/atoms/Paragraph.vue";
import { useUserStore } from "@/pinia-store/user";

export default {
  name: "Profile",
  components: {
    Title,
    Paragraph,
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
