<script setup>
import {onMounted, onUnmounted} from 'vue'
import {isMenuVisible, updateMediaFlag} from '../../utils/pageHeaderHelperFuncs.js'
import {isHamburgerIconVisible, menuToggle} from '../../utils/menuToggle.js'
import HeaderLogo from './HeaderLogo.vue'
import HeaderNavigation from './HeaderNavigation.vue'
import GenericLink from '../generics/GenericLink.vue'
import CartIcon from '../../assets/icons/CartIcon.svg'
import UserIcon from '../../assets/icons/UserIcon.svg'
import HamburgerMenuIcon from '../../assets/icons/HamburgerMenuIcon.svg'
import CrossMenuIcon from '../../assets/icons/CrossMenuIcon.svg'
import HeaderNavigationCollapse from './HeaderNavigationCollapse.vue'

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

            <!-- ============================== Desktop ========================= -->

            <HeaderNavigation v-show="isMenuVisible" />

            <div class="header__link-wrapper" v-show="isMenuVisible">
                <GenericLink href="cart" containerClass="header__link">
                    <CartIcon />
                </GenericLink>
                <GenericLink href="#" containerClass="header__link">
                    <UserIcon />
                </GenericLink>
            </div>

            <!-- ============================== Smartphone/Laptop ========================= -->

            <div class="header__navigation-links--collapse" v-if="!isHamburgerIconVisible">
                <HeaderNavigationCollapse />
            </div>

            <span class="header__container-toggle" id="menuToggle" @click="menuToggle">
                <HamburgerMenuIcon v-if="isHamburgerIconVisible" />
                <CrossMenuIcon v-else />
            </span>
            </div>
    </header>
</template>

<style lang="scss" scoped>
.header{
    position: fixed;
    background-color: var(--color-white);
    width: 100%;
    z-index: 999;
    &__container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: clamp(60px,6.95vw,100px);
        width:calc(100% - 8.3vw);
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
        color: var(--color-black);
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
                height: clamp(29.2px,6vw,33.4px);
                width: auto;
            }
            .cross{
                height: clamp(24.2px, 3.5vw,33.4px);
                align-items: center;
            }
        }

        &__navigation-links{
            &--collapse{
                position: absolute;
                background-color: var(--color-white);
                top: clamp(60px,6.95vw,100px);
                left: 50%;
                transform: translateX(-50%);
                width: 100%;
                padding-bottom: 10px;
                // height: ;
            }
        }
    }
}
</style>