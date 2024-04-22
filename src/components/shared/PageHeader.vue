<script setup>
import { onMounted, onUnmounted, ref, nextTick, reactive, computed } from 'vue'
import { isMenuVisible } from '../../utils/isMenuVisible.js'
import { mediaFlagInstruments } from '../../utils/updateMediaFlag.js'
import { menuToggleInstruments } from '../../utils/menuToggle.js'
import { toggleMenu, menuState } from '@/utils/toggleMenu.js'
import { useUserStore } from '@/stores/userStore.js'
import HeaderLogo from './HeaderLogo.vue'
import HeaderNavigation from './HeaderNavigation.vue'
import GenericLink from '../generics/GenericLink.vue'
import CartIcon from '../../assets/icons/CartIcon.svg'
import UserIcon from '../../assets/icons/UserIcon.svg'
import LoginModal from '../authentication/LoginModal.vue'
import UserMenu from './UserMenu.vue'
import { useModal } from 'vue-final-modal'
import MenuIcon from '../../assets/icons/MenuIcon.svg'
import CrossIcon from '../../assets/icons/CrossIcon.svg'
import HeaderAdaptiveNavigation from './HeaderAdaptiveNavigation.vue'

const headerRef = ref(null)
const userMenuToggle = ref(false)
const userMenuRef = ref(null)
const { flag: mediaFlag, toggle: updateMediaFlag } = mediaFlagInstruments
const { flag: isMenuIconVisible, toggle: menuToggle } = menuToggleInstruments
const user = useUserStore()

const state = reactive({
  shrinkHeader: false
})

const scrollTriggerHeight = computed(() => {
  return (window.innerHeight - 100) / 2
})

const handleScroll = () => {
  state.shrinkHeader = window.scrollY > scrollTriggerHeight.value
}

const changeUserMenuToggle = () => (userMenuToggle.value = !userMenuToggle.value)

const onDocumentClick = (e) => {
  if (
    userMenuRef.value &&
    userMenuRef.value.$el &&
    !userMenuRef.value.$el.contains(e.target) &&
    userMenuToggle.value
  ) {
    userMenuToggle.value = false
  }
}

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
  window.addEventListener('click', onDocumentClick, true)
  window.addEventListener('resize', updateMediaFlag)
  window.addEventListener('resize', updateFollowingBlockPadding)
  window.addEventListener('resize', updateOverlayPosition)
  window.addEventListener('scroll', handleScroll)
  handleScroll()

  updateFollowingBlockPadding()
  updateOverlayPosition()

  observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        updateFollowingBlockPadding()
      }
    })
  })

  observer.observe(document.body, { childList: true, subtree: true })
})

onUnmounted(() => {
  window.removeEventListener('click', onDocumentClick, true)
  window.removeEventListener('resize', updateMediaFlag)
  window.removeEventListener('resize', updateFollowingBlockPadding)
  window.removeEventListener('resize', updateOverlayPosition)
  window.removeEventListener('scroll', handleScroll)

  if (observer) {
    observer.disconnect()
  }
})

const { open: openLoginModal } = useModal({
  component: LoginModal,
  attrs: {}
})
</script>

<template>
  <header
    :class="[
      'header',
      { 'header-shrink': state.shrinkHeader, 'menu-active': menuState.menuState === 'open' }
    ]"
    ref="headerRef"
    class="header"
  >
    <HeaderAdaptiveNavigation
      :class="{
        'header__navigation-collapse': true,
        'menu-open': menuState.menuState === 'open',
        'menu-closed': menuState.menuState === 'closed',
        'menu-active': menuState.menuState === 'open'
      }"
      v-if="!isMenuIconVisible"
    />
    <div class="header__container container">
      <HeaderLogo :shrink="state.shrinkHeader" />
      <HeaderNavigation v-show="isMenuVisible" />
      <div class="header__link-wrapper" v-show="isMenuVisible" v-if="user.isAuthenticated()">
        <GenericLink href="/cart" containerClass="header__link">
          <CartIcon class="header__link-item" />
        </GenericLink>
        <button containerClass="header__link" @click="changeUserMenuToggle()">
          <UserIcon class="header__link-item" v-show="isMenuVisible" />
        </button>
      </div>
      <button
        class="header__login-button text-sm"
        v-show="isMenuVisible"
        v-else
        @click="openLoginModal"
      >
        Login
      </button>
      <UserMenu v-show="userMenuToggle" ref="userMenuRef" class="header__user-options-menu" />
      <div class="header__overlay" v-if="!isMenuIconVisible" @click="toggleMenu" />
      <button v-if="isMenuIconVisible" class="header__container-toggle" @click="toggleMenu">
        <MenuIcon />
      </button>
      <button v-else class="header__container-toggle" @click="toggleMenu">
        <CrossIcon />
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  background-color: var(--color-white);
  transition: background-color 0.25s ease-in-out;
  width: 100%;
  z-index: 999;
  &__container {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    width: calc(100% - 8.3vw);
    max-width: 1380px;
    margin: 0 auto;
    transition: height 0.3s ease-in-out;
  }

  &.menu-active {
    background-color: var(--color-old-lace);
  }

  &__link-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 160px;
    column-gap: 24px;
  }

  &__link {
    color: var(--color-black);
  }

  &__link-item {
    width: auto;
    height: 24px;
    transition: fill 0.25s ease-in-out;

    &:hover {
      fill: var(--color-uc-gold);
    }
  }

  &__user-options-menu {
    position: absolute;
    top: 100px;
  }

  &__container-toggle {
    display: none;
  }

  &__login-button {
    display: block;
    cursor: pointer;
    transition: color 0.25s ease-in-out;

    &:hover {
      color: var(--color-uc-gold);
    }
  }
}

.header-shrink .header__container {
  height: 50px;
}

@media only screen and (max-width: 992px) {
  .header {
    &__container {
      height: 50px;
    }

    &__container-toggle {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    &__overlay {
      position: fixed;
      top: 50px;
      left: 0;
      z-index: 997;
      width: 100%;
      height: 100vh;
      background-color: var(--color-warm-ivory);
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
    }

    &__navigation-collapse {
      position: absolute;
      background-color: var(--color-white);
      transition: background-color 0.25s ease-in-out;
      top: 50px;
      left: 50%;
      z-index: 998;
      transform: translateX(0%);
      height: 100vh;
      width: 50%;
      max-height: fit-content;

      &.menu-active {
        background-color: var(--color-old-lace);
      }
    }
  }
  @keyframes expandMenu {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
  }

  @keyframes collapseMenu {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(100%);
    }
  }

  .menu-open {
    animation: expandMenu ease-in-out 0.25s forwards;
  }

  .menu-closed {
    animation: collapseMenu ease-in-out 0.25s forwards;
  }
}

.router-link-exact-active{
  fill: var(--color-uc-gold)
}

@media (max-width: 575px) {
  .header {
    &__navigation-collapse {
      width: 100%;
      left: 0;
      bottom: -100%;
      transform: translateY(100%)
    }

    @keyframes expandMenu {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0%);
    }
  }

  @keyframes collapseMenu {
    from {
      transform: translateY(0%);
    }
    to {
      transform: translateY(100%);
    }
  }
  }
}

.menu {
  height: 6.57rem;
  width: auto;
}

.cross {
  height: 5rem;
  align-items: center;
}
</style>
