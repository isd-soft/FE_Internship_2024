<script setup>
import { useWindowSize } from '@vueuse/core'
import { swiperImagesUrls } from '@/utils/swiperImagesUrls.js'
import { getUrlFromString } from '@/utils/getUrlFromString'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, Keyboard } from 'swiper/modules'
import Chevron from '@/assets/icons/Chevron.svg'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const { width } = useWindowSize()

const urls = swiperImagesUrls
</script>

<template>
  <section class="section__main section examples-section">
    <div class="examples-section__container container">
      <div class="examples-section__text-wrapper">
        <h2 class="text-3xl examples-section__title">50+ Beautiful rooms inspiration</h2>

        <span class="text-sm examples-section__description">
          Our designer already made a lot of beautiful prototipe of rooms that inspire you
        </span>

        <button class="primary-button examples-section__button" @click="$router.push('shop')">
          Explore more
        </button>
      </div>

      <div class="examples-section__slider-wrapper">
        <button class="swiper-button-left examples-section__button-prev">
          <Chevron
            stroke="#B88E2F"
            :style="{
              transform: 'rotate(180deg)',
              width: '24px',
              height: '24px',
              strokeWidth: '2px'
            }"
          />
        </button>

        <swiper
          class="examples-section__swiper"
          :slides-per-view="width > 576 ? 2 : 1"
          :space-between='24'
          :pagination="{
            clickable: true
          }"
          :navigation="{
            nextEl: '.examples-section__button-next',
            prevEl: '.examples-section__button-prev'
          }"
          :keyboard="{ enabled: true }"
          :modules="[Pagination, Navigation, Keyboard]"
        >
          <swiper-slide
            v-for="(url, index) in urls"
            :key="index"
            :style="{ backgroundImage: `url(${getUrlFromString(url.url)})` }"
            :class="['examples-section__image-wrapper']"
          >
          </swiper-slide>
        </swiper>

        <button class="swiper-button-right examples-section__button-next">
          <Chevron
            stroke="#B88E2F"
            :style="{ width: '24px', height: '24px', strokeWidth: '2px' }"
          />
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.examples-section {
  width: 100%;
  background-color: var(--color-linen);

  &__container {
    display: flex;
    align-items: center;
    gap: 10rem;
    padding: 90px 0;
  }

  &__text-wrapper {
    height: max-content;
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-weight: 700;
    color: var(--color-dark-charcoal);
    margin-bottom: 1.6rem;
  }

  &__description {
    color: var(--color-granite-gray);
    margin-bottom: 5rem;
  }

  &__slider-wrapper {
    // width: 100%;
    // min-width: 55vw;
    width: 50%;
    display: flex;
    align-items: center;
  }

  &__swiper {
    display: flex;
    flex-direction: column;
  }

  &__image-wrapper {
    background-size: cover;
    background-position: center;
    width: 37rem;
    max-width: 370px;
    aspect-ratio: 77/100;
  }

  &__button-prev,
  &__button-next {
    margin-bottom: 12%;
  }
}

.swiper-button-disabled {
  visibility: hidden;
}

@media only screen and (max-width: 991px) {
    .examples-section {
        
        &__container {
            flex-direction: column-reverse;
            padding: 60px 0;
            gap: 20px;
            
    }

    &__button {
      margin: 0;
    }

    &__text-wrapper {
      align-items: center;
      text-align: center;
    }

    &__slider-wrapper{
      width: 100%;
    }

    &__button-prev,
    &__button-next {
      display: none;
    }
  }
}

@media only screen and (max-width: 575px) {
  .examples-section {

    &__container{
    padding: 30px 0;
    }

    &__button {
      width: 80%;
      padding: 2rem 0;
    }

    &__image-wrapper{
      max-width: 100%;
      aspect-ratio: 100/77;
    }
  }
}
</style>

<style lang="scss">
.examples-section__swiper {
  .swiper-pagination {
    position: relative;
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 4rem;

    .swiper-pagination-bullet {
      width: 1.1rem;
      height: 1.1rem;
      background-color: var(--color-light-silver);
      opacity: 1;
      margin: 0;
    }

    .swiper-pagination-bullet-active {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2.6rem;
      height: 2.6rem;
      background-color: transparent;
      border: 1px solid var(--color-uc-gold);

      &::after {
        content: '';
        width: 1.1rem;
        height: 1.1rem;
        background-color: var(--color-uc-gold);
        border-radius: 50%;
      }
    }
  }
}

@media only screen and (max-width: 991px) {
  .examples-section__swiper {
    .swiper-pagination {
      width: 100%;
      justify-content: center;

    }
  }
}

@media only screen and (max-width: 575px) {
  .examples-section__swiper {
    .swiper-pagination {
      margin-top: 2rem;
    }}
  
}
</style>
