<script setup>
import GenericLink from '../generics/GenericLink.vue'
import GenericList from '../generics/GenericList.vue'
import CartIcon from '../../assets/icons/CartIcon.svg'
import UserIcon from '../../assets/icons/UserIcon.svg'
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import { useModal } from 'vue-final-modal'
import { toggleMenu } from '@/utils/toggleMenu'
import LoginModal from '../authentication/LoginModal.vue'
import { useCartStore } from '@/stores/cartStore.js'

const user = useUserStore()
const route = useRoute()
const router = useRouter()
const cartStore = useCartStore()
const userMenuVisible = ref(false)

const cartItemNumber = computed(() => {
  return Array.from(cartStore.productMap).length
})

const { open: openLoginModal } = useModal({
  component: LoginModal,
  attrs: {
    onClosed() {
      toggleMenu()
    }
  }
})

const handleNavigationClick = () => {
  toggleMenu()
}
const handleLoginClick = () => {
  if (!user.isAuthenticated()) openLoginModal()
}

const handleProfileClick = () => {
  userMenuVisible.value = !userMenuVisible.value
}

const logout = () => {
  user.logout()
  userMenuVisible.value = false
  router.push('/')
}

const goToAdminPanel = () => {
  router.push('/admin')
  userMenuVisible.value = false
}

const handleCartClick = () => {
  if (!user.isAuthenticated()) openLoginModal()
  else {
    toggleMenu()
    router.push({ name: 'cart' })
  }
}

const linkList = [
  {
    href: '/',
    textContent: 'Home',
    containerClass: 'navigation__link',
    clickHandler: () => handleNavigationClick()
  },
  {
    href: 'shop',
    textContent: 'Shop',
    containerClass: 'navigation__link',
    clickHandler: () => handleNavigationClick()
  },
  {
    href: 'contact',
    textContent: 'Contact',
    containerClass: 'navigation__link',
    clickHandler: () => handleNavigationClick()
  }
]

const isActive = (href) => computed(() => route.path === href)
</script>

<template>
  <nav class="header__navigation navigation">
    <GenericList
      :items="linkList"
      customClass="navigation__list"
      itemClass="navigation__list-item text-2xl"
    >
      <template v-slot="{ item }">
        <GenericLink
          v-bind="item"
          @click="item.clickHandler ? item.clickHandler() : {}"
          :class="{ 'active-link': isActive(item.href).value }"
        >
        </GenericLink>
      </template>
    </GenericList>
    <div v-if="user.isAuthenticated()" class="navigation__icon-wrapper">
      <GenericLink containerClass="navigation__link" @click="handleCartClick">
        <span class="navigation__cart-quantity text-xs" v-if="cartItemNumber > 0"
          >{{ cartItemNumber }}
        </span>
        <CartIcon class="navigation__link-icon" />
      </GenericLink>
      <GenericLink containerClass="navigation__link" @click="handleProfileClick">
        <UserIcon class="navigation__link-icon" />
      </GenericLink>
    </div>
    <button class="navigation__login-button text-2xl" @click="handleLoginClick" v-else>Login</button>
    <div v-if="userMenuVisible" class="navigation__user-menu">
      <button @click="goToAdminPanel" class="text-2xl">Admin Panel</button>
      <button @click="logout" class="text-2xl">Logout</button>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navigation {
  position: relative;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &__icon-wrapper {
    margin-top: 5rem;
    width: 13rem;
    display: flex;
    justify-content: space-between;
  }
  &__link {
    position: relative;
  }

  &__link-icon {
    width: 35px;
    height: 35px;
    transition: 0.2s ease;

    &:hover {
      fill: var(--color-uc-gold);
    }

    &:active {
      fill: var(--color-black);
    }
  }

  &__login-button{
    margin-top: 5rem;
  }

  &__user-menu{
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    row-gap: 5rem;
  }

  &__cart-quantity {
    position: absolute;
    display: flex;
    color: var(--color-white);
    justify-content: center;
    align-items: center;
    background-color: var(--color-uc-gold);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    right: -10px;
    top: -6px;
  }
}
.navigation__list {
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 5rem;
  justify-content: center;
}
.navigation__link {
  color: var(--color-black);
  transition: color 0.25s ease-in-out;
  &:hover {
    color: var(--color-uc-gold);
  }
}
.router-link-exact-active {
  color: var(--color-uc-gold);
  font-weight: 600;
}
</style>
