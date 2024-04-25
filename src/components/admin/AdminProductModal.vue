<script setup>
import { VueFinalModal, useVfm } from 'vue-final-modal'
import AdminProductInput from './AdminProductInput.vue'
import { useForm } from 'vee-validate'
import * as Yup from 'yup'
import CrossIcon from '../../assets/icons/CrossIcon.svg'
import { useUserStore } from '../../stores/userStore'
import { createToast } from '../generics/GenericToast.vue'
import { useProductStore } from '../../stores/productStore'


const vfm = useVfm()
const closeModal = () => vfm.closeAll(vfm.openedModals)

const props = defineProps({
    name: String,
    code: String,
    description: String,
    price: String,
    imageUrl: String,
    stock: Number,
    id: String,
    discount: String,
    isNew: Boolean,
    createdAt: String,
    updatedAt: String,
    headingFlag: Boolean,
    newProductFlag: Boolean
})

const { createdAt, updatedAt, ...initialValues } = props

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    code: Yup.string().required('Code is required').matches(/^[A-Z0-9]+$/, 'Code must contain only uppercase alphanumeric characters'),
    description: Yup.string().required('Description is required'),
    imageUrl: Yup.string().required('Image URL is required'),
    price: Yup.string().required('Price is required').matches(/^\d+(\.\d{2})?$/, 'Price must be in NN.NN format'),
    stock: Yup.number().required('Stock is required').typeError('Discount must be an integer').integer().min(0, 'Stock must be a positive integer or 0'),
    discount: Yup.number().required('Discount is required').typeError('Discount must be a number').integer().min(0, 'Discount must be a positive integer').max(100, 'Discount cannot be more than 100'),
})

const inputPresetList = [
    { title: 'Name', placeholder: '...', name: 'name' },
    { title: 'Code', placeholder: '...', name: 'code' },
    { title: 'Description', placeholder: '...', name: 'description', tag: 'textarea' },
    { title: 'Image URL', placeholder: '...', name: 'imageUrl' },
    { title: 'Price', placeholder: '...', name: 'price' },
    { title: 'Stock', placeholder: '...', name: 'stock' },
    { title: 'Discount', placeholder: '...', name: 'discount' },
    { title: 'New', placeholder: '...', name: 'isNew', type: 'checkbox', checkboxValue: props.newProductFlag ? true : props.isNew },
]

const { handleSubmit, isSubmitting, setValues } = useForm({
    validationSchema: validationSchema,
    initialValues: props.newProductFlag ? { isNew: true } : initialValues
})

const productStore = useProductStore()
const token = useUserStore().token.key

const reset = () => setValues(initialValues)

const submit = handleSubmit(values => {

    const { updateProductToServer, addProductToServer } = productStore;

    const action = props.newProductFlag ? addProductToServer : updateProductToServer;

    action(values, token)
        .then(response =>
            response
                ? createToast(`Product ${props.newProductFlag ? 'added' : 'modified'} successfully!`, 'success')
                : createToast(`Failed to ${props.newProductFlag ? 'add' : 'modify'} the product!`, 'error')
        )
        .catch(error => createToast(`Failed to ${props.newProductFlag ? 'add' : 'modify'} the product: ${error}`, 'error')
        )
        .finally(() => {
            if (props.newProductFlag) vfm.closeAll(vfm.openedModals)
        })
})

const formatDate = (date) => new Date(date).toLocaleDateString('en-GB').replace(/\//g, '.')

</script>

<template>
    <VueFinalModal contentClass="admin-product-modal__container" class="admin-product-modal__modal admin-product-modal"
        overlayTransition="vfm-fade" contentTransition="vfm-fade" @clickOutside="$emit('close')">

        <img v-if="!newProductFlag" class="admin-product-modal__image" :src="imageUrl" :alt="name" />

        <form v-if="!newProductFlag" class="admin-product-modal__form admin-product-form" @submit="submit"
            @reset="reset">
            <div class=" admin-product-form__metadata-wrapper">
                <h2 class="admin-product-form__title">
                    {{ name }}
                </h2>

                <div class="admin-product-form__dates">
                    <span class="admin-product-form__info text-xs">
                        Created at: {{ formatDate(createdAt) }}
                    </span>

                    <span class="admin-product-form__info text-xs">
                        Last update: {{ formatDate(updatedAt) }}
                    </span>
                </div>
            </div>

            <div class="admin-product-form__input-wrapper">
                <AdminProductInput v-for="(input, index) of inputPresetList" :key="`${name}_${index}`" v-bind="input" />
            </div>

            <div class="admin-product-form__button-wrapper">
                <button :disabled="isSubmitting" type="submit"
                    class="primary-button admin-product-form__submit-button text-sm">
                    Apply
                </button>

                <button :disabled="isSubmitting" type="button" @click="reset"
                    class="secondary-button admin-product-form__reset-button text-sm">
                    Reset
                </button>
            </div>
        </form>

        <form v-if="newProductFlag" class="admin-product-modal__form-new admin-product-form admin-product-form--new"
            @submit="submit">
            <h2 class="primary-button admin-product-form__title admin-product-form__title--new text-3xl">
                New product
            </h2>

            <div class="admin-product-form__input-wrapper">
                <AdminProductInput v-for="(input, index) of inputPresetList" :key="`${name}_${index}`" v-bind="input" />
            </div>

            <button :disabled="isSubmitting" type="submit"
                class="secondary-button admin-product-form__submit-button admin-product-form__submit-button--new text-sm">
                Add
            </button>

        </form>

        <button type="button" class="admin-product-modal__close-button" @click="closeModal">
            <CrossIcon />
        </button>

    </VueFinalModal>
</template>

<style lang="scss">
.admin-product-modal {
    background-color: var(--color-warm-ivory);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);

    &__container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        background-color: var(--color-white);
        display: flex;
        border-radius: 10px;
    }

    &__close-button {
        position: relative;
        top: 2rem;
        right: 2rem;
        width: 40px;
        height: 40px;
    }

    &__form {
        width: 50%;
        padding: 4rem 1rem 4rem 4rem;
    }

    &__image {
        width: 50%;
        border-radius: 10px 0 0 10px;
    }
}

.admin-product-form {
    display: flex;
    flex-direction: column;
    gap: 30px;

    &__metadata-wrapper {
        display: flex;
        flex-direction: column;
    }

    &__dates {
        display: flex;
        justify-content: space-between;
        width: 100%;
        color: var(--color-taupe-gray);
    }

    &__title {
        font-size: 30px;
        font-weight: 600;
    }

    &__input-wrapper {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        column-gap: 20px;
        row-gap: 20px;
    }

    &__button-wrapper {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        column-gap: 20px;
        width: 100%;
    }

    &__submit-button,
    &__reset-button {
        width: 100%;
    }
}

@media only screen and (max-width: 991px) {
    .admin-product-modal {
        &__container {
            flex-direction: column;
            align-items: center;
        }

        &__form {
            width: 100%;
            padding: 2rem;
        }

        &__image {
            width: 100%;
            border-radius: 10px 10px 0 0;
        }

        &__close-button {
            position: absolute;

            & svg {
                fill: var(--color-white);
            }
        }
    }
}

@media only screen and (max-width: 575px) {
    .admin-product-modal {
        &__container {
            width: 100%;
            height: 100%;
            border-radius: 0;
        }

        &__image {
            border-radius: 0;
        }
    }
}
</style>