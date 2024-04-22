<script setup>
import { useProductStore } from '@/stores/productStore';
import { computed } from 'vue';
import { useModal } from 'vue-final-modal'
import GenericList from '../components/generics/GenericList.vue';
import AdminProduct from '../components/admin/AdminProduct.vue';
import AdminProductModal from '../components/admin/AdminProductModal.vue';

const productStore = useProductStore()

const productList = computed(() => Array.from(productStore.productMap).map(product => product[1]))

const { open } = useModal({
    component: AdminProductModal,
    attrs: {
        newProductFlag: true
    }
})

</script>

<template>
    <section class="main__section admin-product-section">
        <h1 class="admin-product-section__title text-5xl">
            Products
        </h1>

        <GenericList :items="[{ headingFlag: true }, ...productList]"
            customClass="admin-product-section__list admin-product-list" itemClass="admin-product-list__item">
            <template v-slot="{ item }">
                <AdminProduct v-bind="item" />
            </template>
        </GenericList>

        <button class="admin-product-section__add-button text-lg" @click="open">
            Add Product
        </button>
    </section>
</template>

<style lang="scss" scoped>
.admin-product-section {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding: 5rem 3rem 5rem 13rem;

    &__add-button {
        font-weight: 700;
        color: var(--color-white);
        align-self: center;
        width: fit-content;
        padding: 0.75rem 5rem;
        background-color: var(--color-uc-gold);
        border-radius: 10px;
    }
}

.admin-product-list {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2.5rem;

    & :deep(.admin-product-list__item) {
        grid-column: span 8;
        display: inherit;
        grid-template-columns: inherit;
    }
}

@media only screen and (max-width: 991px) {
    .admin-product-list {
        grid-template-columns: repeat(5, 1fr);

        & :deep(.admin-product-list__item) {
            grid-column: span 6;
        }
    }
}

@media only screen and (max-width: 575px) {
    .admin-product-section {
        align-items: stretch;
    }

    .admin-product-list {
        grid-template-columns: repeat(3, 1fr);

        & :deep(.admin-product-list__item) {
            grid-column: span 4;
        }
    }

    .admin-product-section__add-button {
        width: 100%;
    }
}
</style>