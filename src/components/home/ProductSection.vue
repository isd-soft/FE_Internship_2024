<script setup>
import GenericList from '../generics/GenericList.vue'
import ProductCard from '../shared/ProductCard.vue'
import { computed, watch, ref } from 'vue'
import { useProductStore } from '@/stores/productStore.js'
import { useWindowSize } from '@vueuse/core'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const productStore = useProductStore()


const { width } = useWindowSize();

const cardCount = ref(10)

watch(width, (newWidth) => {
  if (newWidth <= 768) {
    cardCount.value = 10
  } else if (newWidth <= 991) {
    cardCount.value = 9
  } else if (newWidth <= 1300) {
    cardCount.value = 8
  } else {
    cardCount.value = 10
  }
}, { immediate: true })

const productList = computed(() => Array.from(productStore.productMap.values()).slice(0, cardCount.value))


</script>

<template>
  <section class="main__section section product-section">
    <div class="product-section__container container">
      <h2 class="product-section__title text-3xl">Our Products</h2>

      <GenericList v-if="productStore.loader && (width > 575)" :items="productList" tag="ul" keyProp="id"
        customClass="product-section__list" itemClass="product-section__item">
        <template v-slot="{ item }">
          <ProductCard v-bind="item" />
        </template>
      </GenericList>

      <Swiper v-if="productStore.loader && (width <= 575)" class="product-section__slider" :grab-cursor="true"
        :slides-per-group="1" :slides-per-view="1" loop :pagination="{ clickable: true }" :modules="[Pagination]">
        <SwiperSlide v-for="(product, index) in productList" :key="index">
          <ProductCard v-bind="product" />
        </SwiperSlide>
      </Swiper>

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
  }

  &__title {
    font-weight: 700;
    color: var(--color-dark-charcoal);
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
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

  &__slider {
    width: 100%;
  }
}

@media only screen and (max-width: 1300px) {
  .product-section__list {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media only screen and (max-width: 991px) {
  .product-section__list {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media only screen and (max-width: 768px) {
  .product-section__list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media only screen and (max-width: 575px){
  .product-section__button{
    padding: 2rem 0;
    width: 80%; 

  }
  
}
</style>

<style lang="scss">
.product-section__slider {
  .swiper-pagination {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 32px;

    .swiper-pagination-bullet {
      width: 1.1rem;
      height: 1.1rem;
      background-color: var(--color-light-silver);
      opacity: 1;
      margin: 0;
    }

    .swiper-pagination-bullet-active {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2.6rem;
      height: 2.6rem;
      background-color: transparent;
      border: 1px solid var(--color-uc-gold);

      &::after {
        content: '';
        width: 1.1rem;
        height: 1.1rem;
        background-color: var(--color-uc-gold);
        border-radius: 50%;
      }
    }
  }
}
</style>