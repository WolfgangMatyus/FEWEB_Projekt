<template>
  <div class="container-fluid p-5 text-center">
    <nav class="">
      <Navigation />
      <hr>
    </nav>
  </div>
  <router-view />
</template>

<script>
import Navigation from '@/components/molecules/Navigation.vue';

export default {
  name: 'App',
  components: {
    Navigation,
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