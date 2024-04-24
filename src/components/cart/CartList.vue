<script setup>
import ListHeading from './ListHeading.vue'
import GenericList from '../generics/GenericList.vue'
import CartCard from './CartCard.vue'
import { useCartStore } from '@/stores/cartStore';
import { computed } from 'vue';
import { useProductStore } from '@/stores/productStore';

const cartStore = useCartStore()
const productStore = useProductStore()

const cartItemList = computed(() => {
    cartStore.clean()
    const fullCart = Array.from(cartStore.productMap.values())
    return fullCart.filter((product) => productStore.productExists(product.id))
})

</script>

<template>
    <div class="cart-section__list-wrapper">
        <ListHeading />
        <GenericList :items="cartItemList" customClass="cart-section__list" itemClass="cart-section__list-item">
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
    row-gap: 40px;

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

@media only screen and (max-width: 991px) {
    .cart-section__list-wrapper {
        width: 100%;
        row-gap: 20px;
    }
}

@media only screen and (max-width: 575px) {
    .cart-section__list-wrapper {
        .cart-section__list {
            column-gap: 10px;
    }
    }
}
</style>