<script setup>
import { useUserStore } from '@/stores/userStore'
import { VueFinalModal, useVfm } from 'vue-final-modal'
import LoginModal from '../authentication/LoginModal.vue'
import { useModal } from 'vue-final-modal'
import { useCartStore } from '@/stores/cartStore'
import {createToast} from '../generics/GenericToast.vue'
import Counter from './Counter.vue'
import StarRating from './StarRating.vue'
import ClosingIcon from '../../assets/icons/CrossIcon.svg'
import {ProductChip}

const { open: openLoginModal } = useModal({
  component: LoginModal
})

const user = useUserStore()
const cart = useCartStore()
const reviews = () => Math.floor(Math.random() * 20)

const isAuthenticated = () => {
  if (!user.isAuthenticated()) {
    openLoginModal()
  } else {
    cart.addProduct({
      id: props.id,
      imageUrl: props.imageUrl,
      name: props.name,
      code: props.code,
      description: props.description,
      price: props.price,
      stock: props.stock,
      rating: props.rating,
      discount: props.discount,
      isNew: props.isNew,
      createdAt: props.createdAt,
      updatedAt: props.updatedAt
    })

    createToast("Product added to cart","success")
  }
}

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
  productType: {
    type: String,
    validator: (value) => ['discount', 'stock', 'new'].includes(value)
  }
})

const vfm = useVfm()

const close = () => {
  vfm.closeAll(vfm.openedModals)
}
</script>

<template>
  <VueFinalModal class="product-modal" content-class="product-modal__container" overlay-transition="vfm-fade"
    content-transition="vfm-fade" @clickOutside="emit('close')">

    <ClosingIcon class="product-modal__cross" @click="close()" />

    <img :src="imageUrl" class="product-modal__photo" alt="Product Image" />

    <div class="product-modal__content-wrapper">

      <h2 class="product-modal__title">
        {{ name }}
      </h2>

      <span class="product-modal__code">
        {{ code }}
      </span>

      <span class="product-modal__price">
        {{ price }}
      </span>

      <span class="product-modal__description text-sm">
        {{ description }}
      </span>

      <div v-if="Number(rating)" class="product-modal__review-wrapper">
        <StarRating :ratingStars="Number(rating)" />

        <span class="product-modal__review-separator" />

        <span class="text-xs product-modal__review-count">
          {{ reviews() }} Customer Review
        </span>
      </div>

      <span class="product-modal__section-header text-xs">Colors</span>
      <div class="product-modal__color">
        <div class="product-modal__color-item"></div>
        <div class="product-modal__color-item"></div>
        <div class="product-modal__color-item"></div>
      </div>

      <div class="product-modal__bottom">
        <Counter />
        <button class="product-modal__bottom-cartadding text-md" @click="isAuthenticated()">
          Add to cart
        </button>
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

  &__container {
    position: relative;
    display: flex;
    width: fit-content;
    max-width: 80%;
    border-radius: 0.5rem;
    background: var(--color-white);
  }

  &__content-wrapper {
    display: flex;
    flex-direction: column;
    width: fit-content;
    padding: 30px;
  }

  &__title {
    font-size: 30px;
    font-weight: 400;
    display: block;
    width: fit-content;
  }

  &__code {
    font-size: 20px;
    color: var(--color-taupe-gray);
    display: block;
    width: fit-content;
    margin-bottom: 2rem;
  }

  &__price {
    font-size: 20px;
    display: block;
    width: fit-content;
    color: var(--color-taupe-gray);
    margin-bottom: 1rem;
  }

  &__description {
    display: block;
    margin-bottom: 15px;
  }

  &__cross {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    height: 2.86rem;
    cursor: pointer;
  }

  &__photo {
    width: 45rem;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 0.5rem 0 0 0.5rem;
  }

  &__review-wrapper {
    display: flex;
    align-items: center;
    column-gap: 2rem;
    margin-bottom: 15px;
  }

  &__review-count {
    display: block;
    color: var(--color-taupe-gray);
  }

  &__review-separator {
    height: 2rem;
    width: 0.5px;
    background-color: var(--color-taupe-gray);
  }

  &__product-type {
    display: block;
    margin-bottom: 15px;
  }

  &__section-header {
    display: block;
    color: var(--color-taupe-gray);
    margin-bottom: 15px;
  }

  &__color {
    display: flex;
    column-gap: 1.5rem;
    margin-bottom: 15px;

    &-item {
      width: 2.1vw;
      height: 2.1vw;
      border-radius: 100%;
      cursor: pointer;
    }

    &-item:nth-child(1) {
      background-color: var(--color-violet-blue);
    }

    &-item:nth-child(2) {
      background-color: var(--color-black);
    }

    &-item:nth-child(3) {
      background-color: var(--color-uc-gold);
    }
  }

  &__bottom {
    display: flex;
    column-gap: 2rem;
  }

  &__bottom-cartadding {
    display: flex;
    border: 1px solid var(--color-black);
    background-color: var(--color-white);
    align-items: center;
    justify-content: center;
    max-height: 5rem;
    width: fit-content;
    border-radius: 1.43rem;
    padding: 1.71rem 4.71rem;
  }

  &__bottom-cartadding:hover {
    color: var(--color-white);
    background-color: var(--color-black);
    transition: 0.25s ease-in-out;
  }
}

@media (max-width: 992px) {
  .product-modal {
    &__header {
      margin-top: 0;
    }

    &__detail {
      margin-top: 0;
      padding: 1.86rem;
      width: 100%;
    }

    &__content {
      flex-direction: column;
      max-width: 80%;
    }

    &__photo {
      border-radius: 0.5rem 0.5rem 0 0;
      max-height: 50rem;
      width: 100%;
    }

    &__cross {
      right: 1rem;
      top: 1rem;
      fill: var(--color-white);
    }

    &__bottom {
      justify-content: center;
      column-gap: 3.5rem;
    }

    &__header,
    &__price,
    &__description,
    &__review,
    &__product-type,
    &__section-header {
      margin-bottom: 7.5px;
    }

    &__color {
      margin-bottom: 1.5rem;
    }
  }
}
</style>
