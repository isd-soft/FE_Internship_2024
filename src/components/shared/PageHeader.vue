<script setup>
import {onMounted, onUnmounted, ref, computed} from 'vue';
import HeaderLogo from './HeaderLogo.vue'
import HeaderNavigation from './HeaderNavigation.vue';
import GenericLink from '../generics/GenericLink.vue';
import CartIcon from '../../assets/icons/CartIcon.svg';
import UserIcon from '../../assets/icons/UserIcon.svg';

const mediaFlag = ref(window.innerWidth);
const isMenuVisible = computed(() => mediaFlag.value >= 768);

const updateMediaFlag = () => {
  mediaFlag.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', updateMediaFlag);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateMediaFlag);
});
</script>

<template>
    <header class="header">
        <div class="header__container container">
            <HeaderLogo />

            <HeaderNavigation v-show="isMenuVisible"/>

            <div class="header__link-wrapper" v-show="isMenuVisible">
                <GenericLink href="#" containerClass="header__link">
                    <CartIcon />
                </GenericLink>

                <GenericLink href="#" containerClass="header__link">
                    <UserIcon />
                </GenericLink>
            </div>
            <span class="header__container-toggle"></span>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header{
    &__container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 1380px;
        padding: 30px 0;
        margin: 0 auto;
    }
    &__link-wrapper{
        display: flex;
        align-items: center;
        column-gap: 24px;
    }
    &__container-toggle{
        display:none;
    }
    @media (max-width:768px) {
        &__container-toggle{
            display: flex;
            justify-content: flex-end;
        }
    }
}
</style>