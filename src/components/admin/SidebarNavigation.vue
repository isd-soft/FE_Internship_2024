<script setup>
import { reactive } from 'vue'
import ProductIcon from '../../assets/icons/ProductIcon.svg'
import ContactMapPointIcon from '../../assets/icons/ContactMapPointIcon.svg'
import UserIcon from '../../assets/icons/UserIcon.svg'
import GenericList from '../generics/GenericList.vue'
import GenericLink from '../generics/GenericLink.vue'

const icons = {
  ProductIcon,
  UserIcon,
  ContactMapPointIcon
}

const linkList = reactive([
  {
    href: 'products',
    textContent: 'Products',
    textClass: 'navigation__link-text text-sm',
    containerClass: 'navigation__link',
    icon: 'ProductIcon'
  },
  {
    href: 'users',
    textContent: 'Users',
    textClass: 'navigation__link-text text-sm',
    containerClass: 'navigation__link',
    icon: 'UserIcon'
  },
  {
    href: 'contact-settings',
    textContent: 'Contacts',
    textClass: 'navigation__link-text text-sm',
    containerClass: 'navigation__link',
    icon: 'ContactMapPointIcon'
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
    padding: 0 1.75rem 0 1.75rem;
    row-gap: 4rem;
  }

  &__link {
    display: flex;
    align-items: center;
    background-color: transparent;
    color: var(--color-black);
    column-gap: 2rem;
    font-weight: 400;
    transition:color 0.25s ease-in-out, fill 0.25s ease-in-out;
  }

  &__link:hover{
    color: var(--color-uc-gold);
    fill: var(--color-uc-gold)
  }

  &__svg-icon-wrapper{
    min-width: 1.9rem;
    max-width: 1.9rem;
  }

  .router-link-exact-active{
    color: var(--color-uc-gold);
    font-weight: 600;
    fill: var(--color-uc-gold)
  }
}

@media (max-width:575px){
  .navigation{
    margin-top: 0;

    &__list{
      flex-direction: row;
      column-gap: 7rem;
    }
  }
}
</style>
