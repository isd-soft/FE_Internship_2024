<script setup>
import { useWindowSize } from '@vueuse/core'
import { swiperImagesUrls } from '@/utils/swiperImagesUrls.js'
import { getUrlFromString } from '@/utils/getUrlFromString';
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, Keyboard } from 'swiper/modules';
import LeftChevron from '@/assets/icons/left-chevron.svg'
import RightChevron from '@/assets/icons/right-chevron.svg'
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
            <button class="text-sm examples-section__button">Explore more</button>
        </div>
        <div class="examples-section__container">
            <button class="examples-section__button-prev">
                <LeftChevron stroke="#B88E2F"/>
            </button>
            <swiper
            class="examples-section__swiper"
            :slides-per-view="width > 768 ? 2 : 1"
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
            <button class="examples-section__button-next">
                <RightChevron stroke="#B88E2F"/>
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
        // border: 1px solid deepskyblue;
    }

    &__title {
        font-weight: 700;
        color: var(--color-dark-charcoal);
        margin-bottom: 8px;
    }

    &__description {
        color: var(--color-granite-gray);
    }

    &__button {
        width: fit-content;
        border: none;
        background-color: var(--color-uc-gold);
        color: var(--color-white);
        font-weight: 500;
        line-height: 150%;
        padding: 13px;
        margin: 25px 0 68px;
    }

    &__container {
        width: 55vw;
        height: 100%;
        display: flex;
        align-items: center;
        // border: 1px solid deeppink;
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
        height: 85%;
    }

    &__button-prev {
        width: 51.5px;
        height: 48px;
        background-color: var(--color-white);
        border: none;
        border-radius: 50%;
        padding: 0;
        margin-right: -24px;
        z-index: 200;

        &:hover {
            cursor: pointer;
        }
    }

    &__button-next {
        width: 51.5px;
        height: 48px;
        background-color: var(--color-white);
        border: none;
        border-radius: 50%;
        padding: 0;
        margin-left: -24px;
        z-index: 200;

        &:hover {
            cursor: pointer;
        }
    }
}

.swiper-button-disabled {
    visibility: hidden;
}

@media only screen and (max-width: 768px) {
    .examples-section {
        gap: 2vw;

        &__button-next {
            display: none;
        }

        &__button-prev {
            display: none;
        }
    
        &__image-wrapper {
            height: 95%;
        }
    }
}

@media only screen and (max-width: 425px) {
    .examples-section {
        flex-direction: column-reverse;
        padding: 20px;
        gap: 20px;
        height: 100vh;

        &__container {
            width: 100%;
            height: 100%;
        }

        &__text {
           align-items: center;
           text-align: center;
        }

        &__button {
            width: 100%;
            margin: 20px 0 0;
        }
    }
}
</style>

<style lang="scss">
.examples-section__swiper {
    .swiper-pagination {
        position: relative;
        width: fit-content;
        display: flex;
        align-items: center;
        gap: 2rem;

        .swiper-pagination-bullet {
            // width: 11px;
            // height: 11px;
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
            // width: 26px;
            // height: 26px;
            width: 2.6rem;
            height: 2.6rem;
            background-color: transparent;
            border: 1px solid var(--color-uc-gold);
            
            &::after {
                content: '';
                // width: 11px;
                // height: 11px;
                width: 1.1rem;
                height: 1.1rem;
                background-color: var(--color-uc-gold);
                border-radius: 50%;
            }
        }
    }
}

@media only screen and (max-width: 768px) {
    .examples-section__swiper {
        .swiper-pagination {
            width: 100%;
        }
    }
}

@media only screen and (max-width: 425px) {
    .examples-section__swiper {
        .swiper-pagination {
            justify-content: center;
        }
    }
}
</style>