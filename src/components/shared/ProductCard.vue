<script setup>
import { ref, computed } from 'vue'
import ProductLabel from './ProductLabel.vue'
import { useModal } from 'vue-final-modal'
import ModalProduct from './ModalProduct.vue'

import LoginModal from '../authentication/LoginModal.vue'
import { useUserStore } from '@/stores/userStore'
import { useCartStore } from '@/stores/cartStore'
import GenericToast from '../generics/GenericToast.vue'

import CartAddIcon from '../../assets/icons/CartAddIcon.svg';

const userStore = useUserStore()
const cartStore = useCartStore()

const toastFlag = ref(false)

const determineType = (p) => {
  if (p.discount > 0) return 'discount'
  else if (p.isNew) return 'new'
  else return 'stock'
}

const productType = computed(() => determineType(props))

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
  }
})

const convertPrice = value => '$' + value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')


const addToCart = () => {
  cartStore.addProduct({
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
}

const addProduct = () => {
  if (!userStore.isAuthenticated()) OpenLoginModal()
  else {
    toastFlag.value = true
    addToCart()
  }
}

const { open: OpenLoginModal } = useModal({
  component: LoginModal
})


const { open: OpenProductModal } = useModal({
  component: ModalProduct,
  attrs: {
    id: props.id,
    imageUrl: props.imageUrl,
    name: props.name,
    code: props.code,
    description: props.description,
    price: convertPrice(props.price - props.price * props.discount / 100),
    oldPrice: convertPrice(props.price),
    stock: props.stock,
    rating: props.rating,
    discount: props.discount,
    isNew: props.isNew,
    createdAt: props.createdAt,
    updatedAt: props.updatedAt,
    productType: determineType(props)
  }
})
</script>

<template>
  <div class="product-list-section__card product-card">
    <GenericToast v-if="toastFlag" message="Product added to cart" type="info" />
    <div class="product-card__image" :style="{ backgroundImage: `url(${imageUrl})` }" />

    <div class="product-card__overlay text-lg" @click="OpenProductModal">
      <!-- <button class="product-card__button text-sm" @click="addProduct">Add to cart</button>
      <button class="product-card__button text-sm" @click="OpenProductModal">Details</button> -->
      Click for Details
    </div>

    <button class="product-card__cart-button" @click="addProduct">
      <CartAddIcon width="3.6rem" height="3.6rem"/>
    </button>

    <div class="product-card__text-wrapper">
      <h3 class="product-card__title text-lg">
        {{ name }}
      </h3>

      <span class="product-card__description text-sm">
        {{ code }}
      </span>

      <div class="product-card__price-wrapper">
        <span class="product-card__price text-md">
          {{ convertPrice(price - price * discount / 100) }}
        </span>

        <span class="product-card__old-price text-sm">
          {{ convertPrice(price) }}
        </span>
      </div>
    </div>

    <ProductLabel :type="productType" :value="discount" />
  </div>
</template>

<style lang="scss" scoped>
.product-card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: inherit;
  height: 100%;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  &__image {
    width: 100%;
    aspect-ratio: 95/100;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    &:hover+.product-card__overlay {
      display: flex;
    }
  }

  &__text-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 0.8rem;
    padding: 1.6rem;
    padding-bottom: 3rem;
    background-color: var(--color-cultured);
  }

  &__title {
    font-weight: 600;
    color: var(--color-granite-gray);
  }

  &__description {
    font-weight: 500;
    color: var(--color-taupe-gray);
    margin-bottom: 1.6rem;
  }

  &__price-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 1.6rem;
    margin-top: auto;

  }

  &__price {
    font-weight: 600;
    color: var(--color-dark-charcoal);
  }

  &__old-price {
    font-weight: 400;
    text-decoration-line: line-through;
    color: var(--color-silver-foil);
  }

  &__cart-button {
    position: absolute;
    bottom: 2.4rem;
    right: 2.4rem;
  }

  &__overlay {
    font-weight: 500;
    color: var(--color-white);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1.6rem;
    width: 100%;
    aspect-ratio: 95/100;
    background-color: rgba(#898989, $alpha: 0.7);
    opacity: 0;
    transition: all 0.3s ease-in-out;

    cursor: pointer;

    &:hover {
      display: flex;
      opacity: 1;
    }
  }

  &__button {
    font-weight: 600;
    line-height: 150%;
    color: var(--color-uc-gold);
    width: 70%;
    padding: 12px 0;
    background-color: var(--color-white);
    opacity: 1;
  }
}

@media only screen and (max-width: 575px) {
  .product-card__text-wrapper {
    align-items: center;
  }
}
</style>
