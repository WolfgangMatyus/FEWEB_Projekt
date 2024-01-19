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
        <input type="email" id="email" v-model="formData.email">
        <Button type="submit">Delete</Button>
      </form>
      <div class="justify-content-center"></div>
    </div>
    <RegisterForm @form-submitted="handleFormSubmitted"/>
  </template>

<script>
import Title from "@/components/atoms/Title.vue";
import RegisterForm from "@/components/molecules/RegisterForm.vue";
import { useUserStore } from "@/pinia-store/user";
import Button from "@/components/atoms/Button.vue";

export default {
  name: "Management",
  components: {
    Title,

    RegisterForm,

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
  },
};
</script>