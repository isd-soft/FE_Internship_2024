<script setup>
import EditIcon from '../../assets/icons/EditIcon.svg'
import TrashIcon from '../../assets/icons/TrashIcon.svg'
import { useModal } from 'vue-final-modal'
import AdminProductModal from './AdminProductModal.vue'

const props = defineProps({
    headingFlag: Boolean,
    imageUrl: String,
    id: String,
    description: String,
    name: String,
    price: String,
    stock: Number,
    discount: String,
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
</script>

<template>
    <div v-if="headingFlag" class="admin-product-list__heading admin-product-heading text-sm">
        <span v-for="category in categoryList" class="admin-product-heading__category">
            {{ category }}
        </span>
    </div>

    <div v-else class="admin-product-list__card admin-product-card">
        <img class="admin-product-card__image" :src="imageUrl" :alt="name" />

        <span class="text-sm admin-product-card__code">
            {{ code }}
        </span>

        <span class="text-sm admin-product-card__name">
            {{ name }}
        </span>

        <span class="text-sm admin-product-card__price">
            {{ price }} USD
        </span>

        <span class="text-sm admin-product-card__stock">
            {{ stock }}
        </span>

        <span class="text-sm admin-product-card__discount">
            {{ discount ? discount : 'N/A' }}
        </span>

        <button @click="open" class="text-sm admin-product-card__patch-button">
            <EditIcon width="2.4rem" height="2.4rem" />
        </button>

        <button class="text-sm admin-product-card__delete-button">
            <TrashIcon width="2.4rem" height="2.4rem" />
        </button>
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
    border-radius: 1rem;
    padding: 1rem;

    &__image {
        width: 7.5rem;
        height: 7.5rem;
    }
}
</style>