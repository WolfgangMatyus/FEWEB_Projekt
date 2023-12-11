<!-- Login.vue -->
<template>
  <div class="container">
    <div class="login">
      <Title :type="titleType">{{ titleContent }}</Title>
      <hr />
      <!-- call the submit function when clicking enter or when clicking the button -->
      <!-- the button needs to be a type submit -->
      <div class="justify-content-center"></div>
      <LoginForm @form-submitted="handleFormSubmitted" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import LoginForm from "@/components/molecules/LoginForm.vue";
import Title from "@/components/atoms/Title.vue";

export default {
  name: "Login",
  components: {
    LoginForm,
    Title,
  },
  data() {
    return {
      titleType: "h1",
      titleContent: "Login",
    };
  },
  setup() {
    const registeredUser = ref(null);

    const handleFormSubmitted = async (formData) => {
      try {
        // Your API call code here
        const response = await fetch("/auth/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        console.log(response);

        if (response.ok) {
          // API call succeeded, handle success
          registeredUser.value = formData;
        } else {
          // API call failed, handle error
          console.error("API call failed:", response.statusText);
        }
      } catch (error) {
        // Handle other errors (e.g., network error)
        console.error("Error submitting form:", error);
      }
    };

    return { registeredUser, handleFormSubmitted };
  },
};
</script>
