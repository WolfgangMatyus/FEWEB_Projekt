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
  <h1>Hallo World!</h1>
</template>