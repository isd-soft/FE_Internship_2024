<script setup>
defineProps({
  icon: {
    type: Object
  },
  infoTitle: {
    type: String
  },
  infoText: {
    type: Array
  },
  href: {
    type: String
  },
  styles: {
    type: String
  }
})
</script>

<template>
  <div class="info-card">
    <div class="info-card__text-wrapper">
      <div class="info-card__title-wrapper">
        <div class="info-card__icon-wrapper">
          <component :is="icon" class="info-card__icon" />
        </div>

        <h3 class="info-card__title">
          {{ infoTitle }}
        </h3>
      </div>

      <a
        v-for="item in infoText"
        :key="item.id"
        :href="href + item"
        class="info-card__link"
        :style="styles"
        >{{ item }}</a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info-card {
  display: flex;
  flex-direction: column;
  width: 100%; //remove me

  &__text-wrapper { //remove me
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
  }

  &__title-wrapper {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 10px;
  }

  &__icon-wrapper {
    display: flex;
    align-items: center;
  }

  &__title {
    font-size: 24px;
    font-weight: 500;
  }

  &__link {
    font-size: 16px;
    color: var(--color-black);
    display: block;
    width: fit-content;
    padding-left: 35px;
    margin-bottom: 12px;
    &:hover {
      color: var(--color-uc-gold);
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}
// .info-card {
//   display: flex;
//   height: min-content;
//   &__icon-wrapper {
//     width: 30px;
//     margin-right: 12px;
//   }
//   &__title {
//     margin-bottom: 10px;
//     font-weight: 500;
//   }
//   &__about-wrapper {
//     margin-bottom: 5px;
//   }
//   &__about {
//     font-weight: 300;
//     text-decoration: none;
//     color: var(--color-black);
//     &:hover {
//       color: var(--color-uc-gold);
//     }
//   }
// }
@media only screen and (max-width: 768px) {
  .info-card {
    &__title {
      text-align: center;
      font-size: 24px;
    }
  }
}

@media only screen and (max-width: 575px) {
  .info-card {
    &__title-wrapper {
      flex-direction: column;
      align-items: center;
    }
    &__title{
        font-size: 24px;
    }
    &__link {
      width: 100%;
      padding-left: 0px;
      text-align: center;
      font-size: 14px;

      margin-bottom: 6px;
    &:hover {
      color: var(--color-uc-gold);
    }

    &:last-child {
      margin-bottom: 0;
    }
    }
  }
}
</style>
