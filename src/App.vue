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