<script setup>
import { VueFinalModal, useVfm } from 'vue-final-modal'
import AdminProductInput from './AdminProductInput.vue';

const vfm = useVfm()

const closeModal = () => vfm.closeAll(vfm.openedModals)

const formatDate = (date) => new Date(date).toLocaleDateString('en-GB').replace(/\//g, '.');

const props = defineProps({
    name: String,
    code: String,
    description: String,
    price: String,
    imageUrl: String,
    stock: Number,
    id: String,
    discount: String,
    rating: Number,
    isNew: Boolean,
    createdAt: String,
    updatedAt: String,
    headingFlag: Boolean,
})

const inputPresetList = [
    { title: 'Name', placeholder: '...', name: 'name' },
    { title: 'Code', placeholder: '...', name: 'code' },
    { title: 'Description', placeholder: '...', name: 'description', tag: 'textarea' },
    { title: 'Image URL', placeholder: '...', name: 'imageUrl' },
    { title: 'Price', placeholder: '...', name: 'price', isNumeric: true },
    { title: 'Stock', placeholder: '...', name: 'stock', isNumeric: true },
    { title: 'Rating', placeholder: '...', name: 'rating', isNumeric: true },
    { title: 'Discount', placeholder: '...', name: 'discount', isNumeric: true },
    { title: 'Is New', placeholder: '...', name: 'isNew' },
].map(i => { return { ...i, value: props[i.name] } })
</script>

<template>
    <VueFinalModal contentClass="admin-product-modal__container" class="admin-product-card__modal admin-product-modal"
        overlayTransition="vfm-fade" contentTransition="vfm-fade" @clickOutside="$emit('close')">
        <img class="admin-product-modal__image" :src="imageUrl" :alt="name" />

        <span class="admin-product-card__info text-sm">
            ID: {{ id }}
        </span>

        <span class="admin-product-card__info text-sm">
            Created At: {{ formatDate(createdAt) }}
        </span>

        <span class="admin-product-card__info text-sm">
            Last Update: {{ formatDate(updatedAt) }}
        </span>

        <form class="admin-product-modal__form admin-product-form">
            <AdminProductInput v-for="(input, index) of inputPresetList" :key="`${name}_${index}`" v-bind="input" />
        </form>
    </VueFinalModal>
</template>

<style lang="scss">
.admin-product-modal {
    background-color: var(--color-warm-ivory);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);

    &__container {
        display: flex;
        background: var(--color-white);
    }
}
</style>