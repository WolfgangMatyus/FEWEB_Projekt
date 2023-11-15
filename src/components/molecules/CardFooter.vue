<!-- CardFooter.vue -->
<template>
  <div class="row">
    <div class="col">
      <Button :text="buttonText" @button-click="onButtonClick" :class="ClassStyleBtn">{{ buttonText }}</Button>
    </div>
    <div class="col">
      <Button :text="buttonText1" @button-click="onButtonClick" :class="ClassStyleBtn">{{ buttonText1 }}</Button>
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
        default: 'Auf die Merkliste',
      },
      buttonText1: {
        type: String,
        default: 'Gebot abgeben',
      },
    },

    data () {
      return {
        ClassStyleBtn: 'btn btn-md btn-block h-100 d-flex flex-column justify-content-center',
      }
    },
    methods: {
      onButtonClick() {
        this.$emit('footer-button-click');
      }
    }
  }
  </script>
  