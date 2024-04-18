<script setup>
import { VueFinalModal, useVfm } from 'vue-final-modal'

const vfm = useVfm()
const closeModal = () => vfm.closeAll(vfm.openedModals)

const props = defineProps({
    user: Object,
    updateRole: Function,
    deleteUser: Function,
})

const { user, updateRole, deleteUser } = props

</script>

<template>
    <VueFinalModal class="admin-user-modal" content-class="admin-user-modal__container" overlay-transition="vfm-fade"
        content-transition="vfm-fade" @clickOutside="$emit('close')">
        <section>
            <h3>{{ user.username }}</h3>
            <h3>{{ user.email }}</h3>
            <h5>{{ user.firstName }}</h5>
            <h5>{{ user.lastName }}</h5>
            <h5>{{ user.createdAt }}</h5>
            <h5>{{ user.updatedAt }}</h5>
        </section>
    </VueFinalModal>
</template>

<style lang="scss">
.admin-user-modal {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;

    &__container {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>