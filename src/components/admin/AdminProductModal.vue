<script setup>
import { VueFinalModal, useVfm } from 'vue-final-modal'

const vfm = useVfm()

const closeModal = () => vfm.closeAll(vfm.openedModals)

</script>

<template>
    <VueFinalModal overlayTransition="vfm-fade" contentTransition="vfm-fade" @clickOutside="$emit('close')">
        <div>
            SCP SOSAT
        </div>
    </VueFinalModal>
</template>

<style lang="scss" scoped></style>