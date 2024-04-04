<script setup>
import { VueFinalModal } from 'vue-final-modal'

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  header: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  reviews: {
    type: Number,
    required: true
  },
  productType: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['close'])
</script>

<template>
  <VueFinalModal
    classes="modal-container"
    content-class="modal-content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
    @clickOutside="emit('close')"
  >
    <div class="modal-header">{{ header }}</div>
    <div class="modal-price">{{ price }}</div>
    <div class="modal-description">{{ description }}</div>
    <div class="modal-rating">{{ rating }}</div>
    <div class="modal-reviews">{{ reviews }}</div>
    <div class="modal-productType">{{ productType }}</div>
    <button @click="emit('close')">Close</button>
  </VueFinalModal>
</template>

<style scoped>
/* .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
} */
</style>