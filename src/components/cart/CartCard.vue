<script setup>
import TrashIcon from '../../assets/icons/TrashIcon.svg'
import { useCartStore } from '@/stores/cartStore'
import { useProductStore } from '@/stores/productStore'
import { createToast } from '../generics/GenericToast.vue'
import { ref, computed } from 'vue'
import ProductCard from '../shared/ProductCard.vue'

const cartStore = useCartStore()
const productStore = useProductStore()

const props = defineProps({
  id: String,
  imageUrl: String,
  name: String,
  price: Number,
  quantity: Number
})

const changeQuantity = (newQuantity) => {
  if (newQuantity >= 0 && newQuantity < 1000)
    if (!cartStore.changeProductQuantity(props.id, newQuantity))
      createToast('Could not add product', 'error')
}

const handleInput = (event) =>
  /^\d+$/.test(event.target.value) || event.target.value === ''
    ? null
    : (event.preventDefault(), (event.target.value = event.target.value.replace(/\D/g, '')))

const handleBlur = (event) => {
  const startsWithZero = event.target.value.startsWith('0')

  const nonZeroValue = event.target.value.replace(/^0+/, '')

  const isSaneAmount = parseInt(nonZeroValue) < 1000 && parseInt(nonZeroValue) >= 0

  if (!nonZeroValue.length || !event.target.value.length || !isSaneAmount) {
    event.target.value = props.quantity
    return
  }

  if (startsWithZero) {
    event.target.value = nonZeroValue
  }
  if (!cartStore.changeProductQuantity(props.id, parseInt(nonZeroValue)))
    createToast('Could not add product', 'error')
}

const handleProductDelete = () => cartStore.deleteProduct(props.id)
</script>

<template>
  <div v-if="productStore.loader" class="cart-list__card cart-card">
    <img class="cart-card__image" :src="imageUrl" :alt="name" />

    <span class="cart-card__name text-sm">
      {{ name }}
    </span>

    <span class="cart-card__price text-sm"> ${{ price }} </span>

    <div class="cart-card__counter counter">
      <button
        class="counter__button-action text-sm"
        :disabled="quantity <= 0"
        @click="changeQuantity(quantity - 1)"
      >
        -
      </button>
      <input
        @blur="handleBlur($event)"
        @input="handleInput($event)"
        class="cart-card__quantity text-xs"
        :value="quantity"
        maxlength="3"
      />
      <button
        :disabled="!productStore.isAvailable(props.id, quantity + 1)"
        class="counter__button-action text-sm"
        @click="changeQuantity(quantity + 1)"
      >
        +
      </button>
    </div>

    <span class="cart-card__subtotal text-sm"> ${{ (price * quantity).toFixed(2) }} </span>

    <button class="cart-card__delete-button delete-button" @click="handleProductDelete">
      <TrashIcon class="delete-button__icon" width="2.8rem" height="2.8rem" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.cart-card {
  grid-column: 1 / span 6;
  display: grid;
  grid-template-columns: inherit;
  text-align: center;
  align-items: center;

  &__image {
    grid-column: 1;
    width: 10rem;
    height: 10rem;
  }

  &__name {
    grid-column: 2;
  }

  &__price {
    grid-column: 3;
  }

  &__quantity {
    text-align: center;
    display: block;
    width: 3.6rem;
    height: 3.1rem;
    border: 1px solid var(--color-quick-silver);
    border-radius: 1rem;

    &:focus {
      outline: none;
    }
  }

  &__subtotal {
    grid-column: 5;
  }
}

.delete-button {
  grid-column: 6;

  &__icon {
    fill: var(--color-uc-gold);

    &:hover {
      fill: var(--color-dark-charcoal);
    }
    &:active {
      fill: var(--color-uc-gold);
    }
  }
}

.counter {
  grid-column: 4;
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  width: 100%;

  &__button-action {
    &:hover {
      color: var(--color-uc-gold);
    }

    &:disabled {
      visibility: hidden;
    }
  }
}

@media only screen and (max-width: 768px) {
  .cart-card {
    &__image {
      width: 7.5rem;
      height: 7.5rem;
    }
  }
}
</style>
