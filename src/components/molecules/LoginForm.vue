<template>
    <form @submit.prevent="submitForm">
      <FormField
        htmlFor="username"
        label="Username"
        id="username"
        type="username"
        v-model="formData.username"
        placeholder="Username"
      />
      <FormField
        htmlFor="password"
        label="Password"
        id="password"
        type="password"
        v-model="formData.password"
        placeholder="Enter your password"
      />
      <button type="submit">Login</button>
    </form>
  </template>
  
  <script>
import { ref } from "vue";
import FormField from "@/components/molecules/FormField.vue";
  
  export default {
   name: "LoginForm",
    components: {
      FormField, 
    },
    setup(_, { emit }) {
    // Reactive properties for form fields
    const formData = ref({
      username: "",
      password: "",
    });

    const submitForm = () => {
      // Validate form data and perform any necessary actions

      // Emit a custom event with the form data
      emit("form-submitted", formData.value);
    };

    return { formData, submitForm };
  },

}
  </script>
  