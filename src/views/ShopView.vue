<script setup>
import BannerSection from '@/components/shared/BannerSection.vue';
import AdvantageSection from '@/components/shared/AdvantageSection.vue';
import GenericList from '@/components/generics/GenericList.vue';
import ProductCard from '@/components/shared/ProductCard.vue';
import { ref } from 'vue';
import { useWindowSize } from '@vueuse/core';
import { computed } from 'vue'
import { useProductStore } from '@/stores/productStore.js'

const { width } = useWindowSize();

const productStore = useProductStore()

const productList = computed(() => {
    return Array.from(productStore.productMap.values())
})

const currentPage = ref(1);

const pageNumber = Math.ceil(productList.value.length / 16);

const getButtonNumberList = () => {
    let value = currentPage.value - 1

    if (currentPage.value > pageNumber - 2) {
        value = pageNumber - 2
    }

    if (currentPage.value === 1) {
        value = 1
    }

    if (pageNumber < 3) {
        return Array.from({ length: pageNumber }, (_, index) => index + 1)
    }

    if (width.value < 769) {
        return [currentPage.value]
    }

    return Array.from({ length: 3 }, (_, index) => value + index)
}

const pageList = (pageNumber) => {
    const lowerBound = 16 * (pageNumber - 1)

    const upperBound = productList.value.length > 16 * pageNumber ? 16 * pageNumber : productList.value.length

    return productList.value.slice(lowerBound, upperBound)
}

const nextPage = () => (currentPage.value < productList.value.length / 16) && currentPage.value++


const prevPage = () => currentPage.value > 1 && currentPage.value--

const goToPage = (number) => currentPage.value = number;

const nextActive = () => currentPage.value < pageNumber ? '' : '--disabled';

const prevActive = () => currentPage.value > 1 ? '' : '--disabled';

const pageActive = (number) => {
    return currentPage.value === number ? '--active' : '';
}
</script>

<template>
    <BannerSection title="Shop" />
    <section class="main__section section shop-section">
        <GenericList :items="pageList(currentPage)" key="id" customClass="shop-section__list"
            itemClass="shop-section__list-item">
            <template v-slot="{ item }">
                <ProductCard v-bind="item" />
            </template>
        </GenericList>
        <div class="shop-section__button-wrapper">
            <button :class="['shop-section__button', 'shop-section__button' + prevActive()]"
                @click="prevPage">Prev</button>
            <button :class="['shop-section__button', 'shop-section__button' + pageActive(number)]"
                v-for="number in getButtonNumberList()" :key="number" @click="goToPage(number)">{{ number }}</button>
            <button :class="['shop-section__button', 'shop-section__button' + nextActive()]"
                @click="nextPage">Next</button>
        </div>
    </section>
    <AdvantageSection />
</template>

<style lang="scss" scoped>
.shop-section {
    &__list {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        column-gap: 3.2rem;
        row-gap: 4rem;
        padding: 2rem 10rem;
        margin-bottom: 3rem;
    }

    &__button-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 4rem;
    }

    &__button {
        background-color: var(--color-linen);
        color: (--color-black);
        border-radius: 10px;
        font-size: 2rem;
        padding: 0 2.5rem;
        min-width: 6rem;
        height: 6rem;

        &:hover {
            background-color: var(--color-uc-gold);
            color: var(--color-white);
        }

        &:active {
            background-color: var(--color-linen);
            color: var(--color-black);
        }
    }

    &__button--disabled {
        visibility: hidden;
    }

    &__button--active {
        background-color: var(--color-uc-gold);
        color: var(--color-white);
    }
}

@media only screen and (max-width: 991px) {
    .shop-section {
        &__list {
            padding: 60px 40px;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            grid-template-rows: auto;
        }
    }
}

@media only screen and (max-width: 575px) {
    .shop-section {
        &__list {
            padding: 40px 20px;
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }
    }
}
</style>