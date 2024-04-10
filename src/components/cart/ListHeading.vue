<script setup>
const categoryList = ['Product', 'Price', 'Quantity', 'Subtotal']
</script>

<template>
    <div class="cart-section__list-heading list-heading">
        <span v-for="(category, index) in categoryList" :key="index" class="list-heading__category text-sm">{{
            category
        }}</span>
    </div>
</template>

<style lang="scss" scoped>
.list-heading {
    grid-column: 1 /span 6;
    display: grid;
    grid-template-columns: inherit;
    background-color: var(--color-linen);
    padding: 1.5rem 0;

    &__category {
        text-align: center;

        &:nth-child(1) {
            grid-column: 2;
        }

        &:nth-child(2) {
            grid-column: 3;
        }

        &:nth-child(3) {
            grid-column: 4;
        }

        &:nth-child(4) {
            grid-column: 5;
        }
    }
}
</style>