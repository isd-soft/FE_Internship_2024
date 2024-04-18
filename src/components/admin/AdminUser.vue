<script setup>
import TrashIcon from '@/assets/icons/TrashIcon.svg';
import ToggleButton from '@/components/shared/ToggleButton.vue';
import { useWindowSize } from '@vueuse/core';
import { useModal } from 'vue-final-modal'
import AdminUserModal from './AdminUserModal.vue'
import { watch, ref } from 'vue';

const props = defineProps({
    className: String,
    user: Object,
    updateRole: Function,
    deleteUser: Function,
})

const user = ref(props.user)

watch(() => props.user, () => {
    user.value = props.user
})

const { updateRole, deleteUser } = props

const { width } = useWindowSize()

const toggleModal = () => {
    open()
}

const splitDate = (date) => date.split('T');

const checkRole = (item, role) => item.roles.find(i => i.role === role) ? true : false
</script>

<template>
    <div :class="['admin-user', props.className]">
        <div class="admin-user__first-name">{{ user.firstName }}</div>
        <div class="admin-user__last-name">{{ user.lastName }}</div>
        <div class="admin-user__username">{{ user.username }}</div>
        <div class="admin-user__email">{{ user.email }}</div>
        <div class="admin-user__created-at">
            {{ splitDate(user.createdAt)[1].slice(0, 5) }}
            <br>
            {{ splitDate(user.createdAt)[0] }}
        </div>
        <div class="admin-user__last-update">
            {{ splitDate(user.updatedAt)[1].slice(0, 5) }}
            <br>
            {{ splitDate(user.updatedAt)[0] }}
        </div>
        <div class="admin-user__role">
            <ToggleButton :state="checkRole(user, 'ADMIN')" @click="updateRole(user)" />
        </div>
        <div class="admin-user__delete">
            <TrashIcon @click="deleteUser(id)" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.admin-user {

    &__first-name,
    &__last-name,
    &__username,
    &__email,
    &__created-at,
    &__last-update,
    &__delete {
        padding: 0 0.5rem;
        height: min-content;
    }

    &__delete {
        height: 100%;
        padding: 1rem 0.5rem;
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

    &__first-name,
    &__last-name,
    &__username,
    &__email {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        &:hover,
        &:focus {
            overflow: visible;
            white-space: normal;
            scrollbar-width: 0;

            &::-webkit-scrollbar {
                display: none;
            }
        }
    }

    &__role {
        width: 100%;
        height: 100%;
        padding: 1rem 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>