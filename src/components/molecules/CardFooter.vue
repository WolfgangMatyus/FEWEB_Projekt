<!-- CardFooter.vue -->
<template>
  <div class="row">
    <div class="col">
      <Button :text="buttonText" @button-click="onButtonClick">{{ buttonText }}</Button>
    </div>
    <div class="col">
      <Button :text="buttonText1" @button-click="onButtonClick">{{ buttonText1 }}</Button>
    </div>
  </div>
    
  </template>
  
  <script>
  import Button from '@/components/atoms/Button.vue';
  
  export default {
    components: {
      Button
    },
    props: {
    buttonText: {
      type: String,
     default: 'In den Warenkorb',
  },
    buttonText1: {
      type: String,
      default: 'Jetzt Kaufen',
  },
},

    methods: {
      onButtonClick() {
        this.$emit('footer-button-click');
      }
    }
  }
  </script>
  