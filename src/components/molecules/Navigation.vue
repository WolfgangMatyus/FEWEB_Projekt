<template>
    <router-link class="nav-link" to="/">Home</router-link>
    <router-link v-if="isUserLoggedIn" class="nav-link" to="/profile">Profile</router-link>
    <router-link class="nav-link" to="/faq">FAQ</router-link>
    <router-link class="nav-link" to="/imprint">Imprint</router-link>
    <router-link v-if="isUserLoggedIn" class="nav-link" to="/logout">Logout</router-link>
    <router-link v-if="!isUserLoggedIn" class="nav-link" to="/login">Login</router-link>
    <router-link v-if="!isUserLoggedIn" class="nav-link" to="/register">Register</router-link>
    <router-link v-if="adminRole === this.store.role" class="nav-link" to="/management">Management</router-link>
    <div v-if="isUserLoggedIn">
      Welcome, {{this.store.gender}} {{ username }} !
    </div>
</template>

<script>
import { useUserStore } from "@/pinia-store/user";


export default {
  name: "Navigation",
  props: ['usernameProp'],
  data() {
    return {
      store: useUserStore(),
      isUserLoggedIn: localStorage.getItem("isLoggedIn"),
      username: this.usernameProp,
      adminRole: "ROLE_ADMIN",
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