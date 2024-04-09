

<script setup>
const categoryList = ['Product', 'Price', 'Quantity', 'Subtotal']
</script>

<template>
    <div class="cart-section__list-heading list-heading">
        <span v-for="(category, index) in categoryList" :key="index" class="list-heading__category text-sm">{{ category
            }}</span>
    </div>
</template>

<style lang="scss" scoped>
.list-heading {
    display: flex;
    align-items: center;
    padding: 15px 145px;
    margin-bottom: 5rem;
    background-color: var(--color-linen);

    &__category {
        font-weight: 500;
        width: calc(100% / 4);
        text-align: center;
        outline: 1px solid red;
    }
}
</style>