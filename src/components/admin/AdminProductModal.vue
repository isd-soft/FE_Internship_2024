<script setup>
import { VueFinalModal, useVfm } from 'vue-final-modal'
import AdminProductInput from './AdminProductInput.vue'
import { useForm } from 'vee-validate'
import * as Yup from 'yup'
import CrossIcon from '../../assets/icons/CrossIcon.svg'
import { useUserStore } from '../../stores/userStore'
import {createToast} from '../generics/GenericToast.vue'
import { useProductStore } from '../../stores/productStore'
import { ref } from 'vue'


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

const { createdAt, updatedAt, headingFlag, ...initialValues } = props

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
                ? createToast(`Product ${props.newProductFlag ? 'added' : 'modified'} successfully!`, 'success' )
                : createToast( `Failed to ${props.newProductFlag ? 'add' : 'modify'} the product!`, 'error' )
        )
        .catch(error => createToast( `Failed to ${props.newProductFlag ? 'add' : 'modify'} the product: ${error}`,'error' )
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

                <span class="admin-product-form__info text-sm">
                    Created at: {{ formatDate(createdAt) }}
                </span>

                <span class="admin-product-form__info text-sm">
                    Last update: {{ formatDate(updatedAt) }}
                </span>
            </div>

            <div class="admin-product-form__input-wrapper">
                <AdminProductInput v-for="(input, index) of inputPresetList" :key="`${name}_${index}`" v-bind="input" />
            </div>

            <div class="admin-product-form__button-wrapper">
                <button :disabled="isSubmitting" type="submit" class="admin-product-form__submit-button text-sm">
                    Apply
                </button>

                <button :disabled="isSubmitting" type="button" @click="reset"
                    class="admin-product-form__reset-button text-sm">
                    Reset
                </button>
            </div>
        </form>

        <form v-if="newProductFlag" class="admin-product-modal__form-new admin-product-form admin-product-form--new"
            @submit="submit">
            <h2 class="admin-product-form__title admin-product-form__title--new text-3xl">
                New product
            </h2>

            <div class="admin-product-form__input-wrapper">
                <AdminProductInput v-for="(input, index) of inputPresetList" :key="`${name}_${index}`" v-bind="input" />
            </div>

            <button :disabled="isSubmitting" type="submit"
                class="admin-product-form__submit-button admin-product-form__submit-button--new text-sm">
                Add
            </button>

        </form>



        <button class="admin-product-modal__close-button" @click="closeModal">
            <CrossIcon width="2.86rem" height="2.86rem" />
        </button>

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
        background: var(--color-white);
    }

    &__image {
        width: 55rem;
        aspect-ratio: 1/1;
        object-fit: cover;
    }

    &__close-button {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        z-index: 10;
    }
}

.admin-product-form {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    justify-content: space-between;
    width: 50%;

    &--new {
        padding: 4rem 8rem;
    }

    &__metadata-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }

    &__title {
        font-size: 4rem;
        font-weight: 400;

        &--new {
            text-align: center;
            margin-bottom: 2rem;
        }
    }

    &__info {
        color: var(--color-taupe-gray);
    }

    &__input-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    &__button-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2.5rem;
    }

    &__submit-button,
    &__reset-button {
        padding: 0.75rem 2.5rem;
        border-radius: 10px;
        font-weight: 500;
    }

    &__submit-button {
        background-color: var(--color-uc-gold);
        color: var(--color-white);
        justify-self: flex-end;

        &--new {
            width: fit-content;
            padding: 0.75rem 5rem;
            margin: 0 auto;
        }
    }

    &__reset-button {
        background-color: transparent;
        color: var(--color-uc-gold);
        border: 1px solid var(--color-uc-gold);
        justify-self: flex-start;
    }
}

@media only screen and (max-width: 991px) {
    .admin-product-modal {
        &__container {
            flex-direction: column;
            align-items: center;
        }

        &__image {
            width: 100%;
            aspect-ratio: 2/1;
        }
    }

    .admin-product-form {
        width: 100%;

        &__metadata-wrapper {
            align-items: center;
            margin-bottom: 2rem;
        }

        &__input-wrapper {
            grid-template-columns: 1fr;
        }
    }
}

@media only screen and (max-width: 575px) {
    .admin-product-modal {
        &__container {
            width: 80%
        }

        &__image {
            display: none;
        }
    }

    .admin-product-form {
        &__title {
            max-width: 70%;
            text-align: center;
            font-size: 3.2rem;
        }

        &__button-wrapper {
            flex-direction: column;
            gap: 1.25rem;
        }

        &__submit-button,
        &__reset-button {
            width: 100%;
        }
    }
}
</style>