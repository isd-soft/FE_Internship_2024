<template>
  <section class="main__section section product-section">
    <div class="product-section__container container">
      <h2 class="product-section__title text-3xl">Our Products</h2>

      <GenericList
        :items="productList"
        tag="ul"
        keyProp="id"
        customClass="product-section__list"
        itemClass="product-section__item"
      >
        <template v-slot="{ item }">
          <ProductCard v-bind="item" />
        </template>
      </GenericList>

      <button class="product-section__button text-sm">Show more</button>
    </div>
  </section>
</template>

<script setup>
import GenericList from '../generics/GenericList.vue'
import ProductCard from '../shared/ProductCard.vue'

const productList = [
  {
    id: 1,
    imageSrc: 'https://via.placeholder.com/381x480/CCCCCC/FFFFFF?text=Placeholder+Image',
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
    oldPrice: 3500000,
    productType: 'stock'
  },
  {
    id: 2,
    imageSrc: 'https://via.placeholder.com/381x480/CCCCCC/FFFFFF?text=Placeholder+Image',
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
    oldPrice: 3500000,
    productType: 'stock'
  },
  {
    id: 3,
    imageSrc: 'https://via.placeholder.com/381x480/CCCCCC/FFFFFF?text=Placeholder+Image',
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
    oldPrice: 3500000,
    productType: 'stock'
  },
  {
    id: 4,
    imageSrc: 'https://via.placeholder.com/381x480/CCCCCC/FFFFFF?text=Placeholder+Image',
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
    oldPrice: 3500000,
    productType: 'stock'
  },
  {
    id: 5,
    imageSrc: 'https://via.placeholder.com/381x480/CCCCCC/FFFFFF?text=Placeholder+Image',
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
    oldPrice: 3500000,
    productType: 'stock'
  },
  {
    id: 6,
    imageSrc: 'https://via.placeholder.com/381x480/CCCCCC/FFFFFF?text=Placeholder+Image',
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
    oldPrice: 3500000,
    productType: 'stock'
  },
  {
    id: 7,
    imageSrc: 'https://via.placeholder.com/381x480/CCCCCC/FFFFFF?text=Placeholder+Image',
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
    oldPrice: 3500000,
    productType: 'stock'
  },
  {
    id: 8,
    imageSrc: 'https://via.placeholder.com/381x480/CCCCCC/FFFFFF?text=Placeholder+Image',
    title: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
    oldPrice: 3500000,
    productType: 'stock'
  }
]
</script>

<style lang="scss" scoped>
.product-section {
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 32px;
    width: 100%;
    max-width: 1236px;
    margin: 0 auto;
  }

  &__title {
    font-weight: 700;
    color: var(--color-dark-charcoal);
  }

  &__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 32px;
    padding: 0;
    margin: 0;
    list-style: none;

    & :deep(.product-section__item) {
      width: calc((100% - 96px) / 4);
    }
  }

  &__button {
    font-weight: 600;
    color: var(--color-uc-gold);
    padding: 12px 78px;
    border: 1px solid var(--color-uc-gold);
    background-color: var(--color-white);
  }
}
</style>