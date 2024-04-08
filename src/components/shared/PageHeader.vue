<script setup>
import { onMounted, onUnmounted, ref, nextTick } from 'vue'
import { isMenuVisible } from '../../utils/isMenuVisible.js'
import { updateMediaFlag } from '../../utils/updateMediaFlag.js'
import { isHamburgerIconVisible, menuToggle } from '../../utils/menuToggle.js'
import HeaderLogo from './HeaderLogo.vue'
import HeaderNavigation from './HeaderNavigation.vue'
import GenericLink from '../generics/GenericLink.vue'
import CartIcon from '../../assets/icons/CartIcon.svg'
import UserIcon from '../../assets/icons/UserIcon.svg'
import HamburgerMenuIcon from '../../assets/icons/HamburgerMenuIcon.svg'
import CrossMenuIcon from '../../assets/icons/CrossMenuIcon.svg'
import HeaderNavigationCollapse from './HeaderNavigationCollapse.vue'

const headerRef = ref(null)

const updateOverlayPosition = () => {
  nextTick(() => {
    const header = headerRef.value
    if (header) {
      const headerHeight = header.clientHeight
      const overlay = document.querySelector('.header__overlay')
      if (overlay) {
        overlay.style.top = `${headerHeight}px`
        overlay.style.height = `calc(100vh - ${headerHeight}px)`
      }
    }
  })
}

let observer // Declare the MutationObserver outside of any specific method to ensure it's accessible throughout the component lifecycle

const updateFollowingBlockPadding = () => {
  nextTick(() => {
    const header = headerRef.value
    if (header) {
      const nextElement = header.nextElementSibling
      if (nextElement) {
        const headerHeight = header.clientHeight
        nextElement.style.paddingTop = `${headerHeight}px`
      }
    }
  })
}

onMounted(() => {
  window.addEventListener('resize', updateMediaFlag)
  window.addEventListener('resize', updateFollowingBlockPadding)
  window.addEventListener('resize', updateOverlayPosition)
  
  updateFollowingBlockPadding()
  updateOverlayPosition()

  observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type === 'childList') {
        updateFollowingBlockPadding()
      }
    })
  })

  observer.observe(document.body, { childList: true, subtree: true })
})

onUnmounted(() => {
  window.removeEventListener('resize', updateMediaFlag)
  window.removeEventListener('resize', updateFollowingBlockPadding)
  window.removeEventListener('resize', updateOverlayPosition)
  
  if (observer) {
    observer.disconnect()
  }
})
</script>

<template>
    <header ref="headerRef" class="header">
        <div class="header__container container">
            <HeaderLogo />
            <HeaderNavigation v-show="isMenuVisible" />
            <div class="header__link-wrapper" v-show="isMenuVisible">
                <GenericLink href="cart" containerClass="header__link">
                    <CartIcon />
                </GenericLink>
                <GenericLink href="#" containerClass="header__link">
                    <UserIcon />
                </GenericLink>
            </div>
            <div class="header__overlay" v-if="!isHamburgerIconVisible" @click="menuToggle"></div>
            <div class="header__navigation-collapse" v-if="!isHamburgerIconVisible">
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
        height: 100px;
        width:calc(100% - 8.3vw);
        max-width: 1380px;
        // padding: 30px 0;
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
            height: 2.47rem;
        }
    }

    &__container-toggle{
        display:none;
    }
    @media (max-width:768px) {  

        &__container{
            height: 50px;
        }

        &__container-toggle{
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }

        &__overlay{
            position: fixed;
            top: 50px;
            left: 0;
            z-index: 997;
            width: 100%;
            height: 100vh;
            background-color: var(--color-warm-ivory);
            backdrop-filter: blur(12px);
        }

        &__navigation-collapse{
            position: absolute;
            background-color: var(--color-white);
            top: 50px;
            left: 50%;
            z-index: 998;
            transform: translateX(0%);
            height: 100vh;
            width: 50%;
            animation: expandMenu ease-in-out .25s;
            max-height: fit-content;

            @keyframes expandMenu {
                from{
                    transform: translateX(100%);
                }
                to{
                    transform: translateX(-1%);
                }
            }
        }
    }

    @media (max-width:375px) {
        &__navigation-link{
            &--collapse{
                width: 100%;
                left: 0;
            }
        }
    }
}

.hamburger{
    height: 6.57rem;
    width: auto;
}

.cross{
    height: 5rem;
    align-items: center;
}
</style>