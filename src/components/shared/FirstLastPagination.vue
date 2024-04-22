<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
    pageNumber: Number,
    currentPage: Number,
    buttonNumber: Number,
    goToPage: Function,
    goToLastPage: Function,
    goToFirstPage: Function,
})

const currentPage = ref(props.currentPage)

watch(() => props.currentPage, () => {
    currentPage.value = props.currentPage
})

const pageNumber = ref(props.pageNumber)

watch(() => props.pageNumber, () => {
    pageNumber.value = props.pageNumber
})

const buttonNumber = ref(props.buttonNumber)

watch(() => props.buttonNumber, () => {
    buttonNumber.value = props.buttonNumber
})

const { goToPage, goToLastPage, goToFirstPage } = props

const pageActive = (number) => {
    return currentPage.value === number ? '--active' : '';
}

const getButtonNumberList = () => {
    const distance = Math.floor(buttonNumber.value / 2)
    let value = currentPage.value - distance

    if (currentPage.value < distance + 1) {
        value = 1
    }

    if (currentPage.value > pageNumber.value - distance) {
        value = pageNumber.value - buttonNumber.value + 1
    }

    console.log('pageNumber', pageNumber.value)
    console.log('buttonNumber', buttonNumber.value)
    console.log('currentPage', currentPage.value)
    console.log('distance', distance)
    console.log('value', value)

    return Array.from({ length: props.buttonNumber }, (_, index) => value + index)
}

const isActive = (number) => {
    console.log('isActive', currentPage.value, currentPage.value === number)
    return currentPage.value === number ? '--active' : '';
}

</script>

<template>
    <div class="first-last-pagination">
        <button class="first-last-pagination__button">First</button>
        <div class="first-last-pagination__button-wrapper">
            <button v-for="number in getButtonNumberList()" :key="number"
                :class="['first-last-pagination__button', 'first-last-pagination__button' + isActive(number)]">{{
                number
            }}</button>
        </div>
        <button class="first-last-pagination__button">Last</button>
    </div>
</template>

<style lang="scss" scoped>
.first-last-pagination {
    border: 1px solid deeppink;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;

    &__button {
        background-color: var(--color-linen);
        color: var(--color-black);
        border-radius: 10px;
        min-width: 4.5rem;
        height: 4.5rem;
        font-size: 1.6rem;
        padding: 0 1.5rem;

        &:hover {
            background-color: var(--color-uc-gold);
            color: var(--color-white);
        }

        &:active {
            background-color: var(--color-linen);
            color: var(--color-black);
        }

        &--active {
            background-color: var(--color-uc-gold);
            color: var(--color-white);
            min-width: 5rem;
            height: 5rem;
        }
    }

    &__button-wrapper {
        display: flex;
        align-items: center;
        gap: 2.5rem;
    }
}
</style>