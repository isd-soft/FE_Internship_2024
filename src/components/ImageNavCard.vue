<script setup>
    import Logo from '@/assets/icons/Furniro_logo.svg'
    import GenericLink from '@/components/generics/GenericLink.vue'
    import { defineProps } from '@vue/runtime-core'

const props = defineProps({
    navName:String
});
</script>

<template>
    <div class="navCard">
        <div class="navigation__logo">
            <generic-link href="#" container-class="navigation__logo-link"  :text-first="false">
            <Logo />
            </generic-link>
            <p>{{ props.navName }}</p>
            <div>
                <generic-link href="#" container-class="navigation__logo-link" text-content="Home" :text-first="false"/>
                <span>></span>
                <span>{{ props.navName }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .navCard{
        background-image: url(../../public/background_image_card.png);
        width: 100vw;
        height: 40vh;
    }
</style>