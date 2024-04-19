<script setup>
import TrashIcon from '@/assets/icons/TrashIcon.svg';
import EditIcon from '@/assets/icons/EditIcon.svg';
import ToggleButton from '@/components/shared/ToggleButton.vue';
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

const toggleModal = () => {
    open()
}

const { open } = useModal({
    component: AdminUserModal,
    attrs: {
        user: user,
        updateRole: updateRole,
        deleteUser: deleteUser,
    }
})

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
        <div class="admin-user__updated-at">
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
        <div class="admin-user__edit">
            <EditIcon @click="toggleModal()" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.admin-user {
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr)) 5rem;
    border: 1px solid var(--color-uc-gold);
    border-radius: 10px;
    padding: 1.5rem 2rem;
    min-height: 5rem;
    align-items: center;

    &__first-name,
    &__last-name,
    &__username,
    &__email,
    &__created-at,
    &__updated-at,
    &__role,
    &__delete,
    &__edit {
        padding: 0 0.5rem;
        height: min-content;
    }

    &__delete {
        height: 100%;
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

    &__edit {
        height: 100%;
        display: none;
        justify-content: center;
        cursor: pointer;
    }

    &__first-name,
    &__last-name,
    &__username,
    &__email {
        overflow-y: hidden;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        &:hover,
        &:focus {
            overflow: scroll;
            white-space: normal;
            text-overflow: unset;
            scrollbar-width: none;
            -ms-overflow-style: none;

            &::-webkit-scrollbar {
                display: none;
            }
        }
    }

    &__role {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

@media only screen and (max-width: 991px) {
    .admin-user {
        grid-template-columns: repeat(4, minmax(0, 1fr)) 5rem;

        &__first-name,
        &__last-name,
        &__updated-at {
            display: none;
        }
    }
}

@media only screen and (max-width: 575px) {
    .admin-user {
        grid-template-columns: repeat(2, minmax(0, 1fr)) 5rem;

        &__created-at,
        &__delete,
        &__role {
            display: none;
        }

        &__edit {
            display: flex;
        }
    }
}
</style>