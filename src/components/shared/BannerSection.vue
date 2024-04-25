<script setup>
import GenericLink from '@/components/generics/GenericLink.vue'
import Chevron from '@/assets/icons/Chevron.svg'

defineProps({
    title: String
});
</script>

<template>
    <section class="main__section section banner-section">
        <div class="banner-section__container container">
            <GenericLink href="/" containerClass="banner-section__logo-link">
                <img src="/logo_image.png" alt="logo" class="banner-section__logo">
            </GenericLink>

            <h1 class="banner-section__title text-3xl">{{ title }}</h1>

            <div class="banner-section__path-wrapper">
                <GenericLink href="/"
                    container-class="banner-section__path-link banner-section__path-link--primary text-sm"
                    text-content="Home" />
                <Chevron class="banner-section__chevron"
                    :style="{ transform: 'rotate(90degree)', width: '2.4rem', height: '2.4rem', strokeWidth: '3px', margin: '0 -0.5rem' }"
                    stroke="#000" />

                <span class="banner-section__path-link text-sm">{{ title }}</span>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.banner-section {
    background-image: url(/background_image_card.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    margin-bottom: 80px;

    &__container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 9rem 0 10rem 0;
    }

    &__logo {
        width: 5rem;
        aspect-ratio: 1/1;
    }

    &__title {
        font-weight: 500;
        color: var(--color-black);
    }

    &__name-main {
        margin: 0;
        line-height: 1;
        font-weight: 500;
    }

    &__path-wrapper {
        display: flex;
        align-items: center;
        gap: 1rem;

    }

    &__path-link {
        color: var(--color-black);
        font-weight: 300;

        &--primary {
            font-weight: 500;
            transition: color 0.3s ease-in-out;

            &:hover {
                color: var(--color-uc-gold);
            }

            &:active {
                color: var(--color-black);
            }
        }
    }
}
@media screen and (max-width: 991px){
    .banner-section{
        margin-bottom: 60px;
    }
}
@media screen and (max-width: 768px) {
    .banner-section {
        &__container {
            padding: 0;
            height: 24vh;
            justify-content: center;
            padding-bottom: 3rem;
        }
    }
}
</style>