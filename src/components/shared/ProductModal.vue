<script setup>
import { VueFinalModal, useVfm } from 'vue-final-modal'
import Counter from './Counter.vue';
import StarRating from './StarRating.vue';
import ClosingIcon from '../../assets/icons/CrossIcon.svg'

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
  
    <img :src="imgSrc" class="product-modal__photo" alt="Product Image"/>
    <ClosingIcon class = "product-modal__cross" @click ="close()" />
    <div class="product-modal__details">
      <div>
        <div class="product-modal__header text-3xl part">{{ header }}</div>
        <div class="product-modal__price text-lg secondary-color part">{{ price }}</div>
      </div>
      <div>
        <div class="product-modal__description text-sm part">{{ description }}</div>
        <div class="product-modal__reviews part">
              <StarRating :ratingStars="Number(rating)" />
            <div class="product-modal__reviews-separator secondary-color"></div>
            <div class="text-sm secondary-color">{{ reviews }} Customer Review</div>
      </div>
        <div class="secondary-color text-sm part">Availability</div>
        <div class="product-modal__product-type text-md part">{{ productType }}</div>
        <div class="secondary-color text-sm part">Colors</div>
        <div class="product-modal__colors part-x2">
            <div class="product-modal__colors-item"></div>
            <div class="product-modal__colors-item"></div>
            <div class="product-modal__colors-item"></div>
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

    &__content {    
      position: relative;
        display: flex;
        background: #fff;
        border-radius: 0.5rem;
        column-gap: 5rem;
        max-width: 70%;
    }

    &__details{
        margin-top: 15px;
        padding:0 15px 15px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    &__cross{
      position: absolute;
      right: 1.5rem;
      top: 1.5rem;
      height: 2.86rem;
      cursor: pointer;
    }
    &__photo {
        max-height: 50rem;
        aspect-ratio: 1/1;
        object-fit: cover;
        border-radius: .5rem 0 0 .5rem;
    }

    &__reviews{
        display: flex;
        align-items: center;
        column-gap: 2rem;
    }

    &__reviews-separator{
        height: 2rem;
        width: 0.5px;
        background-color: var(--color-taupe-gray);
    }

    &__colors{
        display: flex;
        column-gap: 1.1vw;

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
      column-gap: 2rem;
    }

    &__bottom-cartadding{
      border:1px solid var(--color-black);
      border-radius: 1.43rem;
      padding: 1.71rem 4.71rem;
      cursor: pointer;
    }

    &__bottom-cartadding:hover{
      color: var(--color-white);
      background-color: var(--color-black);
      transition: 0.25s ease-in-out;
    }
}

.secondary-color{
    color: var(--color-taupe-gray);
}

.part{
    margin-bottom: 15px;
}

.part-x2{
    margin-bottom: 15px;
}

@media (max-width:768px) {
.product-modal{
  &__details{
    padding: 1.86rem;
  }

  &__content{
    flex-direction: column;
    max-width: 80%;
  }

  &__cross{
    right: 1rem;
    top: 1rem;
    fill: var(--color-white);
  }

  &__bottom{
    justify-content: space-between;
  }
}  
.part{
  margin-bottom: 7.5px;
}
}
</style>