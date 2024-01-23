<template>
    <form @submit.prevent="submitForm">
      <label for="password">NEW Password:</label>
      <br />
      <input v-model="formCPData.password" type="password" id="password" />
      <br />
      <label for="password">Password repeat:</label>
      <br />
      <input v-model="formCPData.password2" type="password" id="password" />
      <br />
      <div v-if="passwordsMatchError">{{ passwordsMatchError }}</div>
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

    const passwordsMatchError = ref(null);

    const submitForm = () => {
        if (formCPData.value.password !== formCPData.value.password2) {
        passwordsMatchError.value = "Passwords do not match";
      } else {
        passwordsMatchError.value = null;
        emit("form-submitted", formCPData.value);
      }
    };

    return { formCPData, submitForm, passwordsMatchError };
  },
};
</script>
