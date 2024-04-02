<script setup></script>

<template>
  <section class="top-banner">
    <div class="top-banner__card">
      <div class="top-banner__card__flexbox">
        <p class="top-banner__card__flexbox__text--new">New Arrival</p>
        <p class="top-banner__card__flexbox__text--discover">Discover Our New Collection</p>
        <p class="top-banner__card__flexbox__text--description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis.
        </p>
        <button class="top-banner__card__flexbox__link__button" @click="$router.push('shop')">
          BUY NOW
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
p {
  margin: 0;
}
.top-banner {
  background-image: url('public/background_top_banner.png');
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  height: clamp(70vh, 98vh, 80vw);
  // height: 716.83px;
  display: flex;
  align-items: center;
  justify-content: end;

  &__card {
    box-sizing: border-box;
    background-color: #fff3e3;
    // padding: 8.5vh 8.9vh 5vh 5vh ;
    width: clamp(30vw, 90vh, 100vw);
    // width:  clamp(30vw, 40%, 100vw);
    height: clamp(50vh, 62%, 120vw);
    border-radius: 10px;
    margin: 0 clamp(10%, 4%, 80%) 0 clamp(30%, 4%, 80%); //For mobile in media screen make clamp(10%, 4%, 80%) both of them

    &__flexbox {
      height: 100%;
      width: calc(100% - 5.4vh);
      margin-left: 5.4vh; //Change to like 7-10% in media screen for mobile
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      &_text--new {
        font-size: calc(0.5vw + 0.5rem);
        font-weight: 500;
        margin-top: 9.6%;
        margin-bottom: 1%;
      }

      &__text--discover {
        font-weight: 700;
        max-width: clamp(20vw, 70vh, 60vw);
        font-size: calc(1.14vw + 1.75rem);
        margin-bottom: 0px;
        margin-top: 0;
        color: #b88e2f;
      }

      &__text--description {
        font-size: 1.125rem;
        margin-top: 2.5%;
        font-weight: 300;
        max-width: clamp(20vw, 85%, 80vw);
      }

      button {
        color: white;
        margin-top: 10.8%;
        border: none;
        font-weight: 800;
        font-size: calc(0.5vw + 0.5rem);
        background-color: #b88e2f;
        padding: 3.56vmin 10.68vmin;
      }
    }
  }
}
</style>
