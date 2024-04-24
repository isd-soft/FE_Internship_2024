<script setup>
import { VueFinalModal, useVfm } from 'vue-final-modal'
import { watch, ref } from 'vue';
import CrossIcon from '@/assets/icons/CrossIcon.svg';

const vfm = useVfm()
const closeModal = () => vfm.closeAll(vfm.openedModals)

const props = defineProps({
    user: Object,
    updateRole: Function,
    deleteUser: Function,
})

const item = ref(props.user)

watch(() => props.user, () => {
    item.value = props.user
})

const { updateRole, deleteUser } = props

const checkRole = (item, role) => item.roles.find(i => i.role === role) ? true : false

</script>

<template>
    <VueFinalModal class="admin-user-modal" content-class="admin-user-modal__container" overlay-transition="vfm-fade"
        content-transition="vfm-fade" @clickOutside="$emit('close')">
        <section class="admin-user-modal__wrapper">
            <div class="admin-user-modal__close">
                <button class="admin-user-modal__close-button" @click="closeModal">
                    <CrossIcon />
                </button>
            </div>
            <h1 class="text-3xl admin-user-modal__title">User details</h1>
            <h3 class="admin-user-modal__field-name">Username:</h3>
            <p class="admin-user-modal__field-content">{{ item.username }}</p>
            <h3 class="admin-user-modal__field-name">Email:</h3>
            <p class="admin-user-modal__field-content">{{ item.email.split("@")[0] }}<wbr>@{{ item.email.split("@")[1] }}
            </p>
            <h3 class="admin-user-modal__field-name">First Name:</h3>
            <p class="admin-user-modal__field-content">{{ item.firstName }}</p>
            <h3 class="admin-user-modal__field-name">Last Name:</h3>
            <p class="admin-user-modal__field-content">{{ item.lastName }}</p>
            <h3 class="admin-user-modal__field-name">Created at:</h3>
            <p class="admin-user-modal__field-content">{{ item.createdAt.replace('T', ' ').slice(0, -8) }}</p>
            <h3 class="admin-user-modal__field-name">Last updated:</h3>
            <p class="admin-user-modal__field-content">{{ item.updatedAt.replace('T', ' ').slice(0, -8) }}</p>
            <h3 class="admin-user-modal__field-name">Role:</h3>
            <p class="admin-user-modal__field-content">{{ checkRole(item, 'ADMIN') ? 'ADMIN' : 'USER' }}</p>
            <button class="primary-button admin-user-modal__update-button" @click="updateRole(item)">{{ checkRole(item,
            'ADMIN') ? 'Remove priveleges' : 'Make ADMIN' }}</button>
            <button class="primary-button admin-user-modal__delete-button" @click="deleteUser(item.id)">Delete
                user</button>
        </section>
    </VueFinalModal>
</template>

<style lang="scss">
.admin-user-modal {
    background-color: var(--color-warm-ivory);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;

    &__close {
        grid-column: 1 / -1;
        display: flex;
        justify-content: flex-end;
        margin-bottom: -10px;
    }

    &__close-button {
        width: 30px;
        height: 30px;
    }

    &__title {
        grid-column: 1 / -1;
        text-align: center;
        margin-bottom: 20px;
    }

    &__container {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color-white);
        font-size: 16px;
        width: 90%;
        padding: 20px 20px 40px;
        border-radius: 10px;
    }

    &__wrapper {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        align-items: center;
        column-gap: 10px;
        row-gap: 20px;
    }

    &__field-name {
        font-weight: 500;
    }

    &__delete-button {
        background-color: var(--color-candy-pink);
        border: 1px solid var(--color-candy-pink);

        &:hover {
            color: var(--color-candy-pink);
        }
    }

    &__update-button,
    &__delete-button {
        width: 100%;
        grid-column: 1 / -1;
    }

    &__update-button {
        margin-top: 20px;
    }
}
</style>