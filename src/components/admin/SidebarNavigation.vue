<script setup>
import { useRoute } from 'vue-router'
import { reactive, computed } from 'vue'
import ProductIcon from '../../assets/icons/ProductIcon.svg'
import AdminContactIcon from '../../assets/icons/AdminContactIcon.svg'
import AdminUserIcon from '../../assets/icons/AdminUserIcon.svg'
import GenericList from '../generics/GenericList.vue'
import GenericLink from '../generics/GenericLink.vue'

const route = useRoute()

const icons = {
  ProductIcon,
  AdminUserIcon,
  AdminContactIcon
}

const createPath = (pathname) => `${new URL(location.href).origin}/admin/${pathname}`;

console.log(createPath('products'));

const linkList = reactive([
  {
    href: 'products',
    textContent: 'Products',
    textClass: 'navigation__link-text text-lg',
    containerClass: 'navigation__link',
    icon: 'ProductIcon'
  },
  {
    href: 'users',
    textContent: 'Users',
    textClass: 'navigation__link-text text-lg',
    containerClass: 'navigation__link',
    icon: 'AdminUserIcon'
  },
  {
    href: 'contact-settings',
    textContent: 'Contacts',
    textClass: 'navigation__link-text text-lg',
    containerClass: 'navigation__link',
    icon: 'AdminContactIcon'
  }
])
</script>

<template>
  <nav class="aside__navigation navigation">
    <GenericList :items="linkList" customClass="navigation__list" itemClass="navigation__list-item text-sm">
      <template v-slot="{ item }">
        <GenericLink v-bind="item">
          <component :is="icons[item.icon]" />
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
    padding: 0 3.4rem 0 3.4rem;
    row-gap: 4rem;
  }

  &__link {
    display: flex;
    align-items: center;
    background-color: transparent;
    color: var(--color-black);
    column-gap: 3rem;
    font-weight: 500;
  }

  &__list-item {
    .contact-icon {
      min-width: 3rem;
      min-height: 4.8rem;
      fill: var(--color-uc-gold);
    }

    .active-icon {
      fill: var(--color-white);
    }

    .adminuser-icon {
      min-width: 3.2rem;
      min-height: 3.7rem;
      fill: var(--color-uc-gold);
    }

    .product-icon {
      min-width: 3.2rem;
      min-height: 3.2rem;
      fill: var(--color-uc-gold);
    }
  }
}
</style>
