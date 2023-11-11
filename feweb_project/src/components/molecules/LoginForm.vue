<template>
  <form @submit.prevent="submitForm">
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
    <Button type="submit">Login</Button>
  </form>
</template>

<script>
import FormField from "@/components/molecules/FormField.vue";
import Button from "@/components/atoms/Button.vue";

export default {
  name: "LoginForm",
  components: {
    FormField,
    Button,
  },
  data() {
    return {
      form: {
        values: {
          email: "",
          password: "",
        },
      },
    };
  },
  methods: {
    submitForm() {
      // Perform your login logic here using this.formData
      console.log("Submitting form with data:", this.form.values);
      // You might want to make an API request to a server for authentication.
    },
  },
};
</script>
