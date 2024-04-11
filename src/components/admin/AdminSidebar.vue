<script setup>
import SidebarLogo from './SidebarLogo.vue'
import SidebarNavigation from './SidebarNavigation.vue';
</script>

<template>
    <aside class = "aside">
        <SidebarLogo />
        <SidebarNavigation />
    </aside>
</template>

<style lang="scss" scoped>
.aside{
    position: fixed;
    width: 10rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: var(--color-white);
    transition: 0.25s ease-in-out;

    & :deep(.aside__logo-text){
        display: block;
        opacity: 0;
        transition: opacity 0.25s ease-in-out, visibility 0s linear;
        visibility: hidden;
    }

    &__logo{
        padding: 1rem 2.5rem 0 2.5rem;
    }
}

.aside:hover{
    width: 23.5rem;

    & :deep(.aside__logo-text){
        opacity: 1;
        visibility: visible;
        transition-delay: 0.25s;
    }    
}
</style>