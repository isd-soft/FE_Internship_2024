<script setup></script>

<template>
  <section class="main__section section hero-section">
    <div class="hero-section__wrapper">
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
      <button class="text-sm hero-section__button" @click="$router.push('shop')">BUY NOW</button>
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
  justify-content: end;
  align-items: end;
  padding: 120px 60px;

  &__wrapper {
    background-color: var(--color-old-lace);
    padding: 40px;
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
    background-color: var(--color-uc-gold);
    border: 1px solid var(--color-uc-gold);
    color: var(--color-white);
    font-weight: 700;
    padding: 2.5rem 7.2rem;

    &:hover {
      color: var(--color-uc-gold);
      background-color: var(--color-white);
      cursor: pointer;
    }
  }
}

@media only screen and (max-width: 768px) {
  .hero-section {
    padding: 40px;
    justify-content: center;
    align-items: center;

    &__wrapper {
      width: 100%;
    }

    &__title,
    &__description,
    &__button,
    &__label {
      display: block;
      text-align: center;
    }

    &__description {
      max-width: 300px;
      margin-left: auto;
      margin-right: auto;
    }

    &__button {
      margin: 0 auto;
    }
  }
}

@media only screen and (max-width: 375px) {
  .hero-section {
    height: calc(100vh - 50px);
    padding: 20px;
    width: 100%;

    &__wrapper {
      width: 100%;
      padding: 20px;
    }

    &__label {
      margin-bottom: 8px;
    }

    &__title {
      margin-bottom: 24px;
    }

    &__button {
      width: 100%;
    }
  }
}
</style>
