<script setup>

</script>

<template>
  <section class="main__section section hero-section">
      <div class="hero-section__wrapper">
        <span class="text-sm hero-section__label">New Arrival</span>
        <h1 class="text-5xl hero-section__title">Discover Our 
          <br>
          New Collection</h1>
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
  height: 88.2vh;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 4% 8% 4%;

  &__wrapper {
    background-color: var(--color-old-lace);
    padding: 4.36% 3% 0% 2.72%;;
    border-radius: 10px;
    width: 44.7vw;
    aspect-ratio: 643 / 443;
    margin-top: auto;
  }
  &__label {
    font-weight: 500;
    letter-spacing: 3px;
  }

  &__title {
    color: var(--color-uc-gold);
    margin: 1.8% 0 3%;
  }

  &__description{
    font-size: 1.8rem ;
  }

  &__button {
    background-color: var(--color-uc-gold);
    color: var(--color-white);
    font-weight: 700;
    border: none;
    padding: 4.4% 13.4%;
    margin-top: 8.1%;

    &:hover{
      color: var(--color-uc-gold);
      background-color: var(--color-white) ;
      cursor: pointer;
      border: solid 1px var(--color-uc-gold);
    }

  }
}

@media screen and (max-width: 768px) {
  .hero-section {
    &__wrapper {
      width: 60vw;
      margin-top: 0;
      align-items: center;

    }

    &__label {
    font-size: 2.3rem;
  }

  &__title {
    font-size: 7rem;
  }

  &__description{
    font-size: 2.4rem ;
  }

  &__button{
    font-size: 2.3rem;
  }
  }


}


@media screen and (max-width: 375px) {
  .hero-section {
    align-items: center;
  &__wrapper {
      width: 92vw;

    }

    &__label {
    font-size: 3.45rem;
  }

  &__title {
    font-size: 10.5rem;
  }

  &__description{
    font-size: 3.6rem ;
  }

  &__button{
    font-size: 3.45rem;
  }

}
}

</style>

