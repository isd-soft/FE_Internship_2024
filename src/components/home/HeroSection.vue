<script setup></script>

<template>
  <section class="main__section section hero-section">
    <div class="hero-section__container container">
    <div class="hero-section__content-wrapper">
      <span class="text-sm hero-section__label">New Arrival</span>
      <h1 class="text-5xl hero-section__title">
        Discover Our
        <br />
        New Collection
      </h1>
      <p class="text-sm hero-section__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
        ullamcorper mattis.
      </p>
      <button class="text-sm primary-button hero-section__button" @click="$router.push('shop')">BUY NOW</button>
    </div>
  </div>
  </section>
</template>

<style lang="scss" scoped>
.hero-section {
  background-image: url('/background_top_banner.png');
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  min-height: calc(100vh - 100px);
  display: flex;
  // padding: 120px 60px;

  &__container{
    margin-bottom: 120px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    min-height: 100%;
  }

  &__content-wrapper {
    margin-top: auto;
    background-color: var(--color-old-lace);
    padding: 60px 40px 40px 40px;
    border-radius: 10px;
    width: 50%;
  }

  &__label {
    font-weight: 500;
    letter-spacing: 3px;
    margin-bottom: 4px;
  }

  &__title {
    color: var(--color-uc-gold);
    margin-bottom: 1.6rem;
  }

  &__description {
    color: var(--color-dark-charcoal);
    margin-bottom: 5rem;
  }

  &__button {
    padding: 2.5rem 7.2rem;
  }
}

@media only screen and (max-width: 1024px) {
  .hero-section {
    padding: 40px;
    justify-content: center;
    align-items: center;

    &__content-wrapper {
      width: 100%;
      padding: 40px;
    }

    &__title,
    &__description,
    &__button,
    &__label {
      display: block;
      text-align: center;
    }

    &__label{
      font-size: 16px;
    }

    &__title{
      // font-size: 4.5rem;
      font-size: 46px;
    }

    &__description {
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
      font-size: 18px;
    
    }

    &__button {
      margin: 0 auto;
      font-size: 16px;
    }
  }
}

@media only screen and (max-width: 575px) {
  .hero-section {
    height: calc(100vh - 50px);
    padding: 20px;
    width: 100%;

    &__container{
      align-items: center;
      margin-bottom: 0px;
    }

    &__content-wrapper {
      width: 100%;
      padding: 20px;
      margin-top: 0;
    }

    &__label {
      margin-bottom: 8px;
      font-size: 12px;
    }

    &__title {
      margin-bottom: 24px;
      font-size: 24px;
    }

    &__description{
      font-size: 14px;
    }

    &__button {
      width: 100%;
      padding: 2rem 0;
      font-size: 12px;
    }
  }
}
</style>
