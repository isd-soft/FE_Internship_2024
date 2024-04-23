<script setup>
import GenericLink from '../generics/GenericLink.vue'
import { useUserStore } from '@/stores/userStore.js'
import {createToast} from '../generics/GenericToast.vue'

const user = useUserStore()

const emit = defineEmits(['logout'])

const handleLogout = () => {
  user.logout()
  createToast("And do not appear on the doorstep of this house ever again", "success")
  emit('logout')
}
</script>

<template>
  <div class="header__user-menu">
    <GenericLink
      href="admin/products"
      containerClass="header__user-option text-xs"
      v-show="user.isAdmin()"
      textContent="Admin panel"
    />
    <button
      class="header__user-option header__logout text-xs"
      v-show="user.isAuthenticated()"
      @click="handleLogout"
    >
      Logout
    </button>
  </div>
</template>

<style lang="scss" scoped>
.header__user-menu {
  display: flex;
  background-color: var(--color-white);
  flex-direction: column;
  align-items: self-end;
  row-gap: 8px;
  border-radius: 0 0 5px 5px;
  padding: 1.5rem;
}

.header__user-option {
  font-size: 14px;
  cursor: pointer;
  color: black;
}
</style>
