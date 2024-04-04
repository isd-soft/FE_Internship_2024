<template>
  <div class="category-section__card category-card">
    <img class="category-card__image" :src="imageSrc" :alt="title" />
    <h3 class="category-card__title text-lg">
      {{ title }}
    </h3>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  title: String,
  imageSrc: String
})
</script>

<style lang="scss" scoped>
.category-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  &__image {
    width: 100%;
    height: 87%;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 6%;
  }

  &__title {
    font-weight: 600;
    line-height: 36px;
    color: var(--color-dark-charcoal);
  }
}
</style>
