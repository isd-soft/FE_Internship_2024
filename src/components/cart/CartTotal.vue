<script setup>
import { useCartStore } from '@/stores/cartStore'
import {createToast} from '../generics/GenericToast.vue'

const cartStore = useCartStore()


const checkout = () => {
  cartStore.removeCart()
  if (cartStore.subtotal > 0) createToast("Checkout complete", "success")
}
</script>

<template>
  <div class="cart-section__total cart-total">
    <h3 class="cart-total__title text-xl">Cart Totals</h3>

    <div class="cart-total__category-wrapper">
      <div class="cart-total__text-wrapper">
        <span class="cart-total__category text-sm"> Subtotal </span>

        <span class="cart-total__value text-sm">
          ${{ cartStore.subtotal }}
        </span>
      </div>

      <div class="cart-total__text-wrapper">
        <span class="cart-total__category text-sm"> Delivery </span>

        <span class="cart-total__value text-sm">
          ${{ cartStore.delivery }}
        </span>
      </div>

      <div class="cart-total__text-wrapper">
        <span class="cart-total__category text-sm"> Total </span>

        <span class="cart-total__final-value text-md">
          ${{ cartStore.total }}
        </span>
      </div>
    </div>

    <button class="cart-total__button tertiary-button" @click="checkout">Check Out</button>
  </div>
</template>

<style lang="scss" scoped>
.cart-total {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 31%;
  padding: 3.5rem 3.7rem 3.5rem 3.7rem;
  background-color: var(--color-linen);

  &__title {
    font-weight: 600;
    font-size: 32px;
    color: var(--color-black);
    margin-bottom: 60px;
  }

  &__category-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-bottom: 3rem;
  }

  &__text-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__category {
    font-weight: 500;
    font-size: 16px;
    color: var(--color-black);
  }

  &__value {
    color: var(--color-quick-silver);
    font-size:16px;
  }

  &__final-value {
    font-weight: 500;
    font-size: 22px;
    color: var(--color-uc-gold);
  }
  &__button{
    padding: 20px 30px;
    font-size: 16px;
  }
}

@media only screen and (max-width: 991px) {
  .cart-total {
    width: 100%;
    padding: 3rem 1.5rem;
    gap: 2rem;

    &__title,
    &__category-wrapper {
      margin: 0;
    }

    &__title {
      width: fit-content;
      font-size: 20px;
    }

    &__category-wrapper {
      width: 20rem;
    }
    &__category{
      font-size: 14px;
    }
    &__value {
    font-size:14px;
  }

  &__final-value {
    font-size: 18px;
  }
  &__button{
    padding: 15px 20px;
    font-size: 14px;
  }
  }
}
</style>
