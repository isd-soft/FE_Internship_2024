<script setup></script>

<template>
  <section class="main__section section hero-section">
    <div class="hero-section__container">
      <div class="hero-section__wrapper">
        <p class="hero-section__label">New Arrival</p>
        <h1 class="hero-section__title">Discover Our New Collection</h1>
        <p class="hero-section__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis.
        </p>
        <button class="hero-section__button" @click="$router.push('shop')">BUY NOW</button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
p {
  margin: 0;
}
.hero-section {
  background-image: url('public/background_top_banner.png');
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  // height: clamp(70vh, 98vh, 80vw);
  height: clamp(20vh, 88.2vh, 80vw);
  // height: 716.83px;
  display: flex;
  align-items: center;
  justify-content: end;

  &__container {
    box-sizing: border-box;
    background-color:var(--color-alabaster);
    // padding: 8.5vh 8.9vh 5vh 5vh ;
    width: clamp(30vw, 44.7%, 100vw);
    // width:  clamp(30vw, 40%, 100vw);
    height: clamp(10vmin, 61.9%, 80vh);
    border-radius: 10px;
    margin: 0 clamp(4vmin, 4%, 80%) 0 clamp(4vmin, 4%, 80%); //For mobile in media screen make clamp(10%, 4%, 80%) both of them
  }
  &__wrapper {
    height: 75%;
    width: calc(100% - 5.4vh);
    margin-left: 6%; //Change to like 7-10% in media screen for mobile
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: 9.7%;
  }
  &__label {
    font-size: calc(0.8vw + 0.3rem);
    font-weight: 500;
  }

  &__title {
    font-weight: 700;
    max-width: clamp(10vw, 70%, 60vw);
    font-size: calc(3.05vw + 0.5rem);
    margin-bottom: 0px;
    margin-top: 0.65%;
    color: var(--color-bronze);
  }

  &__description {
    font-size: calc(0.8vw + 0.4rem);
    margin-top: 2.9%;
    font-weight: 300;
    max-width: clamp(40vw, 86%, 60vw);
  }

  &__button {
    color: var(--color-white);
    margin-top: 7.7%;
    border: none;
    font-weight: 800;
    font-size: calc(0.8vw + 0.3rem);
    background-color: var(--color-bronze);
    padding: 3.1vmin 9.25vmin;
  }
}
</style>
