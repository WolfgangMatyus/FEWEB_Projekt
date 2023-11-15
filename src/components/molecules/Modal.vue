<!-- Modal.vue -->
<template>
    <div class="modal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <Title :type="titleType" :text="title">{{ title }}</Title>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <Paragraph :text="errormessage">{{ errormessage }}</Paragraph>
        </div>
        <div class="modal-footer">
          <Button :text="buttonText" @button-click="onButtonClick" :class="ClassStyleBtn">{{ buttonText }}</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/atoms/Button.vue';
import Title from '@/components/atoms/Button.vue';
import Paragraph from '@/components/atoms/Button.vue';


export default {
  components: {
      Button,
      Title,
      Paragraph
    },

  props: {
    show: Boolean,
    title: String,
    errormessage: String,
    buttonText: String,
  },
}
</script>


  