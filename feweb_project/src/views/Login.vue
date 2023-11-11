<template>
  <div class="login">
    <Title type="h1">Login</Title>
    <!-- call the submit function when clicking enter or when clicking the button -->
    <!-- the button needs to be a type submit -->
    <LoginForm />
  </div>
</template>

<script>
import { object, string } from "yup";
import Title from "@/components/atoms/Title.vue";
import LoginForm from "@/components/molecules/LoginForm.vue";

const loginSchema = object().shape({
  email: string().required().email("Invalid email address"),
  password: string().required(),
});

export default {
  components: {
    Title,
    LoginForm,
  },
  name: "Login",
  data() {
    return {
      form: {
        values: {
          email: "",
          password: "",
        },
        errors: {
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
      loginSchema
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
      loginSchema
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
          // e.g. for making requests to the servers private resources
          // e.g. update user, delete user...
          // persisted after the browser window is closed
          localStorage.setItem("token", token);
          // removed after the browser window ist closed
          // sessionStorage.setItem('token', token);
          // JWT - JSON Web Token
          // token => "y.x.z"
          // y => header -> base64 of the following { alg: "",  }
          // x => payload -> where the data is stored
          // z => signature -> is an encrypted version of the header and payload
        })
        .catch((err) => {
          console.log("err sddf");
          console.log(err);
          // if error
          if (err.inner) {
            // set error message
            err.inner.forEach((error) => {
              this.form.errors[error.path] = error.message;
            });
          }
        });
    },
  },
};
</script>
