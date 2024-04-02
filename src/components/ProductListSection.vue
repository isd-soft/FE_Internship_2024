<template>
    <section class="main__section section product-list-section">
        <div class="product-list-section__container container">
            <h2 class="product-list-section__title">
                Our Products
            </h2>

            <GenericList :items="productList" :listTag="'ul'" :isVertical="false">
                <ProductCard></ProductCard>
            </GenericList>
        </div>
    </section>
</template>

<script setup>
import GenericList from './generics/GenericList.vue';
import ProductCard from './ProductCard.vue';

const productList = [
    { imageSrc: 'https://via.placeholder.com/381x480/CCCCCC/FFFFFF?text=Placeholder+Image', title: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, productType: 'stock' },
    { imageSrc: 'https://via.placeholder.com/381x480/CCCCCC/FFFFFF?text=Placeholder+Image', title: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, productType: 'stock' },
    { imageSrc: 'https://via.placeholder.com/381x480/CCCCCC/FFFFFF?text=Placeholder+Image', title: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, productType: 'stock' },
    { imageSrc: 'https://via.placeholder.com/381x480/CCCCCC/FFFFFF?text=Placeholder+Image', title: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, productType: 'stock' },
    { imageSrc: 'https://via.placeholder.com/381x480/CCCCCC/FFFFFF?text=Placeholder+Image', title: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, productType: 'stock' },
    { imageSrc: 'https://via.placeholder.com/381x480/CCCCCC/FFFFFF?text=Placeholder+Image', title: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, productType: 'stock' },
    { imageSrc: 'https://via.placeholder.com/381x480/CCCCCC/FFFFFF?text=Placeholder+Image', title: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, productType: 'stock' },
    { imageSrc: 'https://via.placeholder.com/381x480/CCCCCC/FFFFFF?text=Placeholder+Image', title: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, productType: 'stock' },
]

</script>