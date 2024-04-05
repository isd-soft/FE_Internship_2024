<script setup>
import { VueFinalModal } from 'vue-final-modal'
import Counter from './Counter.vue';
import StarRating from './StarRating.vue';

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
    type: String,
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
    <!-- <div class="product-modal__photo" :style="`background-image: url('${getUrlFromString(imgSrc)}');`"></div>   -->
    <img :src="imgSrc" class="product-modal__photo" alt="Product Image"/>
    <div class="product-modal__details">
        <div class="product-modal__header text-3xl part">{{ header }}</div>
        <div class="product-modal__price text-lg secondary-color part">{{ price }}</div>
        <div class="product-modal__description text-sm part">{{ description }}</div>
        <div class="product-modal__reviews part">
              <StarRating :ratingStars="Number(rating)" />
            <div class="product-modal__reviews--separator secondary-color"></div>
            <div class="product-modal__reviews--customers text-sm secondary-color">{{ reviews }} Customer Review</div>
        </div>
        <div class="secondary-color text-sm part">Availability</div>
        <div class="product-modal__product-type text-sm part">{{ productType }}</div>
        <div class="secondary-color text-sm part">Colors</div>
        <div class="product-modal__colors part-x2">
            <div class="product-modal__colors--item"></div>
            <div class="product-modal__colors--item"></div>
            <div class="product-modal__colors--item"></div>
        </div>
        <div class="product-modal__bottom-section part">
            <Counter />
            <button class="product-modal__bottom-section--cartadding text-md">Add to cart</button>
        </div>
    </div>
  </VueFinalModal>
</template>

<style lang="scss">
.product-modal {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-warm-ivory);
    backdrop-filter: blur(12px);

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

    &__colors{
        display: flex;
        column-gap: 1.1vw;

        &--item{
            width: 2.1vw;
            height: 2.1vw;
            border-radius: 100%;
            cursor: pointer;
        }

        &--item:nth-child(1){
            background-color: var(--color-violet-blue);
        }

        &--item:nth-child(2){
            background-color: var(--color-black);
        }

        &--item:nth-child(3){
            background-color: var(--color-uc-gold);
        }
    }

    &__bottom-section{
        display: flex;
        column-gap: 1.4vw;

        &--cartadding{
            border:1px solid var(--color-black);
            border-radius: 1vw;
            padding: 1.2vw 3.3vw;
            cursor: pointer;
        }

        &--cartadding:hover{
            color: var(--color-white);
            background-color: var(--color-black);
            transition: 0.25s ease-in-out;
        }
    }
}

.secondary-color{
    color: var(--color-taupe-gray);
}

.part{
    margin-bottom: 15px;
}

.part-x2{
    margin-bottom: 30px;
}
</style>