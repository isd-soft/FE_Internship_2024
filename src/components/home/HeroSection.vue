<script setup>

</script>

<template>
  <section class="main__section section hero-section">
    <div class="hero-section__vertical-spacing"></div>
      <div class="hero-section__wrapper">
        <span class="hero-section__label">New Arrival</span>
        <h1 class="hero-section__title">Discover Our New Collection</h1>
        <p class="hero-section__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis.
        </p>
        <button class="hero-section__button" @click="$router.push('shop')">BUY NOW</button>
      </div>
      <div class="hero-section__vertical-spacing"></div>
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
  // height: clamp(70vh, 98vh, 80vw);
  height: clamp(20vh, 88.2vh, 80vw);
  // height: 716.83px;
  display: flex;
  align-items: center;
  justify-content: end;

  &__vertical-spacing{
    width: clamp(4vmin, 4.05%, 80%); 
    height: auto;
  }

  &__wrapper {
    background-color: var(--color-old-lace);
    min-height: clamp(10vmin, 50%, 80vh);
    width: clamp(30vw, 39%, 70vw);
    // padding: 5.3% 3% clamp( 2vw, 1.6%, 10vh) 2.72%;
    padding:4.36% 3% 0% 2.72%;
    // margin-left: 6%; //Change to like 7-10% in media screen for mobile
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    justify-content: center;
    align-items: flex-start;
  }
  &__label {
    font-size: calc(0.9vw + 0.3rem);
    font-weight: 500;
    letter-spacing: 3px;
  }

  &__title {
    font-weight: 700;
    max-width: clamp(10vw, 80%, 70vw);
    font-size: calc(3.28vw + 0.5rem);
    margin-bottom: 0px;
    margin-top: 0.7%;
    color: var(--color-uc-gold);
  }

  &__description {
    font-size: calc(1vw + 0.4rem);
    margin-top: 2.9%;
    font-weight: 300;
    max-width: clamp(20vw, 100%, 70vw);
  }

  &__button {
    color: var(--color-white);
    // margin-top: clamp(2vmin, 8.2%, 4vmin);
    margin-top: 8.2%;
    margin-bottom: 6.6%;
    border: none;
    font-weight: 800;
    font-size: calc(0.9vw + 0.3rem);
    background-color: var(--color-uc-gold);
    padding: 3.1vmin 9.25vmin;

    &:hover{
      color:var(--color-uc-gold);
      background-color:  var(--color-white);
      cursor: pointer;
      transition: all 0.3s ease;

    }
  }
}

</style>
