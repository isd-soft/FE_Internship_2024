<script setup>
import GenericLink from '../generics/GenericLink.vue'
import { useUserStore } from '@/stores/userStore.js'

const user = useUserStore()
</script>

<template>
    <div class="header__user-menu">
        <GenericLink href="admin/products" containerClass = "header__user-option text-sm" v-show="user.isAdmin()" textContent = "Admin panel"/>
        <span class = "header__user-option header__logout text-sm" @click = "user.logout()">Logout</span>
    </div>
</template>

<style lang="scss" scoped>
.header__user-menu{
    display: flex;
    background-color: var(--color-white);
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.header__user-option{
    padding: 1rem 1.5rem;
    cursor: pointer;
    color: black;
}

</style>