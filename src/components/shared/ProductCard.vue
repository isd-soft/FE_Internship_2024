<template>
  <div
    class="product-list-section__card product-card"
    @mouseenter="hoverFlag = true"
    @mouseleave="hoverFlag = false"
  >
    <img :src="imageSrc" :alt="title" />

    <div class="product-card__text-wrapper">
      <h3 class="product-card__title text-lg">
        {{ title }}
      </h3>

      <span class="product-card__description text-sm">
        {{ description }}
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

    <ProductLabel :type="productType" />

    <div v-show="hoverFlag" class="product-card__overlay">
      <button class="product-card__button text-sm">Add to cart</button>
      <button class="product-card__button text-sm" @click="openModal">Details</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProductLabel from './ProductLabel.vue'
import { useModal } from 'vue-final-modal'
import ModalProduct from './ModalProduct.vue'

const hoverFlag = ref(false)

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  imageSrc: String,
  title: String,
  description: String,
  price: Number,
  oldPrice: {
    type: Number,
    required: false
  },
  productType: {
    type: String,
    validator: (value) => ['discount', 'stock', 'new'].includes(value)
  }
})

const openModal = () => {
  open()
}

const convertPrice = (value) =>
  value ? 'Rp ' + value.toLocaleString('en-US').replace(/,/g, '.') : ''

const { open } = useModal({
  component: ModalProduct,
  attrs: {
    id: 1,
    header: props.title,
    price: convertPrice(props.price),
    // description: props.description,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rating: 3.5,
    reviews: 10,
    // productType: props.productType,
    productType: 'Available',
    // imgSrc: props.imageSrc,
    imgSrc:
      'https://media.istockphoto.com/id/1293762741/photo/modern-living-room-interior-3d-render.webp?s=2048x2048&w=is&k=20&c=y5qtIaTcN6mnSb3bxBBhnBycfmNK48g6xawyfXHB5lw='
  }
})
</script>

<style lang="scss" scoped>
.product-card {
  position: relative;
  display: flex;
  flex-direction: column;

  &__image {
    width: 100%;
    height: 67%;
  }

  &__text-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    padding: 6%;
    padding-bottom: 7%;
    background-color: var(--color-cultured);

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
  }

  &__price-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 16px;
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
