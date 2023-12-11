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
      console.log("Form data received:", formData);
      try {
        // Überprüfe, ob formData Werte für username und password enthält
        if (!formData.username || !formData.password) {
          console.error("Username and password are required.");
          return;
        }

        // Your API call code here
        const response = await fetch("/api/auth/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        console.log(response);

        if (response.ok) {
          const isLoggedIn = true;
          // API call succeeded, handle success
          registeredUser.value = formData;
          const data = await response.json();
          const { token } = data;

          // Store the JWT token in the state
          localStorage.setItem("access_token", token);
          localStorage.setItem("isLoggedIn", isLoggedIn);
          window.location.href = "/profile";
        } else {
          // API call failed, handle error
          console.error("API call failed:", response.statusText);
        }
      } catch (error) {
        // Handle other errors (e.g., network error)
        console.error("Error submitting form:", error);
      }
      console.log(localStorage.getItem("access_token"));
    };
    return { registeredUser, handleFormSubmitted };
   
  },
};
</script>
