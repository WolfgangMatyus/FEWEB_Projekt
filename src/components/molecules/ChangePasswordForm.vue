<template>
    <form @submit.prevent="submitForm">
      <div class="error" v-if="passwordValidationError">{{ passwordValidationError }}</div>

      <label for="password">NEW Password:</label>
      <br />
      <input v-model="formCPData.password" type="password" id="password" />
      <br />
      <label for="password">Password repeat:</label>
      <br />
      <input v-model="formCPData.password2" type="password" id="password" />
      <br />
      
      <Button type="submit">Change Password</Button>
    </form>
  </template>

<script>
import { ref } from "vue";
import Button from "@/components/atoms/Button.vue";
  
export default {
    name: "UpdateForm",
    components: {
    Button,
  },
  setup(_, { emit }) {

    const formCPData = ref({
      password: "",
      password2: "",
    });

    const passwordValidationError = ref(null);


    const submitForm = () => {
      if (formCPData.value.password.trim() === "") {
        passwordValidationError.value = "Password cannot be empty";
        return;
      } else {
        passwordValidationError.value = null;
      }

        if (formCPData.value.password !== formCPData.value.password2) {
          passwordValidationError.value = "Passwords do not match";
      } else {
        passwordValidationError.value = null;
        emit("form-submitted", formCPData.value);
      }
    };

    return { formCPData, submitForm, passwordValidationError };
  },
};
</script>

<style scoped>

.error{color: red}

</style>