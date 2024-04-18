<script setup>
import { useAdminUserStore } from "../../stores/adminUserStore.js";
import { computed } from 'vue';
import { useWindowSize } from '@vueuse/core';
import { useModal } from 'vue-final-modal'
import AdminUserModal from './AdminUserModal.vue'
import AdminUser from './AdminUser.vue'

const { width } = useWindowSize()

const adminStore = useAdminUserStore()

adminStore.getUsers() //Delete this. Will be called from admin view

const users = computed(() => adminStore.users)

adminStore.getUserRole() //Delete this. Will be called from Admin View once

const roles = computed(() => adminStore.userRole)

const checkRole = (item, role) => item.roles.find(i => i.role === role) ? true : false

const updateRole = (item) => {
    if (checkRole(item, 'ADMIN')) {
        const newItem = { ...item, roles: item.roles.filter(role => role.role !== 'ADMIN') }
        console.log(newItem)
        adminStore.updateUsers(newItem)
    } else {
        const adminRole = roles.value.find(role => role.role === 'ADMIN')
        const newItem = { ...item, roles: [...item.roles, { id: adminRole.id, role: adminRole.role }] }
        console.log(newItem)
        adminStore.updateUsers(newItem)
    }
}

const handleDelete = (id) => {
    confirm('Are you sure you want to delete this user?') ? adminStore.deleteUser(id) : null
}

const handleRoleUpdate = (item) => {
    confirm('Are you sure you want to update this user role?') ? updateRole(item) : null
}

const toggleModal = () => {
    open()
}

const { open } = useModal({
    component: AdminUserModal,
})
</script>

<template>
    <section class="main__section section admin-user-section">
        <h1 class="text-5xl admin-user-section__title">Users {{ width }}</h1>
        <div class="text-sm admin-user-section__table-header">
            <span class="admin-user-section__first-name">First Name</span>
            <span class="admin-user-section__last-name">Last Name</span>
            <span class="admin-user-section__username">Username</span>
            <span class="admin-user-section__email">Email</span>
            <span class="admin-user-section__created-at">Created at</span>
            <span class="admin-user-section__last-update">Last updated</span>
            <span class="admin-user-section__role">Admin role</span>
            <span class="admin-user-section__delete"></span>
        </div>
        <ul class="text-xs admin-user-section__list">
            <li v-for="item in users" :key="item.id" class="admin-user-section__list-item"
                @click="width < 991 && toggleModal()">
                <AdminUser :user="item" :updateRole="handleRoleUpdate" :deleteUser="handleDelete"
                    className="admin-user-section__user-card" />
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>
.admin-user-section {
    padding: 5rem 10rem;
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr)) 5rem;
    row-gap: 2.5rem;
    text-align: center;

    &__title {
        grid-column: 1 / span 8;
        text-align: start;
    }

    &__table-header {
        height: 5rem;
        grid-column: 1 / span 8;
        display: grid;
        grid-template-columns: inherit;
        background-color: var(--color-linen);
        align-items: center;
    }

    &__list {
        grid-column: 1 / span 8;
        display: grid;
        grid-template-columns: inherit;
        row-gap: inherit;
    }

    &__list-item {
        height: 5rem;
        grid-column: 1 / span 8;
        display: grid;
        grid-template-columns: inherit;
        align-items: center;
        border: 1px solid var(--color-uc-gold);
        border-radius: 10px;
    }

    &__user-card {
        height: 100%;
        align-items: center;
        grid-column: 1 / span 8;
        display: grid;
        grid-template-columns: inherit;
    }
}

@media only screen and (max-width: 991px) {
    .admin-user-section {
        padding: 60px 40px 60px calc(10rem + 10px);
        grid-template-columns: repeat(4, minmax(0, 1fr)) 5rem;

        &__table-header {
            font-size: 12px;
            grid-column: 1 / span 5;
            grid-template-columns: inherit;
        }

        &__list {
            grid-column: 1 / span 5;
            grid-template-columns: inherit;
        }

        &:deep(.admin-user-section__list-item) {
            grid-column: 1 / span 5;
        }

        &__first-name,
        &__last-name,
        &__last-update {
            display: none;
        }
    }
}

@media only screen and (max-width: 575px) {
    .admin-user-section {
        padding: 40px 20px 40px calc(10rem + 10px);
        grid-template-columns: repeat(2, minmax(0, 1fr)) 5rem;

        &__table-header {
            font-size: 10px;
            grid-column: 1 / span 3;
            grid-template-columns: inherit;
        }

        &__list {
            grid-column: 1 / span 3;
            grid-template-columns: inherit;
        }

        &:deep(.admin-user-section__list-item) {
            grid-column: 1 / span 3;
        }

        &__first-name,
        &__last-name,
        &__email,
        &__last-update,
        &__created-at {
            display: none;
        }
    }
}
</style>