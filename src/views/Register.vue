<template>
  <div class="container">
    <div class="register">
    <Title type="h1">Registrieren</Title>
    <hr>
    <!-- call the submit function when clicking enter or wehn clicking the button -->
    <!-- the button needs to be a type submit -->
    <form @submit.prevent="submit">
      <div>
        <!-- v-model: for sync of data form.values.email - see data object -->
        <!-- @blur: when blur occurs call the method validate with 'email' -->
        <div>
          <FormField
            htmlFor="firstname"
            label="First Name"
            id="firstname"
            type="firstname"
            v-model="form.values.firstname"
            placeholder="Enter your firstname"
          />
          <FormField
            htmlFor="lastname"
            label="Last Name"
            id="lastname"
            type="lastname"
            v-model="form.values.lastname"
            placeholder="Enter your lastname"
          />
          <FormField
            htmlFor="email"
            label="E-Mail"
            id="email"
            type="email"
            v-model="form.values.email"
            @blur="validate('email')"
            placeholder="E-Mail"
          />
        </div>
        <!-- v-if: when form.errors.email is not empty display the message -->
        <p v-if="!!form.errors.email">
          {{ form.errors.email }}
        </p>
      </div>
      <div>
        <!-- v-model: for sync of data form.values.password - see data object -->
        <!-- @blur: when blur occurs call the method validate with 'password' -->
        <div>
          <FormField
            htmlFor="password"
            label="Password"
            id="password"
            type="password"
            v-model="form.values.password"
            @blur="validate('password')"
            placeholder="Enter your password"
          />
        </div>
        <p v-if="!!form.errors.password">
          {{ form.errors.password }}
        </p>
      </div>
      <div>
        <!-- the button needs to be a type submit to call the submit function on the form -->
        <Button type="submit">Submit</Button>
      </div>
    </form>
  </div>
  </div>
  
</template>

<script>
import { object, string } from "yup";
import Title from "@/components/atoms/Title.vue";
import Button from "@/components/atoms/Button.vue";
import FormField from "@/components/molecules/FormField.vue";

const registerSchema = object().shape({
  firstname: string().required(),
  lastname: string().required(),
  email: string().required().email(),
  password: string().required(),
});

export default {
  name: "Register",
  data() {
    return {
      form: {
        values: {
          firstname: "",
          lastname: "",
          email: "",
          password: "",
        },
        errors: {
          firstname: "",
          lastname: "",
          email: "",
          password: "",
        },
      },
    };
  },
  methods: {
    // field => 'email' or 'password'
    validate(field) {
      // promise format
      // validate the field (email or password) form the data (this.form.values)
      registerSchema
        .validateAt(field, this.form.values)
        .then(() => {
          // if everything works
          // remove all errors from the field (this.form.errors['email' or 'password'])
          this.form.errors[field] = "";
        })
        .catch((err) => {
          console.log(err);
          // if error
          // add the error message from the field (this.form.errors['email' or 'password'])
          // this will be displayed in the form under the input see v-if
          this.form.errors[field] = err.message;
        });
    },
    async submit() {
      // => { email: '', password: '' }
      registerSchema
        .validate(this.form.values, {
          abortEarly: false,
        })
        .then(async () => {
          // if valid
          // reset errors
          this.form.errors = {
            email: "",
            password: "",
          };

          // make a post request to the server with the json from this.form.values
          const response = await fetch("/login", {
            method: "POST",
            body: JSON.stringify(this.form.values),
          });
          // get the response from the server
          const data = await response.json();

          // get the token from the data from the server
          const token = data.accessToken;
          // save the token in the browser for reuse
          // e.g. for making requests to the servers private reqources
          // e.g. update user, delete user...
          // persisted after browser window is closed
          localStorage.setItem("token", token);
          // removed after browser window ist closed
          // sessionStorage.setItem('token', token);
          // JWT - JSON Web Token
          // token => "y.x.z"
          // y => header -> base64 of the following { alg: "",  }
          // x => payload -> where the data is stored
          // z => signature -> is encrypted version of the header and payload
        })
        .catch((err) => {
          console.log("err sddf");
          console.log(err);
          // if error
          if (err.inner) {
            // set errormessage
            err.inner.forEach((error) => {
              this.form.errors[error.path] = error.message;
            });
          }
        });
    },
  },
  components: {
    Title,
    Button,
    FormField,
  },
};
</script>
