<template>
  <form @submit.prevent="submitForm">
    <FormField
      htmlFor="username"
      label="User Name"
      id="username"
      type="username"
      v-model="form.values.username"
      placeholder="Enter your username"
    />
    <FormField
      htmlFor="email"
      label="E-Mail"
      id="email"
      type="email"
      v-model="form.values.email"
      placeholder="E-Mail"
    />
    <FormField
      htmlFor="password"
      label="Password"
      id="password"
      type="password"
      v-model="form.values.password"
      placeholder="Enter your password"
    />
    <Button type="submit">Register</Button>
  </form>
</template>

<script>
import { ref } from 'vue';
import FormField from '@/components/molecules/FormField.vue';
import Button from '@/components/atoms/Button.vue';

export default {
  name: 'RegisterForm',
    components: {
      FormField,
      Button,
    },
  setup() {
    // Reactive data
    const form = ref({
      values: {
        username: 'bullshit',
        email: 'bull@shit.at',
        password: '123',
      },
    });

    // Function to submit the register form
    const submitForm = async () => {
      try {
        // Your async code to submit the form data
        // For example, make an API call to register the user

        // Simulate form data (replace with actual form data)
        const formData = {
          username: form.value.values.username,
          email: form.value.values.email,
          password: form.value.values.password,
          // ... other form fields
        };

        // Make API call to register the user
        const response = await fetch('/api/adduser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // User registered successfully
          // Handle success as needed
        } else {
          // Handle error response
          const errorData = await response.json();
          console.error(`Error: ${errorData.message}`);
          
        }
      } catch (error) {
        // Handle network or other errors
        console.error('Error registering user:', error);
      }
    };

    return { form, submitForm };
  },
};
</script>
