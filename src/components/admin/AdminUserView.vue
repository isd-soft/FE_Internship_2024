<script setup>
import { useAdminUserStore } from "../../stores/adminUserStore.js";
import { computed } from 'vue';
import AdminUserCard from './AdminUserCard.vue'

const adminStore = useAdminUserStore()

const users = computed(() => adminStore.users)

const roles = computed(() => adminStore.userRole)

const checkRole = (item, role) => item.roles.find(i => i.role === role) ? true : false

const updateRole = (item) => {
    if (checkRole(item, 'ADMIN')) {
        const newItem = { ...item, roles: item.roles.filter(role => role.role !== 'ADMIN') }
        adminStore.updateUsers(newItem)
    } else {

        const adminRole = roles.value.find(role => role.role === 'ADMIN')
        const newItem = { ...item, roles: [...item.roles, { id: adminRole.id, role: adminRole.role }] }
        adminStore.updateUsers(newItem)
    }
}

const handleDelete = (id) => {
    confirm('Are you sure you want to delete this user?') ? adminStore.deleteUser(id) : null
}

const handleRoleUpdate = (item) => {
    confirm('Are you sure you want to update this user role?') ? updateRole(item) : null
}
</script>

<template>
    <section class="main__section section admin-user-section">
        <h1 class="text-5xl admin-user-section__title">Users</h1>

        <div class="text-sm admin-user-section__table-header">
            <span class="admin-user-section__first-name">First Name</span>
            <span class="admin-user-section__last-name">Last Name</span>
            <span class="admin-user-section__username">Username</span>
            <span class="admin-user-section__email">Email</span>
            <span class="admin-user-section__created-at">Created at</span>
            <span class="admin-user-section__updated-at">Last updated</span>
            <span class="admin-user-section__role">Admin role</span>
            <span class="admin-user-section__delete"></span>
        </div>
        <ul class="text-xs admin-user-section__list">
            <li v-for="item in users" :key="item.id" class="admin-user-section__list-item">
                <AdminUserCard :user="item" :updateRole="handleRoleUpdate" :deleteUser="handleDelete"
                    className="admin-user-section__user-card" />
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>
.admin-user-section {
    padding: 5rem 10rem 5rem calc(10rem + 10px);
    display: flex;
    flex-direction: column;
    row-gap: 2.5rem;
    text-align: start;

    &__title {
        text-align: start;
    }

    &__table-header {
        height: 5rem;
        display: grid;
        grid-template-columns: repeat(7, minmax(0, 1fr)) 5rem;
        background-color: var(--color-linen);
        align-items: center;
        padding: 0 2rem;
    }

    &__list {
        display: flex;
        flex-direction: column;
        row-gap: 2.5rem;
    }

    &__role {
        text-align: center;
    }
}

@media only screen and (max-width: 991px) {
    .admin-user-section {
        padding: 60px 40px 60px calc(10rem + 10px);

        &__table-header {
            grid-template-columns: repeat(4, minmax(0, 1fr)) 5rem;
        }

        &__first-name,
        &__last-name,
        &__updated-at {
            display: none;
        }
    }
}

@media only screen and (max-width: 575px) {
    .admin-user-section {
        padding: 40px 20px 40px calc(10rem);

        &__table-header {
            grid-template-columns: repeat(2, minmax(0, 1fr)) 5rem;
        }

        &__created-at,
        &__role {
            display: none;
        }
    }
}
</style>