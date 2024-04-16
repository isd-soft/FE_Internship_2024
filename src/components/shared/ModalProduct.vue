<script setup>
import { VueFinalModal, useVfm } from 'vue-final-modal'
import Counter from './Counter.vue';
import StarRating from './StarRating.vue';
import ClosingIcon from '../../assets/icons/CrossIcon.svg'
import {toUppercaseUtil} from '../../utils/toUppercaseUtil.js'

const reviews = () => Math.floor(Math.random() * 20)

const props = defineProps({
  id: String,
  imageUrl: String,
  name: String,
  code: String,
  description: String,
  price: Number,
  oldPrice: {
    type: Number,
    required: false
  },
  stock: Number,
  rating: Number,
  discount: {
    type: Number,
    required: false
  },
  isNew: {
    type: Boolean,
    required: false
  },
  createdAt: {
    type: String,
    required: false
  },
  updatedAt: {
    type: String,
    required: false
  },
  // value: {
  //   type: Number,
  //   validator: (value) => value >= 0
  // },
  productType: {
    type: String,
    validator: (value) => ['discount', 'stock', 'new'].includes(value)
  },
})

const vfm = useVfm()

const close = () => {
  vfm.closeAll(vfm.openedModals)
}

</script>

<template>
  <VueFinalModal
    class="product-modal"
    content-class="product-modal__content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
    @clickOutside="emit('close')"
  >
  
    <img :src="imageUrl" class="product-modal__photo" alt="Product Image"/>
    <ClosingIcon class = "product-modal__cross" @click ="close()" />
    <div class="product-modal__detail">
      <div class = "product-modal__wrapper">
        <span class="product-modal__header text-3xl">{{ name }}</span>
        <span class="product-modal__price text-md">{{ price }}</span>
      </div>
      <div class = "product-modal__wrapper">
        <span class="product-modal__description text-xs part">{{ description }}</span>
        <div class="product-modal__review part">
            <StarRating :ratingStars="Number(rating)" />
            <span class="product-modal__review-separator" />
            <span class="text-xs product-modal__review-text">{{ reviews() }} Customer Review</span>
      </div>
        <span class="product-modal__section-header text-xs">Availability</span>
        <span class="product-modal__product-type text-md">{{ toUppercaseUtil(productType) }}</span>
        <span class="product-modal__section-header text-xs">Colors</span>
        <div class="product-modal__color">
            <div class="product-modal__color-item"></div>
            <div class="product-modal__color-item"></div>
            <div class="product-modal__color-item"></div>
        </div>
      </div>
      <div class="product-modal__bottom">
          <Counter />
          <button class="product-modal__bottom-cartadding text-md">Add to cart</button>
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

    &__header{
      display: block;
      margin-bottom: 15px;
    }

    &__price{
      display: block;
      color: var(--color-taupe-gray);
      margin-bottom: 15px;
    }

    &__content {    
      position: relative;
      display: flex;
      background: #fff;
      border-radius: 0.5rem;
      column-gap: 5rem;
      max-width: 70%;
    }

    &__detail{
        margin-top: 15px;
        padding:0 15px 15px 0;
        width: 45%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    
    &__description{
      display: block;
      margin-bottom: 15px;
    }

    &__cross{
      position: absolute;
      right: 1.5rem;
      top: 1.5rem;
      height: 2.86rem;
      cursor: pointer;
    }

    &__photo {
      max-width: calc((100% - 50px) / 2);
      aspect-ratio: 1/1;
      object-fit: cover;
      border-radius: .5rem 0 0 .5rem;
    }

    &__review{
        display: flex;
        align-items: center;
        column-gap: 2rem;
        margin-bottom: 15px;
    }

    &__review-text{
      display: block;
      color: var(--color-taupe-gray);
    }

    &__review-separator{
        height: 2rem;
        width: 0.5px;
        background-color: var(--color-taupe-gray);
    }
    
    &__product-type{
      display: block;
      margin-bottom: 15px;
    }

    &__section-header{
      display: block;
      color: var(--color-taupe-gray);
      margin-bottom: 15px;
    }

    &__color{
        display: flex;
        column-gap: 1.1vw;
        margin-bottom: 15px;

        &-item{
            width: 2.1vw;
            height: 2.1vw;
            border-radius: 100%;
            cursor: pointer;
        }

        &-item:nth-child(1){
            background-color: var(--color-violet-blue);
        }

        &-item:nth-child(2){
            background-color: var(--color-black);
        }

        &-item:nth-child(3){
            background-color: var(--color-uc-gold);
        }
    }

    &__bottom{
      display: flex;
      column-gap: 3.5rem;
    }

    &__bottom-cartadding{
      border:1px solid var(--color-black);
      background-color: var(--color-white);
      border-radius: 1.43rem;
      padding: 1.71rem 4.71rem;
    }

    &__bottom-cartadding:hover{
      color: var(--color-white);
      background-color: var(--color-black);
      transition: 0.25s ease-in-out;
    }
}

@media (max-width:768px) {
.product-modal{
  &__detail{
    padding: 1.86rem;
    width: 100%;
  }

  &__content{
    flex-direction: column;
    max-width: 80%;
  }

  &__photo{
    border-radius: .5rem .5rem 0 0;
    max-height: 50rem;
    max-width: 100%;
  }

  &__cross{
    right: 1rem;
    top: 1rem;
    fill: var(--color-white);
  }

  &__bottom{
    justify-content: center;
    column-gap: 7rem;
  }
  
  &__header, &__price, 
  &__description, &__review, 
  &__product-type, &__section-header, &__color{
    margin-bottom: 7.5px;
  }
}  
}
</style>