<!-- CardHead.vue -->
<template>
  <div>
    <Title type="h2" :text="title">{{ title }}</Title>
    <Paragraph :text="subtitle">{{ subtitle }}</Paragraph>
  </div>
</template>

<script>
import Title from '@/components/atoms/Title.vue';
import Paragraph from '@/components/atoms/Paragraph.vue';

export default {
  components: {
    Title,
    Paragraph
  },
  props: ['title', 'subtitle']
}
</script>
