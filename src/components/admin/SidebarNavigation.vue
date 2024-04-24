<script setup>
import { reactive } from 'vue'
import ProductIcon from '../../assets/icons/ProductIcon.svg'
import AdminContactIcon from '../../assets/icons/AdminContactIcon.svg'
import AdminUserIcon from '../../assets/icons/AdminUserIcon.svg'
import GenericList from '../generics/GenericList.vue'
import GenericLink from '../generics/GenericLink.vue'

const icons = {
  ProductIcon,
  AdminUserIcon,
  AdminContactIcon
}

const linkList = reactive([
  {
    href: 'products',
    textContent: 'Products',
    textClass: 'navigation__link-text text-md',
    containerClass: 'navigation__link',
    icon: 'ProductIcon'
  },
  {
    href: 'users',
    textContent: 'Users',
    textClass: 'navigation__link-text text-md',
    containerClass: 'navigation__link',
    icon: 'AdminUserIcon'
  },
  {
    href: 'contact-settings',
    textContent: 'Contacts',
    textClass: 'navigation__link-text text-md',
    containerClass: 'navigation__link',
    icon: 'AdminContactIcon'
  }
])
</script>

<template>
  <nav class="aside__navigation navigation">
    <GenericList
      :items="linkList"
      customClass="navigation__list"
      itemClass="navigation__list-item text-sm"
    >
      <template v-slot="{ item }">
        <GenericLink v-bind="item">
          <div class="navigation__svg-icon-wrapper">
            <component :is="icons[item.icon]" />
          </div>
        </GenericLink>
      </template>
    </GenericList>
  </nav>
</template>

<style lang="scss" scoped>
.navigation {
  margin-top: 8rem;

  &__list {
    display: flex;
    flex-direction: column;
    padding: 0 2.35rem 0 2.35rem;
    row-gap: 4rem;
  }

  &__link {
    display: flex;
    align-items: center;
    background-color: transparent;
    color: var(--color-black);
    column-gap: 2rem;
    font-weight: 400;
    transition:color 0.25s ease-in-out;
  }

  &__link:hover{
    color: var(--color-uc-gold);
  }

  &__svg-icon-wrapper{
    min-width: 2.25rem;
    max-width: 2.25rem;
  }

  &__list-item {
    .icon {
      width: 100%;
      height: 100%;
      fill: var(--color-uc-gold);
    }

    .active-icon {
      fill: var(--color-white);
    }
  }

  .router-link-exact-active{
    color: var(--color-uc-gold);
    font-weight: 600;
  }
}
</style>
