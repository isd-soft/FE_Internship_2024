<script setup>
const props = defineProps({
    total: Number,
    subtotal: Number
})
</script>

<template>
    <div class="cart-section__total cart-total">
        <h2 class="cart-total__title text-xl">
            Cart Totals
        </h2>

        <div class="cart-total__text-wrapper">
            <span class="cart-total__category text-sm">
                Subtotal
            </span>

            <span class="cart-total__value text-sm">
                {{ subtotal }}
            </span>
        </div>

        <div class="cart-total__text-wrapper">
            <span class="cart-total__category text-sm">
                Total
            </span>

            <span class="cart-total__final-value text-md">
                {{ total }}
            </span>
        </div>

        <button class="cart-total__button tertiary-button">
            Check Out
        </button>
    </div>
</template>

<style lang="scss" scoped>
    .cart-total {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 31%;
        padding: 15px 75px 80px 75px;
        background-color: var(--color-linen);

        &__title {
            font-weight: 600;
            color: var(--color-black);
            margin-bottom: 60px;
        }

        &__text-wrapper {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
        }

        &__category {
            font-weight: 500;
            color: var(--color-black);
        }

        &__value {
            color: var(--color-quick-silver);
        }

        &__final-value {
            font-weight: 500;
            color: var(--color-uc-gold);
        }
    }
</style>