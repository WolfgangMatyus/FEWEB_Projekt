<template>
  <form @submit.prevent="submitForm">
    <label for="name">Name:</label>
    <br />
    <input v-model="formData.name" type="text" id="name" />
    <br />
    <label for="category">Kategorie:</label>
    <br />
    <input v-model="formData.category" type="text" id="category" />
    <br />
    <label for="price">Preis:</label>
    <br />
    <input v-model="formData.price" type="number" id="price" />
    <br />
    <button type="submit">Add Product</button>
  </form>
</template>

<script>
import { ref } from "vue";
//import FormField from "@/components/molecules/FormField.vue";

export default {
  name: "ProductForm",
  components: {
    //FormField,
  },
  setup(_, { emit }) {
    // Reactive properties for form fields
    const formData = ref({
      name: "",
      category: "",
      price: "",
    });

    const submitForm = () => {
      console.log("Form data before emit:", formData.value);

      // Validate form data and perform any necessary actions

      // Emit a custom event with the form data
      emit("form-submitted", formData.value);

      console.log("Form submitted event emitted");
    };

    return { formData, submitForm };
  },
};
</script>
