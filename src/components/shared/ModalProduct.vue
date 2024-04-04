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
    class="product-modal"
    content-class="product-modal__content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
    @clickOutside="emit('close')"
  >
    <div class="product-modal__header text-3xl">{{ header }}</div>
    <div class="product-modal__price text-lg">{{ price }}</div>
    <div class="product-modal__description text-sm">{{ description }}</div>
    <div class="product-modal__rating">{{ rating }}</div>
    <div class="product-modal__reviews text-xs">{{ reviews }}</div>
    <div class="product-modal__product-type text-sm">{{ productType }}</div>
  </VueFinalModal>
</template>

<style lang="scss">
.product-modal {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &__content {    
        display: flex;
        flex-direction: column;
        padding: 1rem;
        background: #fff;
        border-radius: 0.5rem;
    }

}
</style>
<!-- 
    id
    child
    header - text-3xl
    price - text-lg
    description - text-sm
    rating - 
    reviews - text-xs
    availability - text-sm
 -->