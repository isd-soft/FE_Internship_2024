<template>
  <div class="product-list-section__card product-card" @mouseenter="hoverFlag = true" @mouseleave="hoverFlag = false">
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
      <button class="product-card__button text-sm">Details</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProductLabel from './ProductLabel.vue'

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

const convertPrice = (value) =>
  value ? 'Rp ' + value.toLocaleString('en-US').replace(/,/g, '.') : ''
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
    padding: 16px;
    padding-bottom: 30px;
    background-color: var(--color-cultured);

    @media (max-width: 768px) {
      padding: 6%;
      padding-top: 3%;
    }
  }

  &__title {
    font-weight: 600;
    color: var(--color-granite-gray);

    @media (max-width: 768px) {
      font-size: 3.6rem;
    }
  }

  &__description {
    font-weight: 500;
    color: var(--color-taupe-gray);

    @media (max-width: 768px) {
      font-size: 2.4rem;
    }
  }

  &__price-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  &__price {
    font-weight: 600;
    color: var(--color-dark-charcoal);
    margin-right: 6%;

    @media (max-width: 768px) {
      font-size: 3.2rem;
    }
  }

  &__old-price {
    font-weight: 400;
    text-decoration-line: line-through;
    color: var(--color-silver-foil);

    @media (max-width: 768px) {
      font-size: 2.4rem;
    }
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
    width: 100%;
    max-width: 200px;
    padding: 12px 0;
    background-color: var(--color-white);
  }
}
</style>