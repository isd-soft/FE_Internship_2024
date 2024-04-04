<script setup>

</script>

<template>
  <section class="main__section section hero-section">
      <div class="hero-section__wrapper">
        <span class="text-sm hero-section__label">New Arrival</span>
        <h1 class="text-5xl hero-section__title">
          Discover Our 
          <br>
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
p {
  margin: 0;
}

.hero-section {
  background-image: url('/background_top_banner.png');
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: end;
  padding: 8vw 4vw;

  &__wrapper {
    background-color: var(--color-old-lace);
    padding: 40px;
    border-radius: 10px;
    width: 45vw;
    height: min-content;
    margin-top: auto;
  }
  &__label {
    font-weight: 500;
    letter-spacing: 3px;
  }

  &__title {
    color: var(--color-uc-gold);
    margin: 8px 0 13px;
  }

  &__button {
    background-color: var(--color-uc-gold);
    color: var(--color-white);
    font-weight: 700;
    border: none;
    padding: 25px 72px;
    margin-top: 50px;
  }
}

</style>
