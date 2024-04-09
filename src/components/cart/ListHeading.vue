<script setup>
const categoryList = ['Product', 'Price', 'Quantity', 'Subtotal']
</script>

<template>
    <div class="cart-section__list-heading list-heading">
        <div class="list-heading__category-wrapper">
            <span v-for="(category, index) in categoryList" :key="index" class="list-heading__category text-sm">{{
                category
            }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.list-heading {
    display: flex;
    justify-content: center;
    margin-bottom: 5rem;
    background-color: var(--color-linen);

    &__category-wrapper {
        display: flex;
        align-items: center;
        width: 66%;
        padding: 15px 0;
    }

    &__category {
        font-weight: 500;
        width: 25%;
        text-align: center;
        outline: 1px solid red;
    }
}
</style>