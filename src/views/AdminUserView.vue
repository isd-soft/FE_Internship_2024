<script setup>
import { useAdminUserStore } from "../stores/adminUserStore.js";
import { computed } from 'vue';
import AdminUserCard from '../components/admin/AdminUserCard.vue'
import FirstLastPagination from '../components/shared/FirstLastPagination.vue'
import { ref } from 'vue';
import { useWindowSize } from '@vueuse/core';

const adminStore = useAdminUserStore()

const users = computed(() => adminStore.users)

const roles = computed(() => adminStore.userRole)

const checkRole = (item, role) => item.roles.find(i => i.role === role) ? true : false

const currentPage = ref(1)

const { width } = useWindowSize()

const getNumberOfPages = () => Math.ceil(users.value.length / 20)

const getPageElements = (pageNumber) => {
    const lowerBound = 20 * (pageNumber - 1)
    const upperBound = users.value.length > 20 * pageNumber ? 20 * pageNumber : users.value.length
    return users.value.slice(lowerBound, upperBound)
}

const goToPage = (number) => {
    currentPage.value = number
}

const goLastPage = () => {
    currentPage.value = getNumberOfPages()
}

const goFirstPage = () => {
    currentPage.value = 1
}

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
        <h1 class="text-xl admin-user-section__title">Users</h1>

        <div class="text-sm admin-user-section__table-header">
            <span class="admin-user-section__username">Username</span>
            <span class="admin-user-section__first-name">First Name</span>
            <span class="admin-user-section__last-name">Last Name</span>
            <span class="admin-user-section__email">Email</span>
            <span class="admin-user-section__created-at">Created at</span>
            <span class="admin-user-section__role">Actions</span>
        </div>
        <ul class="text-xs admin-user-section__list">
            <li v-for="item in getPageElements(currentPage)" :key="item.id" class="admin-user-section__list-item">
                <AdminUserCard :user="item" :updateRole="handleRoleUpdate" :deleteUser="handleDelete"
                    className="admin-user-section__user-card" />
            </li>
        </ul>
        <FirstLastPagination v-if="getNumberOfPages() > 1" :currentPage="currentPage" :pageNumber="getNumberOfPages()"
            :buttonNumber="width > 575 ? 5 : 3" :goToPage="goToPage" :goToLastPage="goLastPage"
            :goToFirstPage="goFirstPage" />
    </section>
</template>

<style lang="scss" scoped>
.admin-user-section {
    padding: 1.5rem 3rem 3rem 8.95rem;
    display: flex;
    flex-direction: column;
    row-gap: 2.5rem;
    text-align: start;

    &__title {
        text-align: start;
    }

    &__table-header {
        min-height: 60px;
        height: 6rem;
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr)) 12.5rem 17.5rem;
        background-color: var(--color-linen);
        align-items: center;
        padding: 1rem;
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

        &__table-header {
            grid-template-columns: repeat(2, minmax(0, 1fr)) 75px 125px;
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
        padding: 1.5rem 3rem 3rem 3rem;

        &__table-header {
            grid-template-columns: repeat(2, minmax(0, 1fr)) 50px;
        }

        &__created-at,
        &__role {
            display: none;
        }
    }
}
</style>