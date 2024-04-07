<script setup>
import GenericLink from '../generics/GenericLink.vue';
</script>

<template>
    <GenericLink href="/" containerClass="header__logo text-2xl" textContent="Furniro">
        <img src="/logo_image.png" class="header__logo--image" alt="logo">
    </GenericLink>
</template>

<style lang="scss" scoped>
.header__logo {
    display: flex;
    align-items: center;
    column-gap: 5px;
    font-weight: 700;
    color: var(--color-black);
    &--image{
        height: clamp(21.4px,2.2vw,33px);
    }
}
</style>