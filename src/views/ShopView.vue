<script setup>
import BannerSection from '@/components/shared/BannerSection.vue';
import AdvantageSection from '@/components/shared/AdvantageSection.vue';
import GenericList from '@/components/generics/GenericList.vue';
import ProductCard from '@/components/shared/ProductCard.vue';
import { ref } from 'vue';

const objTemplate = {
  imageSrc: 'https://via.placeholder.com/381x480/CCCCCC/FFFFFF?text=Placeholder+Image',
  title: 'Syltherine',
  description: 'Stylish cafe chair',
  price: 250,
  oldPrice: 350,
  productType: 'stock',
  value: 10
};

const mockArray = Array.from({ length: 90 }, (_, index) => ({
    id: index + 1,
  ...objTemplate,
}));

const currentPage = ref(1);

const pageNumber = Math.ceil(mockArray.length / 16);

const getButtonNumberList = () => Array.from({ length: 3 }, (_, index) => (currentPage.value > pageNumber - 2 ? pageNumber - 2 : currentPage.value === 1 ? 1 : currentPage.value - 1) + index)

const pageList = (pageNumber) => mockArray.slice(16 * (pageNumber - 1), mockArray.length > 16 * pageNumber ? 16 * pageNumber : mockArray.length);

const nextPage = () => (currentPage.value < mockArray.length / 16) && currentPage.value++

const prevPage = () => currentPage.value > 1 && currentPage.value--

const goToPage = (number) => currentPage.value = number;

const nextActive = () => currentPage.value < pageNumber ? '': '--disabled';

const prevActive = () => currentPage.value > 1 ? '' : '--disabled';

const pageActive = (number) => currentPage.value == number ? '--active' : '';

console.log(pageList(pageNumber));
</script>

<template>
    <BannerSection title="Shop"/>
    <section class="main_section section shop-section">
        <GenericList :items="pageList(currentPage)" key="id" customClass="shop-section__list" itemClass="shop-section__list-item">
            <template v-slot="{item}">
                <ProductCard v-bind="item"/>
            </template>
        </GenericList>
        <div class="shop-section__button-wrapper">
            <button :class="['shop-section__button', 'shop-section__button' + prevActive()]" @click="prevPage">Prev</button>
            <button :class="['shop-section__button', 'shop-section__button' + pageActive(number)]" v-for="number in getButtonNumberList()" :key="number" @click="goToPage(number)">{{ number }}</button>
            <button :class="['shop-section__button', 'shop-section__button' + nextActive()]" @click="nextPage">Next</button>
        </div>
        {{ currentPage }}
    </section>
    <AdvantageSection/>
</template>

<style lang="scss" scoped>
.shop-section {
    &__list {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        column-gap: 3.2rem;
        grid-template-rows: repeat(4, minmax(0, 1fr));
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
</style>