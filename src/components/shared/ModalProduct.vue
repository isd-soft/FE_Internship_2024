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
  },
  imgSrc: {
    type:String,
    default:''
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
    <img :src="imgSrc" class="product-modal__photo" alt="Product Image"/>
    <div class="product-modal__details">
        <div class="product-modal__header text-3xl part">{{ header }}</div>
        <div class="product-modal__price text-lg secondary-color part">{{ price }}</div>
        <div class="product-modal__description text-sm part">{{ description }}</div>
        <div class="product-modal__reviews part">
            <div class="product-modal__reviews--rating">{{ rating }}</div>
            <div class="product-modal__reviews--separator secondary-color"></div>
            <div class="product-modal__reviews--customers text-sm secondary-color">{{ reviews }} Customer Review</div>
        </div>
        <div class="secondary-color text-sm part">Availability</div>
        <div class="product-modal__product-type text-sm part">{{ productType }}</div>
        
    </div>
  </VueFinalModal>
</template>

<style lang="scss">
.product-modal {
    display: flex;
    justify-content: center;
    align-items: center;

    &__content {    
        display: flex;
        background: #fff;
        border-radius: 0.5rem;
        column-gap: 3.5vw;
        max-width: 70%;
    }

    &__details{
        margin-top: 15px;
        padding-right: 15px;
    }

    &__photo {
        max-height: 35vw;
        aspect-ratio: 1/1;
        object-fit: cover;
        border-radius: .5rem 0 0 .5rem;
    }

    &__reviews{
        display: flex;
        align-items: center;
        column-gap: 1.4vw;

        &--separator{
            height: 1.4vw;
            width: 0.5px;
            background-color: var(--color-taupe-gray);
        }
    }
}

.secondary-color{
    color: var(--color-taupe-gray);
}

.part{
    margin-bottom: 15px;
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