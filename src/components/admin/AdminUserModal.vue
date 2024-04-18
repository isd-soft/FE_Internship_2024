<script setup>
import { VueFinalModal, useVfm } from 'vue-final-modal'

const vfm = useVfm()
const closeModal = () => vfm.closeAll(vfm.openedModals)

const props = defineProps({
    username: String,
    email: String,
    firstName: String,
    lastName: String,
    createdAt: String,
    updatedAt: String,
    updateUser: Function,
    deleteUser: Function
})

const { username, email, firstName, lastName, createdAt, updatedAt } = props

</script>

<template>
    <VueFinalModal class="admin-user-modal" content-class="admin-user-modal__container" overlay-transition="vfm-fade"
        content-transition="vfm-fade" @clickOutside="$emit('close')">
        <section>
            <h3>{{ username }}</h3>
            <h3>{{ email }}</h3>
            <h5>{{ firstName }}</h5>
            <h5>{{ lastName }}</h5>
            <h5>{{ createdAt }}</h5>
            <h5>{{ updatedAt }}</h5>
        </section>
    </VueFinalModal>
</template>

<style lang="scss">
.admin-user-modal {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-warm-ivory);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);

    &__container {
        border: 1px solid deeppink;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>