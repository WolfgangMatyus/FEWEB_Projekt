<template>
  <div class="container">
    <div class="management">
      <Title :type="titleType">{{ titleContent }}</Title>
      <hr />
      <div>
        in der Finalen Version werden hier noch Management CRUD Operationen
        implementiert
      </div>
      <form @submit.prevent="handleSubmit">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" />
        <Button type="submit">Delete</Button>
      </form>
      <Button @click="getAllUsers">Get All Users</Button>
      <div class="row">
        <!-- Verwenden Sie filteredCards anstelle von cards -->
        {{ users }}
      </div>
      <div class="justify-content-center"></div>
    </div>
  </div>
</template>
<script>
import Title from "@/components/atoms/Title.vue";
import { useUserStore } from "@/pinia-store/user";
import Button from "@/components/atoms/Button.vue";

export default {
  name: "Management",
  components: {
    Title,
    Button,
  },
  data() {
    return {
      store: useUserStore(),
      titleType: "h1",
      titleContent: "Management",
      formData: {
        email: "",
      },
      users: [],
    };
  },
  methods: {
    async handleSubmit() {
      console.log("Form Data:", this.formData);

      try {
        await this.store.deleteFunction(this.formData.email);
        // Weitere Verarbeitung, Erfolgsmeldungen, etc.
      } catch (error) {
        // Fehlerbehandlung, z.B. Anzeigen einer Fehlermeldung
        console.error("Error during delete:", error);
      }
    },
    async getAllUsers() {
      console.log("hierher?");
      try {
        const apiUrl = "/api/admin/users";
        const accessToken = localStorage.getItem("access_token");

        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const users = await response.json();
        this.users = users;
        console.log(users);
      } catch (error) {
        console.error("Error during api-call:", error);
        throw error;
      }
    },
  },
};
</script>
