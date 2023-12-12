<template>
    <router-link class="nav-link" to="/">Home</router-link>
    <router-link v-if="isUserLoggedIn" class="nav-link" to="/profile">Profile</router-link>
    <router-link class="nav-link" to="/faq">FAQ</router-link>
    <router-link class="nav-link" to="/imprint">Imprint</router-link>
    <router-link v-if="isUserLoggedIn" class="nav-link" to="/logout">Logout</router-link>
    <router-link v-if="!isUserLoggedIn" class="nav-link" to="/login">Login</router-link>
    <router-link v-if="!isUserLoggedIn" class="nav-link" to="/register">Register</router-link>
    <div v-if="isUserLoggedIn">
      Welcome, {{ username }} !
    </div>
</template>

<script>
export default {
  name: "Navigation",
  props: ['usernameProp'],
  data() {
    return {
      isUserLoggedIn: localStorage.getItem("isLoggedIn"),
      username: this.usernameProp,
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      this.username = localStorage.getItem("username");
    },
  },
};
</script>

<style>
.nav-link {
  display: inline;
  list-style: none;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 2rem;
  padding: 1rem;
}

.nav-link:hover {
  color:rgb(209, 6, 6);
}
</style>