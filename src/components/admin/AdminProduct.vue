<script setup>
import EditIcon from '../../assets/icons/EditIcon.svg'
import TrashIcon from '../../assets/icons/TrashIcon.svg'
import { useModal } from 'vue-final-modal'
import AdminProductModal from './AdminProductModal.vue'
import { useProductStore } from '../../stores/productStore';
import { useUserStore } from '../../stores/userStore';
import GenericToast from '../generics/GenericToast.vue';
import { ref, watch } from 'vue';

const props = defineProps({
    headingFlag: Boolean,
    imageUrl: String,
    id: String,
    description: String,
    name: String,
    price: Number,
    stock: Number,
    discount: Number,
    code: String,
    rating: Number,
    isNew: Boolean,
    createdAt: String,
    updatedAt: String
})

const { open } = useModal({
    component: AdminProductModal,
    attrs: {
        ...props
    }
})

const categoryList = [
    'Image',
    'Code',
    'Name',
    'Price',
    'Stock',
    'Discount',
    'Actions'
]

const productStore = useProductStore()
const token = useUserStore().token.key

const deletionFlag = ref(false)
const toastPreset = ref({})

watch(deletionFlag, () => deletionFlag ? productStore.initStore() : null)

const handleDeletion = () => {
    if (deletionFlag.value) deletionFlag.value = false

    confirm('Are you sure you want to delete this product?')
        ? productStore.deleteProductFromServer(props.id, token)
            .then(result =>
                toastPreset.value = result
                    ? { message: 'Product deleted successfully', type: 'success' }
                    : { message: 'Error while deleting the product', type: 'error' }
            )
            .catch(error =>
                toastPreset.value = { message: 'Error: ' + error, type: 'error' }
            )
            .finally(() =>
                deletionFlag.value = true
            )
        : null
}

</script>

<template>
    <div v-if="headingFlag" class="admin-product-list__heading admin-product-heading text-sm">
        <span v-for="category in categoryList" class="admin-product-heading__category">
            {{ category }}
        </span>
    </div>

    <div v-else class="admin-product-list__card admin-product-card">
        <img class="admin-product-card__image" :src="imageUrl" :alt="name" />

        <span v-for="(category, index) of [code, name, `${price} USD`, stock, discount ? discount : 'N/A']"
            :class="`text-sm admin-product-card__${['code', 'name', 'price', 'stock', 'discount'][index]}`">
            {{ category }}
        </span>

        <button @click="open" class="text-sm admin-product-card__patch-button">
            <EditIcon width="2.4rem" height="2.4rem" />
        </button>

        <button @click="handleDeletion" class="text-sm admin-product-card__delete-button">
            <TrashIcon width="2.4rem" height="2.4rem" />
        </button>

        <GenericToast v-if="deletionFlag" v-bind="toastPreset" />
    </div>
</template>

<style lang="scss" scoped>
.admin-product-card,
.admin-product-heading {
    grid-column: span 8;
    display: inherit;
    grid-template-columns: inherit;
}

.admin-product-heading__category,
.admin-product-card>* {
    justify-self: center;
    align-self: center;
    display: block;
    overflow: hidden;
    text-align: center;
}

.admin-product-heading {
    background-color: var(--color-linen);
    padding: 2rem 1rem;

    &__category:last-child {
        grid-column: span 2;
    }
}

.admin-product-card {
    border: 1px solid var(--color-uc-gold);
    padding: 1rem;

    &__image {
        width: 7.5rem;
        height: 7.5rem;
    }
}
</style>