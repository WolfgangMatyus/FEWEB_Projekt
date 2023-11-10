<script setup>
import { reactive } from 'vue'

const counter = reactive({
  count: 0
})

console.log(counter.count) // 0
counter.count++

// component logic
// declare some reactive state here.
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">Login</router-link>|
    <router-link to="/register">Register</router-link>|
    <router-link to="/help">Help</router-link>|
    <router-link to="/imprint">Imprint</router-link>|
  </nav>
  <router-view />
</template>