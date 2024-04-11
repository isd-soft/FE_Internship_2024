<script setup>
import GenericList from '../generics/GenericList.vue';
import AdminProduct from './AdminProduct.vue';

const mockProductList = [
    {
        headingFlag: true
    },
    {
        id: '123',
        imageSrc: 'https://via.placeholder.com/100x100/CCCCCC/FFFFFF?text=Placeholder+Image',
        name: 'Product Example',
        price: 300,
        stock: 69,
        discount: 13
    },
    {
        id: '123',
        imageSrc: 'https://via.placeholder.com/100x100/CCCCCC/FFFFFF?text=Placeholder+Image',
        name: 'Product Example',
        price: 300,
        stock: 69,
    },
    {
        id: '123',
        imageSrc: 'https://via.placeholder.com/100x100/CCCCCC/FFFFFF?text=Placeholder+Image',
        name: 'Product Example',
        price: 300,
        stock: 69,
        discount: 13
    },
    {
        id: '123',
        imageSrc: 'https://via.placeholder.com/100x100/CCCCCC/FFFFFF?text=Placeholder+Image',
        name: 'Product Example',
        price: 300,
        stock: 69,
    }
]


</script>

<template>
    <GenericList :items="mockProductList" customClass="main__admin-product-list admin-product-list"
        itemClass="admin-product-list__item">
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