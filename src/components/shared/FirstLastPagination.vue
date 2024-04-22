<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
    pageNumber: Number,
    currentPage: Number,
    buttonNumber: Number,
    scrollToTop: {
        type: Boolean,
        default: true,
        required: false
    },
    goToPage: Function,
    goToLastPage: Function,
    goToFirstPage: Function
})

const selfRef = ref(null)

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

const distance = Math.floor(buttonNumber.value / 2)

const getButtonNumberList = () => {
    let value = currentPage.value - distance

    if (currentPage.value < distance + 1) {
        value = 1
    }

    if (currentPage.value > pageNumber.value - distance) {
        value = pageNumber.value - buttonNumber.value + 1
    }

    return Array.from({ length: props.buttonNumber }, (_, index) => value + index)
}

const isActive = (number) => {
    return currentPage.value === number ? '--active' : '';
}

const showFirstButton = () => {
    return currentPage.value > distance + 1 ? '' : '--disabled'
}

const showLastButton = () => {
    return currentPage.value < pageNumber.value - distance ? '' : '--disabled'
}

const scroll = () => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, 0)
}

const goToPage = (number) => {
    props.goToPage(number)
    props.scrollToTop && scroll()
}

const goToLastPage = () => {
    props.goToLastPage()
    props.scrollToTop && scroll()
}

const goToFirstPage = () => {
    props.goToFirstPage()
    props.scrollToTop && scroll()
}

</script>

<template>
    <div class="first-last-pagination" ref="selfRef">
        <button :class="['first-last-pagination__button', 'first-last-pagination__button' + showFirstButton()]"
            @click="goToFirstPage()">First</button>
        <div class="first-last-pagination__button-wrapper">
            <button v-for="number in getButtonNumberList()" :key="number"
                :class="['first-last-pagination__button', 'first-last-pagination__button' + isActive(number)]"
                @click="goToPage(number)">
                {{ number }}
            </button>
        </div>
        <button :class="['first-last-pagination__button', 'first-last-pagination__button' + showLastButton()]"
            @click="goToLastPage()">Last</button>
    </div>
</template>

<style lang="scss" scoped>
.first-last-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 5rem;
    gap: 2.5rem;

    &__button {
        background-color: var(--color-linen);
        color: var(--color-black);
        border-radius: 10px;
        min-width: 4.5rem;
        height: 4.5rem;
        font-size: 1.6rem;
        padding: 0 1.5rem;
        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out, min-width 0.3s ease-in-out,
            height 0.3s ease-in-out;

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

        &--disabled {
            visibility: hidden;
        }
    }

    &__button-wrapper {
        display: flex;
        align-items: center;
        gap: 2.5rem;
    }
}
</style>