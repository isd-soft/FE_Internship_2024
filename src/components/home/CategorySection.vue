<template>
  <section class="main__section section category-section">
    <div class="category-section__container container">
      <h2 class="category-section__title text-xl">Browse the range</h2>

      <p class="category-section__paragraph text-md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <Swiper v-if="width < 376" class="category-section__slider" :grab-cursor="true" :slides-per-group="1"
        :slides-per-view="1" loop>
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

<script setup>
import CategoryCard from './CategoryCard.vue'
import { getUrlFromString } from '../../utils/getUrlFromString.js'
import GenericList from '../generics/GenericList.vue'
import { useWindowSize } from '@vueuse/core'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-cards'

const { width } = useWindowSize();

const categoryList = [
  {
    title: 'Dining',
    imageSrc: getUrlFromString('../assets/images/category_image_1.jpg')
  },
  {
    title: 'Living',
    imageSrc: getUrlFromString('../assets/images/category_image_2.jpg')
  },
  {
    title: 'Bedroom',
    imageSrc: getUrlFromString('../assets/images/category_image_3.jpg')
  }
]
</script>

<style lang="scss" scoped>
.category-section {
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 82%;
    max-width: 1440px;
    margin: 0 auto;
  }

  &__title {
    font-weight: 700;
    color: var(--color-dark-charcoal);
    margin: 0;

  }

  &__paragraph {
    font-weight: 400;
    line-height: 30px;
    color: var(--color-granite-gray);
    margin-bottom: 5%;

  }

  &__list {
    display: flex;
    justify-content: space-between;
    width: 100%;

    & :deep(.category-section__list-item) {
      width: 32%;
    }
  }

  &__slider {
    width: 100%;
  }
}
</style>