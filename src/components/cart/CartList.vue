<script setup>
import ListHeading from './ListHeading.vue'
import GenericList from '../generics/GenericList.vue'
import CartCard from './CartCard.vue'

const mockCartData = [
    { imageSrc: 'https://via.placeholder.com/100x100/CCCCCC/FFFFFF?text=Placeholder+Image', name: 'Asgaard sofa', price: 250000, quantity: 2 },
    { imageSrc: 'https://via.placeholder.com/100x100/CCCCCC/FFFFFF?text=Placeholder+Image', name: 'Asgaard sofa', price: 250000, quantity: 2 },
]
</script>

<template>
    <div class="cart-section__list-wrapper">
        <ListHeading />

        <GenericList :items="mockCartData" customClass="cart-section__list" itemClass="cart-section__list-item">
            <template v-slot="{ item }">
                <CartCard v-bind="item" />
            </template>
        </GenericList>
    </div>
</template>

<style lang="scss" scoped>
.cart-section__list-wrapper {
    width: 66%;
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    row-gap: 5rem;

    .cart-section__list {
        grid-column: 1 /span 6;
        display: grid;
        grid-template-columns: inherit;
        row-gap: inherit;

        &:deep(.cart-section__list-item) {
            grid-column: 1 /span 6;
            display: grid;
            grid-template-columns: inherit;
        }
    }
}
</style>