<script setup>
import GenericLink from './generics/GenericLink.vue';
import LogoIcon from '../assets/icons/LogoIcon.svg';
</script>

<template>
    <GenericLink href="/" containerClass="header__logo text-2xl" textContent="Furniro">
        <LogoIcon />
    </GenericLink>
</template>

<style lang="scss" scoped>
.header__logo {
    display: flex;
    align-items: center;
    column-gap: 5px;
    font-weight: 700;
    color: var(--color-black);
}
</style>