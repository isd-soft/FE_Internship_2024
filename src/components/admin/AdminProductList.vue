<script setup>
import { useProductStore } from '@/stores/productStore';
import { computed } from 'vue';
import GenericList from '../generics/GenericList.vue';
import AdminProduct from './AdminProduct.vue';

const store = useProductStore()

const productList = computed(() => Array.from(store.productMap).map((product) => {
    const [_, productObj] = product;

    const { id, imageUrl, name, price, stock, discount } = productObj;

    return { id, imageUrl, name, price: parseInt(price), stock, discount: parseInt(discount) };
}));
</script>

<template>
    <GenericList :items="[{ headingFlag: true }, ...productList]"
        customClass="main__admin-product-list admin-product-list" itemClass="admin-product-list__item">
        <template v-slot="{ item }">
            <AdminProduct v-bind="item" />
        </template>
    </GenericList>
</template>

<style lang="scss" scoped>
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