<script setup>
import BannerSection from '@/components/shared/BannerSection.vue';
import AdvantageSection from '@/components/shared/AdvantageSection.vue';
import GenericList from '@/components/generics/GenericList.vue';
import ProductCard from '@/components/shared/ProductCard.vue';
import FirstLastPagination from '@/components/shared/FirstLastPagination.vue';
import { ref } from 'vue';
import { useWindowSize } from '@vueuse/core';
import { computed } from 'vue'
import { useProductStore } from '@/stores/productStore.js'

const { width } = useWindowSize()

const productStore = useProductStore()

const productList = computed(() => {
    return Array.from(productStore.productMap.values())
})

const currentPage = ref(1)

const productOnPage = () => {

    if (width.value < 768) {
        return 8
    }

    if (width.value < 991) {
        return 12
    }

    if (width.value < 1300) {
        return 16
    }

    return 25
}

const pageNumber = () => Math.ceil(productList.value.length / productOnPage());

const pageList = (pageNumber) => {
    const lowerBound = productOnPage() * (pageNumber - 1)

    const upperBound = productList.value.length > productOnPage() * pageNumber ? productOnPage() * pageNumber : productList.value.length

    return productList.value.slice(lowerBound, upperBound)
}

const goToPage = (number) => {
    currentPage.value = number
}

const goLastPage = () => {
    currentPage.value = pageNumber()
}

const goFirstPage = () => {
    currentPage.value = 1
}
</script>

<template>
    <BannerSection title="Shop" />
    <section class="main__section section shop-section">
        <div class="shop-section__container container">
        <GenericList :items="pageList(currentPage)" key="id" customClass="shop-section__list"
            itemClass="shop-section__list-item">
            <template v-slot="{ item }">
                <ProductCard v-bind="item" />
            </template>
        </GenericList>
        <FirstLastPagination :pageNumber="pageNumber()" :buttonNumber="width > 575 ? 5 : 3" :currentPage="currentPage"
            :goToPage="goToPage" :goToFirstPage="goFirstPage" :goToLastPage="goLastPage" />
        </div>
    
        </section>
    <AdvantageSection />
</template>

<style lang="scss" scoped>
.shop-section {

    &__list {
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        grid-auto-rows: minmax(0, 1fr);
        gap: 3rem;
        // padding: 2rem 10rem;
        margin-bottom: 3rem;
    }

    &__button-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2.5rem;
    }

    &__button {
        background-color: var(--color-linen);
        color: (--color-black);
        border-radius: 10px;
        font-size: 1.6rem;
        padding: 0 1.5rem;
        min-width: 4.5rem;
        height: 4.5rem;

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
        min-width: 5rem;
        height: 5rem;
        background-color: var(--color-uc-gold);
        color: var(--color-white);
    }
}

@media only screen and (max-width: 1300px) {
    .shop-section {
        &__list {
            grid-template-columns: repeat(4, minmax(0, 1fr));

        }
    }
}

@media only screen and (max-width: 991px) {
    .shop-section {
        &__list {
            // padding: 60px 40px;
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    }
}

@media only screen and (max-width: 768px) {
    .shop-section {
        &__list {
            // padding: 60px 40px;
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

}

@media only screen and (max-width: 575px) {
    .shop-section {
        &__list {
            // padding: 40px 20px;
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }
    }
}
</style>