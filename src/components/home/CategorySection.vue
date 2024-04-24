<script setup>
import CategoryCard from './CategoryCard.vue'
import { getUrlFromString } from '../../utils/getUrlFromString.js'
import GenericList from '../generics/GenericList.vue'
import { useWindowSize } from '@vueuse/core'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const { width } = useWindowSize();

const categoryList = [
  {
    title: 'Dining',
    imageSrc: getUrlFromString('/category_image_1.jpg')
  },
  {
    title: 'Living',
    imageSrc: getUrlFromString('/category_image_2.jpg')
  },
  {
    title: 'Bedroom',
    imageSrc: getUrlFromString('/category_image_3.jpg')
  }
]
</script>

<template>
  <section class="main__section section category-section">
    <div class="category-section__container container">
      <h2 class="category-section__title text-3xl">Browse the range</h2>

      <p class="category-section__paragraph text-md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <Swiper v-if="width < 576" class="category-section__slider" :grab-cursor="true" :slides-per-group="1"
        :slides-per-view="1" loop :pagination="{ clickable: true }" :modules="[Pagination]">
        <SwiperSlide v-for="(category, index) in categoryList" :key="index">
          <CategoryCard v-bind="category" />
        </SwiperSlide>
      </Swiper>

      <GenericList v-else :items="categoryList" customClass="category-section__list"
        itemClass="category-section__list-item">
        <template v-slot="{ item }">
          <CategoryCard v-bind="item" />
        </template>
      </GenericList>

    </div>
  </section>
</template>


<style lang="scss" scoped>
.category-section {
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;

  }

  &__title {
    font-weight: 700;
    color: var(--color-dark-charcoal);
    margin: 0;
    margin-bottom: 20px;
  }

  &__paragraph {
    font-weight: 400;
    color: var(--color-granite-gray);
    text-align: center;
    margin-bottom: 60px;

  }

  &__list {
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 100%;
  }

  &__slider {
    width: 100%;
  }
}
</style>

<style lang="scss">
.category-section__slider {
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