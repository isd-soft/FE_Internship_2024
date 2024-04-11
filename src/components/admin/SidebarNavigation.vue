<script setup>
import ProductIcon from '../../assets/icons/ProductIcon.svg'
import AdminContactIcon from '../../assets/icons/AdminContactIcon.svg'
import AdminUserIcon from '../../assets/icons/AdminUserIcon.svg'
import GenericList from '../generics/GenericList.vue'
import AdminNavigationLink from './AdminNavigationLink.vue'

const linkList = [
  { href: 'admin/products', textContent: 'Products', icon: ProductIcon },
  { href: 'admin/users', textContent: 'Users', icon: AdminUserIcon },
  { href: 'admin/contacts', textContent: 'Contacts', icon: AdminContactIcon }
]
</script>

<template>
  <nav class="aside__navigation navigation">
    <GenericList
      :items="linkList"
      customClass="navigation__list"
      itemClass="navigation__list-item text-sm"
    >
      <template v-slot="{ item }">
        <AdminNavigationLink v-bind="item" />
      </template>
    </GenericList>
  </nav>
</template>

<style lang="scss" scoped></style>
