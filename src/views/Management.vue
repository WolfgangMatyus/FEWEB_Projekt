<!-- in der Finalen Version werden hier noch Management CRUD Operationen implementiert -->
<template>
    <div class="container">
      <div class="management">
        <Title :type="titleType">{{ titleContent }}</Title>
        <hr />
        <div>
            in der Finalen Version werden hier noch Management CRUD Operationen implementiert
        </div>
        <!-- call the submit function when clicking enter or when clicking the button -->
        <!-- the button needs to be a type submit -->
        <div class="justify-content-center"></div>
      </div>
    </div>

    <RegisterForm @form-submitted="handleFormSubmitted"/>
  </template>

  
<script>
import Title from "@/components/atoms/Title.vue";
import RegisterForm from "@/components/molecules/RegisterForm.vue";
import { useUserStore } from "@/pinia-store/user";

export default {
  name: "Login",
  components: {
    Title,
    RegisterForm,
  },
  data() {
    return {
      store: useUserStore(),
      titleType: "h1",
      titleContent: "Management",
    };
  },
};
</script>
