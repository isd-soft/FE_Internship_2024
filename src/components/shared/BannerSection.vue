<script setup>
import Logo from '@/assets/icons/LogoIcon.svg';
import GenericLink from '@/components/generics/GenericLink.vue'

const props = defineProps({
    navName: String
});
</script>

<template>
    <div class="banner">
        <div class="banner__items">
            <generic-link href="/" container-class="navigation__logo-link" :text-first="false">
                <Logo />
            </generic-link>
            <p class="banner__name-main text-3xl">{{ props.navName }}</p>
            <div class="banner__path">
                <generic-link href="/" container-class="navigation__logo-link" text-content="Home" :text-first="false" class="banner__link text-md" />
                <span class="banner__arrow text-md">></span>
                <span class="banner__name text-md">{{ props.navName }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.banner {
    background-image: url(../../public/background_image_card.png);
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;

    &__items {
        display: flex;
        gap: 1.5rem;
        padding:0  2rem;
        flex-direction: column;
        align-items: center;
    }

    &__name-main {
        margin: 0;
        line-height: 1;
        font-weight: 500;
    }

    &__path {
        display: flex;
        align-items: center;
        gap: 1rem;

    }

    &__link {
        font-weight: 500;
    }

    &__arrow {
        font-weight: 400;
    }

}
@media screen and (max-width: 768px) {
    .banner{
        height: 24vh;
        align-items: flex-end;
        padding-bottom: 3rem;
    }
}
</style>