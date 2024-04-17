<script setup>
import { useProductStore } from '@/stores/productStore';
import { computed } from 'vue';
import { useModal } from 'vue-final-modal'
import GenericList from '../generics/GenericList.vue';
import AdminProduct from './AdminProduct.vue';
import AdminProductModal from './AdminProductModal.vue';

const productStore = useProductStore()
productStore.initStore()

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
            ADD PRODUCT
        </button>
    </section>
</template>

<style lang="scss" scoped>
.admin-product-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    padding: 3rem 5rem 3rem 13rem;

    &__add-button {
        color: var(--color-white);
        width: fit-content;
        padding: 0.75rem 5rem;
        background-color: var(--color-uc-gold);
    }
}

.admin-product-list {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 2rem;

    & :deep(.admin-product-list__item) {
        grid-column: span 8;
        display: inherit;
        grid-template-columns: inherit;
    }
}
</style>