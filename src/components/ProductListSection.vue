<template>
    <section class="main__section section product-list-section">
        <div class="product-list-section__container container">
            <h2 class="product-list-section__title">
                Our Products
            </h2>

            <GenericList :items="productList" tag="ul" keyProp="id" customClass="my-custom-list"
                emptyStateMessage="No items available.">
                <template v-slot="{ item }">
                    <ProductCard v-bind="item" />
                </template>
            </GenericList>
        </div>
    </section>
</template>

<script setup>
import GenericList from './generics/GenericList.vue';
import ProductCard from './ProductCard.vue';

const productList = [
    { id: 1, imageSrc: 'https://via.placeholder.com/381x480/CCCCCC/FFFFFF?text=Placeholder+Image', title: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, productType: 'stock' },
    { id: 2, imageSrc: 'https://via.placeholder.com/381x480/CCCCCC/FFFFFF?text=Placeholder+Image', title: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, productType: 'stock' },
    { id: 3, imageSrc: 'https://via.placeholder.com/381x480/CCCCCC/FFFFFF?text=Placeholder+Image', title: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, productType: 'stock' },
    { id: 4, imageSrc: 'https://via.placeholder.com/381x480/CCCCCC/FFFFFF?text=Placeholder+Image', title: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, productType: 'stock' },
    { id: 5, imageSrc: 'https://via.placeholder.com/381x480/CCCCCC/FFFFFF?text=Placeholder+Image', title: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, productType: 'stock' },
    { id: 6, imageSrc: 'https://via.placeholder.com/381x480/CCCCCC/FFFFFF?text=Placeholder+Image', title: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, productType: 'stock' },
    { id: 7, imageSrc: 'https://via.placeholder.com/381x480/CCCCCC/FFFFFF?text=Placeholder+Image', title: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, productType: 'stock' },
    { id: 8, imageSrc: 'https://via.placeholder.com/381x480/CCCCCC/FFFFFF?text=Placeholder+Image', title: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, productType: 'stock' },
]
</script>
