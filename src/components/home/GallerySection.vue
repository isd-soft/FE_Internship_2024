<script setup>
import { mozaicImagesUrls } from '../../utils/mozaicImagesUrls'
import { getUrlFromString } from '../../utils/getUrlFromString'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCards } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

const urls = mozaicImagesUrls
</script>

<template>
    <section v-if="width > 576" class="main__section section gallery-section">
        <div class="gallery-section__container full-container">
            <div class="gallery-section__text-wrapper">
                <span class="text-md gallery-section__overline">Share your setup with</span>
                <h2 class="text-3xl gallery-section__title">#FurniroFurniture</h2>
            </div>
            <div class="gallery-section__image-wrapper" v-for="(url, index) in urls" :key="index"
                :style="{ backgroundImage: `url(${getUrlFromString(url.url)})` }"></div>
        </div>
    </section>
    <section v-else class="main_section section gallery-section-mobile">
        <div class="gallery-section-mobile__text-wrapper">
            <span class="text-md gallery-section-mobile__overline">Share your setup with</span>
            <h2 class="text-3xl gallery-section-mobile__title">#FurniroFurniture</h2>
        </div>
        <swiper class="gallery-section-mobile__container container" :effect="'cards'" :modules="[EffectCards]"
            :grab-cursor="true" :pagination="{ clickable: true }">
            <swiper-slide v-for="(url, index) in urls" :key="index"
                :style="{ backgroundImage: `url(${getUrlFromString(url.url)})` }"
                class="gallery-section-mobile__image-wrapper">
            </swiper-slide>
        </swiper>
    </section>
</template>

<style lang="scss" scoped>
.gallery-section {
    height: calc(100vh - 100px);
    width: 100%;
    overflow-x: hidden;
    display: flex;
    justify-content: center;

    &__container {
        flex: 0 0 auto;
        /* width: 1800px; */
        width: clamp(130vh, 120%, 120%);
        height: 100%;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(12, 1fr);
        gap: 1.6rem;
    }

    &__text-wrapper {
        grid-column: 4 / span 6;
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

@media only screen and (max-width: 768px) {
    .gallery-section {
        height: 60vh;

        &__container {
            width: 120vh
        }
    }
}

.gallery-section-mobile {
    width: 100%;
    height: calc((100vh - 50px) * 0.75);
    padding: 20px;
    gap: 20px;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    &__container {
        width: 100%;
        height: 100%;
    }

    &__image-wrapper {
        background-size: cover;
        background-position: center;
        border-radius: 10px;
    }

    &__text-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        gap: 8px;
        height: max-content;
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
