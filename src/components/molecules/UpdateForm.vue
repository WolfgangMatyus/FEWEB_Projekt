<template>
    <form @submit.prevent="submitForm">
            <label for="email">Email:</label>
      <br />
      <input v-model="formData.email" type="text" id="email" />
      <br />
      <label for="username">Username:</label>
      <br />
      <input v-model="formData.username" type="text" id="username" />
      <br />


      <Button type="submit">Update</Button>
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
    // Reactive properties for form fields

    const formData = ref({
      username: "",
    });

    const submitForm = () => {
      // Validate form data and perform any necessary actions
      console.log("Form data before emit:", formData.value);
      // Emit a custom event with the form data
      emit("form-submitted", formData.value);
    };

    return { formData, submitForm };
  },
};
</script>
