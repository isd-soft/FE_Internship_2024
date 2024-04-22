<script setup>
import GenericList from '../generics/GenericList.vue'
import GenericLink from '../generics/GenericLink.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const linkList = [
  { href: '/', textContent: 'Home', containerClass: 'navigation__link' },
  { href: 'shop', textContent: 'Shop', containerClass: 'navigation__link' },
  { href: 'contact', textContent: 'Contact', containerClass: 'navigation__link' }
]

const isActive = (href) => computed(() => route.path === href)
</script>

<template>
  <nav class="header__navigation navigation">
    <GenericList
      :items="linkList"
      customClass="navigation__list"
      itemClass="navigation__list-item"
    >
      <template v-slot="{ item }">
        <GenericLink v-bind="item" :class="{ 'active-link': isActive(item.href).value }" />
      </template>
    </GenericList>
  </nav>
</template>

<style lang="scss" scoped>
.navigation__list {
  display: flex;
  align-items: center;
  column-gap: 76px;
  list-style: none;
}

.navigation__link {
  color: var(--color-black);
  transition: color 0.25s ease-in-out;
  font-size: 16px;
  &:hover{
    color: var(--color-uc-gold)
  }
}

.router-link-exact-active {
  color: var(--color-uc-gold);
  font-weight: 600;
}
</style>
