<script setup>
import Logo from '@/assets/icons/LogoIcon.svg';
import GenericLink from '@/components/generics/GenericLink.vue'
import { defineProps } from '@vue/runtime-core'

const props = defineProps({
    navName: String
});
</script>

<template>
    <div class="navCard">
        <div class="navCard__items">
            <generic-link href="#" container-class="navigation__logo-link" :text-first="false">
                <Logo />
            </generic-link>
            <p class="navCard__name-main">{{ props.navName }}</p>
            <div class="navCard__path">
                <generic-link href="#" container-class="navigation__logo-link" text-content="Home" :text-first="false"
                    class="navCard__link" />
                <span class="navCard__arrow">></span>
                <span>{{ props.navName }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.navCard {
    background-image: url(../../public/background_image_card.png);
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;

    &__items {
        display: flex;
        gap: 1rem;
        flex-direction: column;
        align-items: center;
    }

    &__name-main {
        font-size: 3rem;
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
        font-size: 2rem;

    }

}
</style>