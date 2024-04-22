<script setup>
import GenericLink from '../generics/GenericLink.vue';
import { defineProps } from 'vue';

const props = defineProps({
  shrink: Boolean
});
</script>

<template>
    <GenericLink href="/home" :class="['header__logo', { 'header__logo--shrink': shrink }]" textContent="Furniro">
        <img src="/logo_image.png" :class="['header__logo-image', { 'header__logo-image--shrink': shrink }]" alt="logo">
    </GenericLink>
</template>

<style lang="scss" scoped>
.header__logo {
    display: flex;
    align-items: center;
    font-size: 36px;
    column-gap: 5px;
    font-weight: 700;
    width: 188px;
    transition: font-size 0.25s linear;
    color: var(--color-black);

    &--shrink{
        font-size: 28px;
    }
}
.header__logo-image{
    height: 50px;
    width: 50px;
    transition: height 0.25s ease-in-out, width 0.25s ease-in-out;

    &--shrink{
        height: 40px;
        width: 40px;
    }
}

@media (max-width: 991px) {
    .header{
        &__logo-image{
            height: 5rem;
            width: 5rem;
        }

        &__logo{
            font-size: 3.6rem
        }
    }
}
</style>