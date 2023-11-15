<!-- CardFooter.vue -->
<template>
    <div>
      <Button :text="buttonText" @button-click="onButtonClick">{{ buttonText }}</Button>
    </div>
    <div>
      <Button :text="buttonText1" @button-click="onButtonClick">{{ buttonText1 }}</Button>
    </div>
  </template>
  
  <script>
  import Button from '@/components/atoms/Button.vue';
  
  export default {
    components: {
      Button
    },

    data() {
    return {
      buttonText: this.buttonText || 'In den Warenkorb',
      buttonText1: this.buttonText1 || 'Jetzt Kaufen',
    };
  },
    methods: {
      onButtonClick() {
        this.$emit('footer-button-click');
      }
    }
  }
  </script>
  