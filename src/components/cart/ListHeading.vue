<script setup>
const categoryList = ['Product', 'Price', 'Quantity', 'Subtotal']
</script>

<template>
    <div class="cart-section__list-heading list-heading">
        <span v-for="(category, index) in categoryList" :key="index" class="list-heading__category">{{
            category
        }}</span>
    </div>
</template>

<style lang="scss" scoped>
.list-heading {
    grid-column: 1 /span 6;
    column-gap: 10px;
    display: grid;
    grid-template-columns: inherit;
    background-color: var(--color-linen);
    padding: 1.5rem 0;
    font-size: 14px;

    &__category {
        text-align: left;
        font-weight: 600;

        &:nth-child(1) {
            grid-column: 2;
        }

        &:nth-child(2) {
            grid-column: 3;
        }

        &:nth-child(3) {
            grid-column: 4;
            text-align: center;
        }

        &:nth-child(4) {
            grid-column: 5;
            text-align: right;
        }
    }
}

@media only screen and (max-width: 991px) {
    .list-heading {
        font-size: 12px;
    }
}

@media only screen and (max-width: 575px) {
    .list-heading{
    &__category{
        text-align: center;
    &:nth-child(1) {
        grid-column: 1;
        padding-left: 5px;
        text-align: left;
    }

    &:nth-child(2){
        display: none;
    }

    &:nth-child(3){
        grid-column: span 3;
        text-align: center;
    }

    &:nth-child(4){
        text-align: left;
        padding-left: 5px;
    }
}
}
}
</style>