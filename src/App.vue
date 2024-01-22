<template>
  <div class="container-fluid text-center">
    <nav>
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