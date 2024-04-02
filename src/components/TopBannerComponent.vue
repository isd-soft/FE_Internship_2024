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
  height: clamp(70vh, 98vh, 80vw);
  // height: 716.83px;
  display: flex;
  align-items: center;
  justify-content: end;

  &__container {
    box-sizing: border-box;
    background-color: #fff3e3;
    // padding: 8.5vh 8.9vh 5vh 5vh ;
    width: clamp(30vw, 90vh, 100vw);
    // width:  clamp(30vw, 40%, 100vw);
    height: clamp(50vh, 62%, 120vw);
    border-radius: 10px;
    margin: 0 clamp(10%, 4%, 80%) 0 clamp(30%, 4%, 80%); //For mobile in media screen make clamp(10%, 4%, 80%) both of them
  }
    &__wrapper {
      height: 70%;
      width: calc(100% - 5.4vh);
      margin-left: 5.4vh; //Change to like 7-10% in media screen for mobile
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin-top: 14%;
    }
      &__label {
        font-size: calc(0.5vw + 0.5rem);
        font-weight: 500;
      }

      &__title {
        font-weight: 700;
        max-width: clamp(20vw, 70vh, 60vw);
        font-size: calc(1.13vw + 1.75rem);
        margin-bottom: 0px;
        margin-top: 0.65%;
        color: #b88e2f;
      }

      &__description {
        font-size: 1.125rem;
        margin-top: 2.5%;
        font-weight: 300;
        max-width: clamp(20vw, 87%, 80vw);
      }

      &__button {
        color: white;
        margin-top: 10.8%;
        border: none;
        font-weight: 800;
        font-size: calc(0.5vw + 0.5rem);
        background-color: #b88e2f;
        padding: 3.56vmin 10.68vmin;
      }
    }

</style>
