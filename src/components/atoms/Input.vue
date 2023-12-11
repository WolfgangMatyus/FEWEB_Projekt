<template>
    <input class="input" :id="id" :type="type" :value="value" v-model="form.values.email" :placeholder="placeholder" @blur="validate('email')" >
  </template>
  
  <script>
  export default {
    name: 'Label',
    props: {
      id: String,
      type: String,
      value: String,
      placeholder: String,
    }
  }
  </script>
  
  <style scoped>
  .input {
    margin: 10px;
    width: 50%;
  }
  </style>