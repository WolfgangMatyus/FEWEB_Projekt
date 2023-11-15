<!-- Card.vue -->
<template>
    <div class="card">
      <CardHead :title="cardData.title" :subtitle="cardData.subtitle" />
      <hr>
      <CardBody :content="cardData.content" :imageUrl="cardData.imageUrl" />
      <hr>
      <CardFooter :buttonText="cardData.buttonText" @footer-button-click="onFooterButtonClick" />
    </div>
  </template>
  
  <script>
  import CardHead from '@/components/molecules/CardHead.vue';
  import CardBody from '@/components/molecules/CardBody.vue';
  import CardFooter from '@/components/molecules/CardFooter.vue';
  
  export default {
    components: {
      CardHead,
      CardBody,
      CardFooter
    },
    props: ['cardData'],
    methods: {
      onFooterButtonClick() {
        // Handle the button click event
      }
    }
  }
  </script>
  
  <style scoped>

  .card {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
  }
  </style>
  