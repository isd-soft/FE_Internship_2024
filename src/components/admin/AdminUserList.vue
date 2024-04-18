<script setup>
import GenericList from '../generics/GenericList.vue';
import TrashIcon from '@/assets/icons/TrashIcon.svg';
import ToggleButton from '@/components/shared/ToggleButton.vue';
import { useAdminUserStore } from "../../stores/adminUserStore.js";
import { computed } from 'vue';

const adminStore = useAdminUserStore()

adminStore.getUsers() //Delete this. Will be called from admin view

const users = computed(() => adminStore.users)

adminStore.getUserRole() //Delete this. Will be called from Admin View once

const roles = computed(() => adminStore.userRole)

const splitDate = (date) => date.split('T');

const checkRole = (item, role) => item.roles.find(i => i.role === role) ? true : false

const updateRole = (item) => {
    if (checkRole(item, 'ADMIN')) {
        console.log("is admin")
        const newItem = { ...item, roles: item.roles.filter(role => role.role !== 'ADMIN') }
        console.log(newItem)
        adminStore.updateUsers(newItem)
    } else {
        console.log("is not admin")
        const adminRole = roles.value.find(role => role.role === 'ADMIN')
        const newItem = { ...item, roles: [...item.roles, { id: adminRole.id, role: adminRole.role }] }
        console.log(newItem)
        adminStore.updateUsers(newItem)
    }
}

const deleteUser = (id) => {
    console.log("delete user", id)
    adminStore.deleteUser(id)
}
</script>

<template>
    <section class="main__section section admin-user-section">
        <h1 class="text-5xl admin-user-section__title">Users</h1>
        <div class="text-sm admin-user-section__table-header">
            <span class="admin-user-section__header-name">ID</span>
            <span class="admin-user-section__header-name">First Name</span>
            <span class="admin-user-section__header-name">Last Name</span>
            <span class="admin-user-section__header-name">Username</span>
            <span class="admin-user-section__header-name">Email</span>
            <span class="admin-user-section__header-name">Created at</span>
            <span class="admin-user-section__header-name">Last updated</span>
            <span class="admin-user-section__header-name">Admin role</span>
            <span class="admin-user-section__header-name"></span>
        </div>
        <GenericList :items="users" tag="ul" :keyProp="id" custom-class="text-xs admin-user-section__list"
            item-class="admin-user-section__list-item">
            <template v-slot="{ item }">
                <div class="admin-user-section__id" :title="item.id">{{ item.id }}</div>
                <div class="admin-user-section__fist-name">{{ item.firstName }}</div>
                <div class="admin-user-section__last-name">{{ item.lastName }}</div>
                <div class="admin-user-section__username">{{ item.username }}</div>
                <div class="admin-user-section__email">{{ item.email }}</div>
                <div class="admin-user-section__created-at">
                    {{ splitDate(item.createdAt)[1].slice(0, 5) }}
                    <br>
                    {{ splitDate(item.createdAt)[0] }}
                </div>
                <div class="admin-user-section__last-update">
                    {{ splitDate(item.updatedAt)[1].slice(0, 5) }}
                    <br>
                    {{ splitDate(item.updatedAt)[0] }}
                </div>
                <div class="admin-user-section__role">
                    <ToggleButton :state="checkRole(item, 'ADMIN')" @click="updateRole(item)" />
                </div>
                <div class=" admin-user-section__delete">
                    <TrashIcon @click="deleteUser(item.id)" />
                </div>
            </template>
        </GenericList>
    </section>
</template>

<style lang="scss" scoped>
.admin-user-section {
    padding: 5rem 10rem;
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr)) 5rem;
    row-gap: 2.5rem;
    text-align: center;

    &__title,
    &__header-name,
    &__id,
    &__fist-name,
    &__last-name,
    &__username,
    &__email,
    &__created-at,
    &__last-update,
    &__role,
    &__delete {
        padding: 0 0.5rem;
    }

    &__title {
        grid-column: 1 / span 9;
        text-align: start;
    }

    &__table-header {
        height: 5rem;
        grid-column: 1 / span 9;
        display: grid;
        grid-template-columns: inherit;
        background-color: var(--color-linen);
        align-items: center;
    }

    &__list {
        grid-column: 1 / span 9;
        display: grid;
        grid-template-columns: inherit;
        row-gap: inherit;
    }

    &:deep(.admin-user-section__list-item) {
        height: 5rem;
        grid-column: 1 / span 9;
        display: grid;
        grid-template-columns: inherit;
        align-items: center;
        border: 1px solid var(--color-uc-gold);
        border-radius: 10px;
    }

    &__delete {
        height: 50%;
        display: flex;
        justify-content: center;

        svg {
            fill: var(--color-uc-gold);
            cursor: pointer;

            &:hover {
                fill: var(--color-dark-charcoal);
            }

            &:active {
                fill: var(--color-uc-gold);
            }
        }
    }

    &__id,
    &__fist-name,
    &__last-name,
    &__username,
    &__email {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-left: 0.5rem;


        &:hover,
        &:focus {
            overflow: scroll;
            text-overflow: inherit;

            &::-webkit-scrollbar {
                display: none;
            }
        }
    }

    &__role {
        width: 100%;
        height: 100%;
        padding: 1rem;
    }
}
</style>