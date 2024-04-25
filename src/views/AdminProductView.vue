<script setup>
import { useProductStore } from '@/stores/productStore';
import { computed, ref } from 'vue';
import { useModal } from 'vue-final-modal'
import GenericList from '../components/generics/GenericList.vue';
import AdminProduct from '../components/admin/AdminProduct.vue';
import AdminProductModal from '../components/admin/AdminProductModal.vue';
import FirstLastPagination from '@/components/shared/FirstLastPagination.vue';
import { useWindowSize } from '@vueuse/core';
import PlusIcon from '@/assets/icons/PlusIcon.svg';

const productStore = useProductStore()

const productList = computed(() => Array.from(productStore.productMap).map(product => product[1]))

const { open } = useModal({
    component: AdminProductModal,
    attrs: {
        newProductFlag: true
    }
})

const currentPage = ref(1)

const { width } = useWindowSize()

const getPageElements = (pageNumber) => {
    const lowerBound = 20 * (pageNumber - 1)
    const upperBound = productList.value.length > 20 * pageNumber ? 20 * pageNumber : productList.value.length
    return productList.value.slice(lowerBound, upperBound)
}

const getNumberOfPages = () => Math.ceil(productList.value.length / 20)

const goToPage = (number) => {
    currentPage.value = number
}

const goLastPage = () => {
    currentPage.value = getNumberOfPages()
}

const goFirstPage = () => {
    currentPage.value = 1
}

</script>

<template>
    <section class="main__section admin-product-section">
        <div class="admin-product-section__title-wrapper">
            <h1 class="admin-product-section__title text-xl">
                Products
            </h1>
            <button class="primary-button admin-product-section__add-button" @click="open">
                <PlusIcon /> Add
            </button>
        </div>

        <GenericList :items="[{ headingFlag: true }, ...getPageElements(currentPage)]" key="id"
            customClass="admin-product-section__list admin-product-list" itemClass="admin-product-list__item">
            <template v-slot="{ item }">
                <AdminProduct v-bind="item" />
            </template>
        </GenericList>

        <FirstLastPagination v-if="getNumberOfPages() > 1" :pageNumber="getNumberOfPages()" :currentPage="currentPage"
            :buttonNumber="width > 575 ? 5 : 3" :goToPage="goToPage" :goToLastPage="goLastPage"
            :goToFirstPage="goFirstPage" />
    </section>
</template>

<style lang="scss" scoped>
.admin-product-section {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding: 1.5rem 3rem 5rem 13rem;

    &__title-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2.5rem;

        &__title {
            font-weight: 700;
            color: var(--color-uc-gold);
        }
    }

    &__add-button {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        border-radius: 5px;
        font-weight: 500;
        width: min-content;

        & svg {
            height: 1.2rem;
            fill: var(--color-white);
        }
    }
}

.admin-product-list {
    display: flex;
    flex-direction: column;
    row-gap: 2.5rem;
}

@media (max-width:575px) {
    .admin-product-section{
        padding: 1.5rem 3rem 5rem 3rem;
    }
}
</style>