<script setup>
import GenericList from '../generics/GenericList.vue'
import ProductCard from '../shared/ProductCard.vue'
import { computed } from 'vue'
import { useProductStore } from '@/stores/productStore.js'

const productStore = useProductStore()

const productList = computed(() => Array.from(productStore.productMap.values()).slice(0, 8))

</script>

<template>
  <section class="main__section section product-section">
    <div class="product-section__container container">
      <h2 class="product-section__title text-3xl">Our Products</h2>

      <GenericList v-if="productStore.loader" :items="productList" tag="ul" keyProp="id"
        customClass="product-section__list" itemClass="product-section__item">
        <template v-slot="{ item }">
          <ProductCard v-bind="item" />
        </template>
      </GenericList>

      <button class="product-section__button text-sm secondary-button" @click="$router.push('shop')">Show more</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.product-section {
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    width: 85%;
    margin: 0 auto;
  }

  &__title {
    font-weight: 700;
    color: var(--color-dark-charcoal);
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 32px;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    align-items: stretch;

    & :deep(.product-section__item) {
      width: 100%;
      display: flex;
    }

  }

  &__button {
    padding: 1.2rem 7.8rem;
    border: 1px solid var(--color-uc-gold);
  }
}

@media only screen and (max-width: 991px) {
  .product-section__list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 32px;
  }

}

@media only screen and (max-width: 575px) {
  .product-section__list {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>