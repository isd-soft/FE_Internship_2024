<script setup>
import { useWindowSize } from '@vueuse/core'
import { swiperImagesUrls } from '@/utils/swiperImagesUrls.js'
import { getUrlFromString } from '@/utils/getUrlFromString';
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, Keyboard } from 'swiper/modules';
import Chevron from '@/assets/icons/Chevron.svg'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const { width } = useWindowSize()

const urls = swiperImagesUrls
</script>

<template>
    <section class="section__main section examples-section">
        <div class="examples-section__text">
            <h2 class="text-2xl examples-section__title">50+ Beautiful rooms inspiration</h2>
            <span class="text-sm examples-section__description">Our designer already made a lot of beautiful prototipe of rooms that inspire you</span>
            <button class="primary-button examples-section__button" @click="$router.push('shop')">Explore more</button>
        </div>
        <div class="examples-section__container">
            <button class="swiper-button-left examples-section__button-prev">
                <Chevron stroke="#B88E2F" :style="{transform: 'rotate(180deg)', width: '24px', height: '24px', strokeWidth: '2px'}"/>
            </button>
            <swiper
            class="examples-section__swiper"
            :slides-per-view="width > 575 ? 2 : 1"
            :space-between="24"
            :pagination="{ 
                clickable: true,
            }"
            :navigation="{ nextEl: '.examples-section__button-next', prevEl: '.examples-section__button-prev' }"
            :keyboard="{ enabled: true }"
            :modules="[Pagination, Navigation, Keyboard]"
            >
                <swiper-slide v-for="(url, index) in urls" :key="index" :style="{backgroundImage: `url(${getUrlFromString(url.url)})`}" :class="['examples-section__image-wrapper']">
                </swiper-slide>
            </swiper>
            <button class="swiper-button-right examples-section__button-next">
                <Chevron stroke="#B88E2F" :style="{ width: '24px', height: '24px', strokeWidth: '2px'}"/>
            </button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.examples-section {
    width: 100%;
    height: calc(100vh - 100px);
    display: flex;
    align-items: center;
    background-color: var(--color-linen);
    padding: 9vw 1vw 8vw 7vw;
    gap: 10rem;

    &__text {
        height: max-content;
        display: flex;
        flex-direction: column;
    }

    &__title {
        font-weight: 700;
        color: var(--color-dark-charcoal);
        margin-bottom: 0.8rem;
    }

    &__description {
        color: var(--color-granite-gray);
        margin-bottom: 2.5rem;
    }

    &__button {
        margin-bottom: 6.8rem;
    }

    &__container {
        width: 55vw;
        height: 100%;
        display: flex;
        align-items: center;
    }

    &__swiper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    &__image-wrapper {
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 95%;
    }

    &__button-prev, &__button-next {
        margin-bottom: 5%;
    }
}

.swiper-button-disabled {
    visibility: hidden;
}

@media only screen and (max-width: 768px) {
    .examples-section {
        flex-direction: column-reverse;
        height: calc(100vh - 50px);
        padding: 60px 40px;
        gap: 20px;

        &__container {
            width: 100%;
            height: 100%;
        }

        &__button {
            margin: 0;
        }

        &__text {
            align-items: center;
            text-align: center;
        }

        &__button-prev, &__button-next {
            display: none;
        }
    }
}

@media only screen and (max-width: 375px) {
    .examples-section {
        padding: 40px 20px;

        &__button {
            width: 100%;
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

@media only screen and (max-width: 768px){
    .examples-section__swiper {
        .swiper-pagination {
            width: 100%;
            justify-content: center;
        }
    }
}
</style>