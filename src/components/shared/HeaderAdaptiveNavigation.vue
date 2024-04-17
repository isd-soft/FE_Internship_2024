<script setup>
import GenericLink from '../generics/GenericLink.vue'
import GenericList from '../generics/GenericList.vue'
import { useUserStore } from '@/stores/userStore'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useModal } from 'vue-final-modal'
import { toggleMenu } from '@/utils/toggleMenu'
import LoginModal from '../authentication/LoginModal.vue'

const user = useUserStore()
const route = useRoute()

const { open: openLoginModal } = useModal({
  component: LoginModal
})

function handleProfileClick() {
  if (!user.isAuthenticated()) openLoginModal()
  toggleMenu()
}

const linkList = [
  { href: 'home', textContent: 'Home', containerClass: 'navigation__link' },
  { href: 'shop', textContent: 'Shop', containerClass: 'navigation__link' },
  { href: 'contact', textContent: 'Contact', containerClass: 'navigation__link' },
  { href: 'cart', textContent: 'Cart', containerClass: 'navigation__link' },
  {
    href: '',
    textContent: 'Profile',
    containerClass: 'navigation__link',
    clickHandler: () => handleProfileClick()
  }
]

const isActive = (href) => computed(() => route.path === href)
</script>

<template>
  <nav class="header__navigation navigation">
    <GenericList
      :items="linkList"
      customClass="navigation__list"
      itemClass="navigation__list-item text-xl"
    >
      <template v-slot="{ item }">
        <GenericLink
          v-bind="item"
          @click="item.clickHandler ? item.clickHandler() : {}"
          :class="{ 'active-link': isActive(item.href).value }"
        />
      </template>
    </GenericList>
  </nav>
</template>

<style lang="scss" scoped>
.navigation {
  position: relative;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.navigation__list {
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 7rem;
  justify-content: center;
}
.navigation__link {
  color: var(--color-black);
}
.router-link-exact-active {
  color: var(--color-uc-gold);
  font-weight: 600;
}
</style>
