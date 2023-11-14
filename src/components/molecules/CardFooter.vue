<!-- CardFooter.vue -->
<template>
    <div>
      <Button :text="buttonText" @button-click="onButtonClick" />
    </div>
  </template>
  
  <script>
  import Button from '@/components/atoms/Button.vue';
  
  export default {
    components: {
      Button
    },
    props: ['buttonText'],
    methods: {
      onButtonClick() {
        this.$emit('footer-button-click');
      }
    }
  }
  </script>
  