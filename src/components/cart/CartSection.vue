<script setup>
import CartList from './CartList.vue'
import CartTotal from './CartTotal.vue'
</script>

<template>
    <section class="main__section section cart-section">
        <div class="cart-section__container container">
            <CartList />
            <CartTotal/>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.cart-section {
    &__container {
        display: flex;
        justify-content: space-between;
        align-items: start;
        width: 86%;
        margin: 0 auto;
    }
}

@media only screen and (max-width: 991px) {
    .cart-section__container {
        flex-direction: column;
        gap: 40px;
    }
}
</style>