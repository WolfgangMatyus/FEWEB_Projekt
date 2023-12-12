import Paragraph from '@/components/atoms/Paragraph.vue';
<template>
  <div class="container">
    <div class="Profile">
      <Title :type="titleType">{{ titleContent }}</Title>
      <div>
        <Button @click="this.store.user">Userdetails</Button>
        <Button @click="this.store.update">Update</Button>
        <div>
          {{ this.store.token }}
        </div>
        <Paragraph v-if="this.store.isLoggedIn">
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

export default {
  name: "Profile",
  components: {
    Title,
    Paragraph,
    Button,
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
