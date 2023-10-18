<script setup>
import { ref } from 'vue'

const message = ref('Hello World!')

console.log(message.value) // "Hello World!"
message.value = 'Changed'

</script>

<template>
  <h1>Hello World!</h1>
</template>