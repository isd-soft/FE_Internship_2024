<script setup>
import { mozaicImagesUrls } from '../../utils/mozaicImagesUrls'
import { getUrlFromString } from '../../utils/getUrlFromString'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { EffectCards } from 'swiper/modules'
import 'swiper/css/effect-cards'

const urls = mozaicImagesUrls
</script>

<template>
    <!-- <section class="main__section section gallery-section">
        <div class="gallery-section__container container">
            <div class="gallery-section__text-wrapper">
                <span class="text-md gallery-section__overline">Share your setup with</span>
                <h2 class="text-3xl gallery-section__title">#FuniroFurniture</h2>
            </div>
            <div class="gallery-section__image-wrapper" v-for="(url, index) in urls" :key="index" :style="{backgroundImage: `url(${getUrlFromString(url.url)})`}"></div>
        </div>
    </section> -->
    <section class="main_section section gallery-section-mobile">
        <div class="gallery-section-mobile__text-wrapper">
                <span class="text-xl gallery-section-mobile__overline">Share your setup with</span>
                <h2 class="text-5xl gallery-section-mobile__title">#FuniroFurniture</h2>
        </div>
        <swiper 
        class="gallery-section-mobile__container container"
        :effect="'cards'"
        :modules="[EffectCards]"
        :grab-cursor="true"
        >
            <swiper-slide v-for="(url, index) in urls" :key="index" :style="{backgroundImage: `url(${getUrlFromString(url.url)})`}" class="gallery-section-mobile__image-wrapper">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </section>
</template>

<style lang="scss" scoped>
.gallery-section {
    height: calc(100vh - 120px);
    width: 100%;
    overflow-x: hidden;
    display: flex;
    justify-content: center;

    &__container {
        flex: 0 0 auto;
        /* width: 1800px; */
        width: 120%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(12, 1fr);
        gap: 16px;
    }

    &__text-wrapper {
        grid-column: 5 / span 4;
        grid-row: 1 / span 2;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    &__overline {
        font-weight: 500;
        color: var(--color-granite-gray);
    }

    &__title {
        color: var(--color-dark-charcoal);
    }

    &__image-wrapper {
        background-size: cover;
        background-position: center;

        &:nth-of-type(2) {
            grid-column: 1 / span 2;
            grid-row: 2 / span 6;
        }

        &:nth-of-type(3) {
            grid-column: 3 / span 3;
            grid-row: 3 / span 5;
        }

        &:nth-of-type(4) {
            grid-column: 1 / span 3;
            grid-row: 8 / span 5;
        }

        &:nth-of-type(5) {
            grid-column: 4 / span 2;
            grid-row: 8 / span 4;
        }

        &:nth-of-type(6) {
            grid-column: 6 / span 2;
            grid-row: 4 / span 6;
        }

        &:nth-of-type(7) {
            grid-column: 8 / span 2;
            grid-row: 3 / span 6;
        }

        &:nth-of-type(8) {
            grid-column: 10 / span 3;
            grid-row: 2 / span 7;
        }

        &:nth-of-type(9) {
            grid-column: 8 / span 1;
            grid-row: 9 / span 4;
        }

        &:nth-of-type(10) {
            grid-column: 9 / span 2;
            grid-row: 9 / span 3;
        }
    }
}

.gallery-section-mobile {
    width: 90vw;
    height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    margin: 0;

    &__container {
        border: 1px solid deeppink;
        padding: 20px;
        width: 200px;
        height: 400px;
    }

    &__image-wrapper {
        background-size: cover;
        background-position: center;
        border-radius: 20px;
    }

    &__text-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        gap: 8px;
        height: 60px;
    }

    &__overline {
        font-weight: 500;
        color: var(--color-granite-gray);
    }

    &__title {
        color: var(--color-dark-charcoal);
    }
}
</style>
