<!-- CardBody.vue -->
<template>
    <div>
      <Paragraph :text="content" />
    </div>
  </template>
  
  <script>
  import Paragraph from '@/components/atoms/Paragraph.vue';
  
  export default {
    components: {
      Paragraph
    },
    props: ['content']
  }
  </script>
  