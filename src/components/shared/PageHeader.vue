<script setup>
import {onMounted, onUnmounted} from 'vue';
import {mediaFlag, isMenuVisible, updateMediaFlag, isCollapsedMenuOpen, toggleCollapsedMenu} from '../../utils/pageHeaderHelperFuncs.js'
import HeaderLogo from './HeaderLogo.vue'
import HeaderNavigation from './HeaderNavigation.vue';
import GenericLink from '../generics/GenericLink.vue';
import CartIcon from '../../assets/icons/CartIcon.svg';
import UserIcon from '../../assets/icons/UserIcon.svg';
import HamburgerMenuIcon from '../../assets/icons/HamburgerMenuIcon.svg'

onMounted(() => {
  window.addEventListener('resize', updateMediaFlag);
})

onUnmounted(() => {
  window.removeEventListener('resize', updateMediaFlag);
})
</script>

<template>
    <header class="header">
        <div class="header__container container">
            <HeaderLogo />

            <HeaderNavigation v-show="isMenuVisible"/>

            <div class="header__link-wrapper" v-show="isMenuVisible">
                <GenericLink href="/cart" containerClass="header__link">
                    <CartIcon />
                </GenericLink>

                <GenericLink href="#" containerClass="header__link">
                    <UserIcon />
                </GenericLink>
            </div>
            <span class="header__container-toggle">
                <HamburgerMenuIcon />
            </span>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header{
    &__container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width:calc(100% - 120px);
        max-width: 1380px;
        padding: 30px 0;
        margin: 0 auto;
    }
    &__link-wrapper{
        display: flex;
        align-items: center;
        column-gap: 24px;
    }
    &__link{
        svg{
            width: auto;
            height: 1.73vw;
        }
    }
    &__container-toggle{
        display:none;
        svg{
            height: 3.5vw;
        }
    }
    @media (max-width:768px) {
        &__container-toggle{
            display: flex;
            justify-content: flex-end;
            align-items: center;
            .hamburger{
                height: 6vw;
                width: auto;
            }
        }
    }
}
</style>