<!-- CardHead.vue -->
<template>
  <div>
    <Title :text="title" />
    <Paragraph :text="subtitle" />
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
