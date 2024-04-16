<script setup>
import { useCartStore } from '@/stores/cartStore'
import { ref, computed } from 'vue'
import GenericToast from '../generics/GenericToast.vue'

const cartStore = useCartStore()

const toastFlag = ref(false)

const checkout = () => {
  cartStore.removeCart()
  toastFlag.value = true
}
</script>

<template>
  <div class="cart-section__total cart-total">
    <GenericToast v-if="toastFlag" message="Checkout complete" type="success" />
    <h3 class="cart-total__title text-xl">Cart Totals</h3>

    <div class="cart-total__category-wrapper">
      <div class="cart-total__text-wrapper">
        <span class="cart-total__category text-sm"> Subtotal </span>

        <span class="cart-total__value text-sm">
          {{ cartStore.subtotal }}
        </span>
      </div>

      <div class="cart-total__text-wrapper">
                <span class="cart-total__category text-sm">
                    Delivery
                </span>

                <span class="cart-total__value text-sm">
                    {{ cartStore.delivery }}
                </span>
            </div>

      <div class="cart-total__text-wrapper">
        <span class="cart-total__category text-sm"> Total </span>

        <span class="cart-total__final-value text-md">
          {{ cartStore.total }}
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
  padding: 1.5rem 7.5rem 8rem 7.5rem;
  background-color: var(--color-linen);

  &__title {
    font-weight: 600;
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

@media only screen and (max-width: 768px) {
  .cart-total {
    width: 100%;
    padding: 1.5rem;
    gap: 2rem;

    &__title,
    &__category-wrapper {
      margin: 0;
    }

    &__title {
      width: fit-content;
    }

    &__category-wrapper {
      width: 20rem;
    }
  }
}
</style>
