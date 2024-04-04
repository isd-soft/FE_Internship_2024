<script setup>
import {onMounted, onUnmounted, ref, computed} from 'vue';
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
            <!-- <span class="header__container-toggle mod model-5">
                <div class="menu">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </div>
            </span> -->
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
            align-items: center;
            .hamburger{
                height: calc(0.5*100px);
                width: auto;
                // transform: scaleY(calc(0.52 * 100px));
                // transform-origin: center;
            }
        }
    }
}
// .header__container-toggle.mod.model-5 {
//   background-color: #F2276C;
// }
// .menu {
//   cursor: pointer;
//   position: relative;
//   color: black;
//   transition: transform 0.3s ease 0.5s;
// }
// .bar {
//   position: absolute;
//   transition: top 0.3s ease 0.3s, transform 0.3s ease-out 0.1s;
//   &:nth-of-type(1) { top: 15px; }
//   &:nth-of-type(2) { top: 30px; transition: 0.3s ease 0.3s; }
//   &:nth-of-type(3) { top: 45px; }
// }
// .menu:hover {
//   transform: rotate(45deg);
//   .bar {
//     display: block;
//     width: 30px; /* Example width */
//     height: 4px; /* Example height */
//     background-color: #fff; /* Example color, ensuring visibility */
//     margin: 6px auto;
//     &:nth-of-type(1) { 
//       top: 30px; 
//       transform: rotate(0deg);
//       transition: top 0.3s ease 0.1s, transform 0.3s ease-out 0.5s;
//     }
//     &:nth-of-type(2) { opacity: 0; }
//     &:nth-of-type(3) { 
//       top: 30px; 
//       transform: rotate(90deg);
//       transition: top 0.3s ease 0.1s, transform 0.3s ease-out 0.7s;
//     }
//   }
// }
</style>