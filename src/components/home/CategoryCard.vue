<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  title: String,
  imageSrc: String
})
</script>

<template>
  <div class="category-section__card category-card">
    <img class="category-card__image" :src="imageSrc" :alt="title" />
    <h3 class="category-card__title text-lg">
      {{ title }}
    </h3>
  </div>
</template>


<style lang="scss" scoped>
.category-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  &__image {
    width: 30rem;
    height: 87%;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 6%;
  }

  &__title {
    font-weight: 600;
    color: var(--color-dark-charcoal);
  }
}

@media only screen and (max-width:991px) {
  .category-card {
    &__image {
      width: 25rem;
    }
  }
}

@media only screen and (max-width:768px) {
  .category-card {
    &__image {
      width: 20rem;
    }
  }
}

@media only screen and (max-width:768px) {
  .category-card {
    &__image {
      width: 100%;
    }
  }
}
</style>
