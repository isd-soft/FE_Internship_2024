<script setup>
import GenericList from '../generics/GenericList.vue';
import TrashIcon from '@/assets/icons/TrashIcon.svg';
import ToggleButton from '../shared/ToggleButton.vue';
import { useAdminUserStore } from "../../stores/adminUserStore.js";
import {computed} from 'vue';

const adminStore = useAdminUserStore()

const users = computed(() => adminStore.users)

const splitDate = (date) => date.split('T');

const checkRole = (item) => {
    return item.roles[0].role === 'ADMIN'
}
</script>

<template>
    <section class="main__section section admin-user-section">
        <h1 class="text-5xladmin-user-section__title">Users</h1>
        <div class="text-sm admin-user-section__table-header">
            <span class="admin-user-section__header-name">ID</span>
            <span class="admin-user-section__header-name">First Name</span>
            <span class="admin-user-section__header-name">Last Name</span>
            <span class="admin-user-section__header-name">Username</span>
            <span class="admin-user-section__header-name">Email</span>
            <span class="admin-user-section__header-name">Created at</span>
            <span class="admin-user-section__header-name">Last updated</span>
            <span class="admin-user-section__header-name">Role</span>
            <span class="admin-user-section__header-name"></span>
        </div>
        <GenericList :items="users" tag="ul" keyProp="id" custom-class="text-xs admin-user-section__list" item-class="admin-user-section__list-item">
            <template v-slot="{ item }">
                <span class="admin-user-section__id" :title="item.id">{{ item.id }}</span>
                <span class="admin-user-section__fist-name">{{ item.FirstName }}</span>
                <span class="admin-user-section__last-name">{{ item.lastName }}</span>
                <span class="admin-user-section__username">{{ item.username }}</span>
                <span class="admin-user-section__email">{{ item.email }}</span>
                <span class="admin-user-section__created-at">
                    {{ splitDate(item.createdAt)[1].slice(0, 5) }}
                    <br>
                    {{ splitDate(item.createdAt)[0] }}
                </span>
                <span class="admin-user-section__last-update">
                    {{ splitDate(item.updatedAt)[1].slice(0, 5) }}
                    <br>
                    {{ splitDate(item.updatedAt)[0] }}
                </span>
                <span class="admin-user-section__role">
                    <ToggleButton :state="checkRole(item)"/>
                </span>
                <div class="admin-user-section__delete">
                    <TrashIcon/>
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

    &__title, &__header-name, &__id, &__fist-name, &__last-name, 
    &__username, &__email, &__created-at, &__last-update, &__role, &__delete {
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
        border: 1px solid darkmagenta;
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
    }

    &__id, &__fist-name, &__last-name, &__username, &__email{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-left: 0.5rem;
    

        &:hover, &:focus {
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