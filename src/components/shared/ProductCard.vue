<script setup>
import { ref, computed } from 'vue'
import ProductLabel from './ProductLabel.vue'
import { useModal } from 'vue-final-modal'
import ModalProduct from './ModalProduct.vue'

import LoginModal from '../authentication/LoginModal.vue'
import { useUserStore } from '@/stores/userStore'
import { useCartStore } from '@/stores/cartStore'
import GenericToast from '../generics/GenericToast.vue'

const userStore = useUserStore()
const cartStore = useCartStore()

const hoverFlag = ref(false)
const toastFlag = ref(false)

const determineType = (p) => {
  if(p.discount > 0) return 'discount'
  else if (p.isNew) return 'new'
  else return 'stock'
}

const productType = computed(() => determineType(props))

// eslint-disable-next-line no-unused-vars
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
  // value: {
  //   type: Number,
  //   validator: (value) => value >= 0
  // },
  // productType: {
  //   type: String,
  //   validator: (value) => ['discount', 'stock', 'new'].includes(value)
  // },
})

const convertPrice = (value) =>
  value ? '$' + value.toLocaleString('en-US').replace(/,/g, '.') : ''

const truncateDescription = (text) => text.substring(0, 49).concat("...")

const addToCart = () => {
  cartStore.addProduct({
    id: props.id,
    imageUrl: props.imageUrl,
    name: props.name,
    code: props.code,
    description: props.description,
    price: props.price,
    oldPrice: props.oldPrice,
    stock: props.stock,
    rating: props.rating,
    discount: props.discount,
    isNew: props.isNew,
    createdAt: props.createdAt,
    updatedAt: props.updatedAt
  })
}

const addProduct = () =>{
  if (!userStore.isAuthenticated()) OpenLoginModal()
  else {
    toastFlag.value = true
    addToCart()
}
}

const {open: OpenLoginModal} = useModal({
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
    price: convertPrice(props.price),
    oldPrice: convertPrice(props.oldPrice),
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
  <div
    class="product-list-section__card product-card"
    @mouseenter="hoverFlag = true"
    @mouseleave="hoverFlag = false"
  >
  <GenericToast v-if="toastFlag" message="Product added to cart" type="info" />
    <img class="product-card__image" :src="imageUrl" :alt="name" />

    <div class="product-card__text-wrapper">
      <h3 class="product-card__title text-lg">
        {{ name }}
      </h3>

      <span class="product-card__description text-sm">
        {{ truncateDescription(description) }}
      </span>

      <div class="product-card__price-wrapper">
        <span class="product-card__price text-md">
          {{ convertPrice(price) }}
        </span>

        <span class="product-card__old-price text-sm">
          {{ convertPrice(oldPrice) }}
        </span>
      </div>
    </div>

    <ProductLabel :type="productType" :value="discount"/>

    <div v-show="hoverFlag" class="product-card__overlay">
      <button class="product-card__button text-sm" @click="addProduct">Add to cart</button>
      <button class="product-card__button text-sm" @click="OpenProductModal">Details</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-card {
  position: relative;
  display: flex;
  flex-direction: column;

  &__image {
    width: 100%;
    aspect-ratio: 95/100;
  }

  &__text-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    padding: 6%;
    padding-bottom: 7%;
    background-color: var(--color-cultured);
    height: 100%;

    @media only screen and (max-width: 375px) {
      align-items: center;
    }
  }

  &__title {
    font-weight: 600;
    color: var(--color-granite-gray);
  }

  &__description {
    font-weight: 500;
    color: var(--color-taupe-gray);
    // text-overflow: ellipsis;
    // white-space: nowrap;
    // overflow: hidden;
  }

  &__price-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 16px;
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

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 16px;
    width: 100%;
    height: 100%;
    background-color: var(--color-taupe-gray);
    opacity: 72%;
  }

  &__button {
    font-weight: 600;
    line-height: 150%;
    color: var(--color-uc-gold);
    width: 70%;
    padding: 12px 0;
    background-color: var(--color-white);
  }
}
</style>
