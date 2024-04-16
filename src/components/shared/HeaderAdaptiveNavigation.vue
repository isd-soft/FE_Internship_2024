<script setup>
import GenericLink from '../generics/GenericLink.vue'
import GenericList from '../generics/GenericList.vue'
import { useUserStore } from '@/stores/userStore'
import {useModal} from 'vue-final-modal' 
import LoginModal from '../authentication/LoginModal.vue'

const user = useUserStore()

const {open: openLoginModal} = useModal({
  component: LoginModal
})

function handleProfileClick() {
  if (!user.isAuthenticated()) openLoginModal()
}

const linkList = [
  { href: '/', textContent: 'Home', containerClass: 'navigation__link' },
  { href: 'shop', textContent: 'Shop', containerClass: 'navigation__link' },
  { href: 'contact', textContent: 'Contact', containerClass: 'navigation__link' },
  { href: 'cart', textContent: 'Cart', containerClass: 'navigation__link' },
  {
    href: '#',
    textContent: 'Profile',
    containerClass: 'navigation__link',
    clickHandler: () => handleProfileClick()
  }
]
</script>

<template>
  <nav class="header__navigation navigation">
    <GenericList
      :items="linkList"
      customClass="navigation__list"
      itemClass="navigation__list-item text-xl"
    >
      <template v-slot="{ item }">
        <GenericLink v-bind="item" @click="item.clickHandler ? item.clickHandler() : {}" />
      </template>
    </GenericList>
  </nav>
</template>

<style lang="scss" scoped>
.navigation {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.navigation__list {
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 7rem;
  justify-content: space-around;
}
.navigation__link {
  color: var(--color-black);
}
</style>