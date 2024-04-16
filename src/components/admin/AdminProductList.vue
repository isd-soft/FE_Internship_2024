<script setup>
import { useProductStore } from '@/stores/productStore';
import { computed } from 'vue';
import GenericList from '../generics/GenericList.vue';
import AdminProduct from './AdminProduct.vue';

const store = useProductStore()
const productList = computed(() => Array.from(store.productMap).map(product => product[1]))

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
    </section>
</template>

<style lang="scss" scoped>
.admin-product-section {
    padding: 3rem 5rem;

    &__title {
        margin-bottom: 5rem;
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