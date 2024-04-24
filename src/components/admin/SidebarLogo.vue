<script setup>
    import GenericLink from '../generics/GenericLink.vue';
</script>

<template>
    <GenericLink href="/admin/products" containerClass="aside__logo text-lg">
        <img src="/logo_image.png" class="aside__logo-image" alt="logo">
        <span class="aside__logo-text">Furniro</span>
    </GenericLink>
</template>

<style lang="scss" scoped>
.aside__logo{
    display: flex;
    column-gap: 1.5rem;
    align-items: center;
    text-decoration: none;
}

.aside__logo-image{
    width: 3.2rem;
    height: 3.2rem;
}

.aside__logo-text{
    color: var(--color-black);
    font-weight: 600;
}
</style>