<script setup>
import { useUserStore } from '@/stores/userStore'
import { VueFinalModal, useVfm } from 'vue-final-modal'
import LoginModal from '../authentication/LoginModal.vue'
import { useModal } from 'vue-final-modal'
import { useCartStore } from '@/stores/cartStore'
import { createToast } from '../generics/GenericToast.vue'
import Counter from './Counter.vue'
import StarRating from './StarRating.vue'
import ClosingIcon from '../../assets/icons/CrossIcon.svg'
import ProductChip from '../shared/ProductChip.vue'
import { computed, ref } from 'vue'

const { open: openLoginModal } = useModal({
  component: LoginModal
})

const user = useUserStore()
const cart = useCartStore()

const reviews = Math.floor(Math.random() * 20)
const quantity = ref(1)

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
      updatedAt: props.updatedAt,
      quantity: quantity.value
    })

    createToast("Product added to cart", "success")
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
    type: String,
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

const changeQuantity = (count) => { quantity.value = count }

const ratingFlag = reviews > 0 && Number(props.rating) > 0
const stockFlag = computed(() => props.productType === 'stock')

const convertPrice = value => '$' + value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

</script>

<template>
  <VueFinalModal class="product-modal" content-class="product-modal__container" overlay-transition="vfm-fade"
    content-transition="vfm-fade" @clickOutside="emit('close')">

    <ClosingIcon class="product-modal__cross" @click="close()" />

    <img :src="imageUrl" class="product-modal__image" alt="Product Image" />

    <div class="product-modal__content-wrapper">

      <h2 class="product-modal__title">
        {{ name }}
      </h2>

      <span class="product-modal__code">
        {{ code }}
      </span>

      <div class="product-modal__price-wrapper">
        <span class="product-modal__price">
          {{ convertPrice(price - price * discount / 100) }}
        </span>

        <ProductChip :type="productType" :value="discount" />
      </div>

      <span class="product-modal__description">
        {{ description }}
      </span>

      <div v-if="ratingFlag" class="product-modal__review-wrapper">
        <StarRating :ratingStars="Number(rating)" />

        <span class="product-modal__review-separator" />

        <span class="product-modal__review-count">
          {{ reviews }} Customer Review
        </span>
      </div>

      <h4 class="product-modal__color-title">
        Colors
      </h4>

      <div class="product-modal__color-wrapper">
        <div class="product-modal__color" />

        <div class="product-modal__color" />

        <div class="product-modal__color" />
      </div>

      <div class="product-modal__button-wrapper">
        <Counter :isVisible="!stockFlag" @countChanged="changeQuantity" />

        <button :disabled="stockFlag" class="product-modal__add-button"
          :class="{ 'product-modal__add-button--disabled': stockFlag }" @click="isAuthenticated()">
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
    border-radius: 0.5rem;
    background: var(--color-white);
    width: fit-content;
    max-width: 90%;
    border-radius: 10px;
    overflow: hidden;
  }

  &__content-wrapper {
    display: flex;
    flex-direction: column;
    padding: 30px;
    width: 450px;
  }

  &__title {
    font-size: 30px;
    font-weight: 400;
    display: block;
    width: fit-content;
    max-width: 75%;
  }

  &__code {
    font-size: 14px;
    color: var(--color-taupe-gray);
    display: block;
    width: fit-content;
    margin-bottom: 30px;
  }

  &__price-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  &__price {
    font-size: 20px;
    display: block;
    width: fit-content;
    color: var(--color-taupe-gray);
  }

  &__description {
    font-size: 16px;
    display: block;
    margin-bottom: 15px;
  }

  &__cross {
    position: absolute;
    right: 30px;
    top: 30px;
    height: 30px;
    cursor: pointer;
  }

  &__image {
    width: 450px;
    aspect-ratio: 1/1;
    object-fit: cover;
    background-color: red;
  }

  &__review-wrapper {
    display: flex;
    align-items: center;
    column-gap: 2rem;
    margin-bottom: 15px;
  }

  &__review-count {
    font-size: 12px;
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

  &__color-title {
    color: var(--color-taupe-gray);
    font-weight: 400;
    font-size: 12px;
    display: block;
    width: fit-content;
    color: var(--color-taupe-gray);
    margin-bottom: 5px;
  }

  &__color-wrapper {
    display: flex;
    column-gap: 1.5rem;
    margin-bottom: auto;
  }

  &__color {
    width: 20px;
    height: 20px;
    border-radius: 100%;
    cursor: pointer;

    &:nth-child(1) {
      background-color: var(--color-violet-blue);
    }

    &:nth-child(2) {
      background-color: var(--color-black);
    }

    &:nth-child(3) {
      background-color: var(--color-uc-gold);
    }
  }

  &__button-wrapper {
    display: flex;
    gap: 20px;
    justify-content: flex-end;
  }

  &__add-button {
    background-color: transparent;
    border: 1px solid var(--color-black);
    color: var(--color-black);
    padding: 1.2rem;
    font-size: 16px;
    font-weight: 500;
    width: fit-content;
    transition: 0.2s ease-in-out;
    border-radius: 10px;

    &:hover {
      color: var(--color-white);
      background-color: var(--color-black);
    }

    &--disabled {
      border: 1px solid var(--color-quick-silver);
      color: var(--color-quick-silver);
      cursor: not-allowed;

      &:hover {
        color: var(--color-quick-silver);
        background-color: transparent;
      }
    }
  }
}

@media only screen and (max-width: 991px) {
  .product-modal {
    &__container {
      flex-direction: column;
    }

    &__content-wrapper {
      width: 100%;
    }

    &__image {
      width: 100%;
      aspect-ratio: 2/1;
    }

    &__cross {
      top: 60px;
      fill: var(--color-white);
    }

    &__color-wrapper {
      margin-bottom: 20px;
    }
  }
}

@media only screen and (max-width: 575px) {
  .product-modal {
    &__container {
      max-width: none;
      width: 100vw;
      height: 100vh;
    }

    &__image {
      aspect-ratio: 1/1;
    }

    &__content-wrapper {
      height: 100%;
      padding-bottom: 60px;
    }

    &__color-wrapper {
      margin-bottom: auto;
    }

    &__description {
      font-size: 14px;
    }

    &__add-button {
      font-size: 12px;
    }
  }
}
</style>
