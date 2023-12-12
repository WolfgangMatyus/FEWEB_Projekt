<template>
    <form @submit.prevent="submitForm">

      <label for="username">Gender:</label>
      <br />
      <div>
        <label>
          <input type="radio" v-model="formData.selectedGender" name="picGender" value="male"> Male
        </label>
      </div>
      <div>
        <label>
          <input type="radio" v-model="formData.selectedGender" name="picGender" value="female"> Female
        </label>
      </div>

      <div>
        <label>
          <input type="radio" v-model="formData.selectedGender" name="picGender" value="diverse"> Diverse
        </label>

        <div v-if="formData.selectedGender === 'diverse'">
          <label>
            Diverse Details:
            <input v-model="formData.diverseDetails" type="text" id="gender" />
          </label>
        </div>
      </div>


      <label for="username">Username:</label>
      <br />
      <input v-model="formData.username" type="text" id="username" />
      <br />
      <label for="email">Email:</label>
      <br />
      <input v-model="formData.email" type="email" id="email" />
      <br />
      <label for="password">Password:</label>
      <br />
      <input v-model="formData.password" type="password" id="password" />
      <br />
      <button type="submit">Register</button>
    </form>
</template>

<script>
import { ref } from "vue";

export default {
  name: "RegisterForm",
  setup(_, { emit }) {
    // Reactive properties for form fields
    const formData = ref({
      username: "",
      email: "",
      password: "",
    });

    const submitForm = () => {
      // Validate form data and perform any necessary actions

      // Emit a custom event with the form data
      emit("form-submitted", formData.value);
    };

    return { formData, submitForm };
  },
};
</script>
