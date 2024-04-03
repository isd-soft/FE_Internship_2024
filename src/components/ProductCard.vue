<template>
    <div class="product-list-section__card product-card" @mouseenter="hoverFlag = true" @mouseleave="hoverFlag = false">
        <img :src="imageSrc" :alt="title">

        <div class="product-card__text-wrapper">
            <h3 class="product-card__title">
                {{ title }}
            </h3>

            <span class="product-card__descpription">
                {{ description }}
            </span>

            <div class="product-card__price-wrapper">
                <span class="product-card__price">
                    {{ convertPrice(price) }}
                </span>

                <span class="product-card__old-price">
                    {{ convertPrice(oldPrice) }}
                </span>
            </div>
        </div>

        <ProductCardLabel :type="productType" />

        <div v-show="hoverFlag" class="product-card__overlay">
            <button class="product-card__button">Add to cart</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import ProductCardLabel from './ProductCardLabel.vue'

const hoverFlag = ref(false);

const props = defineProps({
    imageSrc: String,
    title: String,
    description: String,
    price: Number,
    oldPrice: {
        type: Number,
        required: false
    },
    productType: {
        type: String,
        validator: (value) => ['discount', 'stock', 'new'].includes(value)
    }
})

const convertPrice = (value) => value ? "Rp " + value.toLocaleString('en-US').replace(/,/g, '.') : ''
</script>

<style lang="scss" scoped>
.product-card {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;

    &__image {
        width: 100%;
        height: 301px;
        margin-bottom: 16px;
    }

    &__text-wrapper {
        display: flex;
        flex-direction: column;
        row-gap: 8px;
        padding: 16px;
        padding-bottom: 30px;
        background-color: var(--color-ghost-white);
    }

    &__title {
        font-weight: 600;
        font-size: 24px;
        line-height: 120%;
        color: var(--color-gray-2);
    }

    &__description {
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        color: var(--color-gray-3);
    }

    &__price-wrapper {
        display: flex;
        align-items: center;
        column-gap: 16px;
    }

    &__price {
        font-weight: 600;
        font-size: 20px;
        line-height: 150%;
        color: var(--color-gray-2);
    }

    &__old-price {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        text-decoration-line: line-through;
        color: var(--color-gray-5);
    }

    &__overlay {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background-color: var(--color-gray-3);
        opacity: 72%;
    }

    &__button {
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
        color: var(--color-bronze);
        padding: 12px 52px 12px 59px;
        background-color: var(--color-white);
    }
}
</style>