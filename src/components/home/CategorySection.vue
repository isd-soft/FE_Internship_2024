<template>
  <section class="main__section section category-section">
    <div class="category-section__container container">
      <h2 class="category-section__title text-xl">Browse the range</h2>

      <p class="category-section__paragraph text-md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <GenericList :items="categoryList" customClass="category-section__list" itemClass="category-section__list-item">
        <template v-slot="{ item }">
          <CategoryCard v-bind="item" />
        </template>
      </GenericList>
    </div>
  </section>
</template>

<script setup>
import CategoryCard from './CategoryCard.vue';
import { getUrlFromString } from '../../utils/getUrlFromString.js'
import GenericList from '../generics/GenericList.vue'

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
    margin-bottom: 62.29px;
  }

  &__list {
    display: flex;
    justify-content: space-between;
    width: 100%;

    & :deep(.category-section__list-item) {
      width: calc((100% - 40px) / 3);
    }
  }
}
</style>