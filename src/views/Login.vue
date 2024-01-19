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
import { object, string } from 'yup';
import Title from '@/components/atoms/Title.vue';
import LoginForm from '@/components/molecules/LoginForm.vue';
import { useUserStore } from '@/pinia-store/user';
import { validateForm, loginUser, getUserDetails } from '@/services/authService';

const loginSchema = object().shape({
  email: string().required().email('Invalid email address'),
  password: string().required(),
});

export default {
  name: "Login",
  components: {
    LoginForm,
    Title,
  },
  data() {
    return {
      store: useUserStore(),
      titleType: "h1",
      titleContent: "Login",
      form: {
        values: {
          email: '',
          password: '',
        },
        errors: {
          email: '',
          password: '',
        },
      },
      adminRole: "ROLE_ADMIN",
    };
  },
  setup() {
    const registeredUser = ref(null);

    const handleFormSubmitted = async (formData) => {
      try {
        // Validate form data
        const isValid = await validateForm(formData, loginSchema);
        if (!isValid) return;

        // Login user and get access token
        const token = await loginUser(formData);

        // Store the JWT token in the state
        localStorage.setItem("access_token", token);

        // Fetch user details
        const user = await getUserDetails(formData.username, token);

        // Store user details in the state
        this.email = user.email;
        this.username = user.username;
        this.role = user.role;

        // Redirect to profile page
        window.location.href = "/profile";
      } catch (error) {
        // Handle errors
        console.error("Error submitting form:", error);
        // Update form errors or show a general error message to the user
      }
    };

    return { registeredUser, handleFormSubmitted };
  },
};
</script>