<script setup>
import { VueFinalModal, useVfm } from 'vue-final-modal'
import AdminProductInput from './AdminProductInput.vue';
import { useForm } from 'vee-validate';
import * as Yup from 'yup';

const vfm = useVfm()

const closeModal = () => vfm.closeAll(vfm.openedModals)

const formatDate = (date) => new Date(date).toLocaleDateString('en-GB').replace(/\//g, '.')

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

const schema = Yup.object().shape({
    name: Yup.string().trim().required('Name is required').min(1, 'Name cannot be empty'),
    code: Yup.string().trim().required('Code is required').matches(/^[A-Z0-9]{1,8}$/, 'Code must be up to 8 characters long and contain only uppercase alphanumeric characters'),
    description: Yup.string().trim().required('Description is required').min(1, 'Description cannot be empty'),
    imageUrl: Yup.string().trim().required('Image URL is required').min(1, 'Image URL cannot be empty'),
    price: Yup.string().trim().required('Price is required').matches(/^\d+(\.\d{2})?$/, 'Price must be in NN.NN format'),
    stock: Yup.number().integer().required('Stock is required').min(0, 'Stock must be a positive integer or 0'),
    discount: Yup.number().integer().required('Discount is required').min(0, 'Discount must be a positive integer').max(100, 'Discount cannot be more than 100'),
    isNew: Yup.boolean()
});

const { defineField, errors, handleSubmit,resetForm } = useForm({
    validationSchema: schema
})

const inputPresetList = [
    { title: 'Name', placeholder: '...', name: 'name' },
    { title: 'Code', placeholder: '...', name: 'code' },
    { title: 'Description', placeholder: '...', name: 'description', tag: 'textarea' },
    { title: 'Image URL', placeholder: '...', name: 'imageUrl' },
    { title: 'Price', placeholder: '...', name: 'price', isNumeric: true },
    { title: 'Stock', placeholder: '...', name: 'stock', isNumeric: true },
    { title: 'Discount', placeholder: '...', name: 'discount', isNumeric: true },
    { title: 'Is New', placeholder: '...', name: 'isNew' },
].map(i => { return { ...i, value: props[i.name] } })
</script>

<template>
    <VueFinalModal contentClass="admin-product-modal__container" class="admin-product-card__modal admin-product-modal"
        overlayTransition="vfm-fade" contentTransition="vfm-fade" @clickOutside="$emit('close')">

        <div class="admin-product-modal__image-wrapper">

            <h3 class="admin-product-modal__image-title text-md">
                Image Preview:
            </h3>

            <img class="admin-product-modal__image" :src="imageUrl" :alt="name" />
        </div>


        <form class="admin-product-modal__form admin-product-form">
            <span class="admin-product-card__info text-sm">
                ID: {{ id }}
            </span>

            <span class="admin-product-card__info text-sm">
                Created At: {{ formatDate(createdAt) }}
            </span>

            <span class="admin-product-card__info text-sm">
                Last Update: {{ formatDate(updatedAt) }}
            </span>

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
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        width: fit-content;
        padding: 5rem;
        background: var(--color-white);
    }

    &__image-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }

    &__image-title {
        color: var(--color-black);
    }

    &__image {
        width: 40rem;
        aspect-ratio: 1/1;
    }
}
</style>