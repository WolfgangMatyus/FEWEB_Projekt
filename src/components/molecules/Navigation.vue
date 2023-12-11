<template>
    <nav>
        <router-link class="nav-link " to="/">Home </router-link> 
        <router-link class="nav-link " to="/profile">Profile </router-link> 
        <router-link class="nav-link " to="/login">Login </router-link>
        <router-link class="nav-link " to="/register">Register </router-link>
        <router-link class="nav-link " to="/faq">FAQ </router-link>
        <router-link class="nav-link " to="/imprint">Imprint </router-link>
      <div v-if="this.store.isLoggedIn">{{ this.store.username }}</div>
    </nav>
  </template>
  
  <script>
  import { useUserStore } from '@/pinia-store/user';
  
  export default {
    name: 'Navigation',
    data() {
      return ({
        store: useUserStore(),
      });
    },
    mounted: async function () {
      console.log('mounted navigation');
      console.log(this.store);
    },
  }
  </script>

<style>
.nav-link {
  display: inline;
  list-style: none;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 2rem;
}

.nav-link:hover {
  color:rgb(209, 6, 6);
}
</style>