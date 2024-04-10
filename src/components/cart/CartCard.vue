<script setup>
import TrashIcon from '../../assets/icons/TrashIcon.svg';


const props = defineProps({
    imageSrc: String,
    name: String,
    price: Number,
    quantity: Number
})

const handleInput = event => /^\d+$/.test(event.target.value) || event.target.value === '' ? null : (event.preventDefault(), event.target.value = event.target.value.replace(/\D/g, ''));

const handleBlur = event => {
    const startsWithZero = event.target.value.startsWith('0')

    const nonZeroValue = event.target.value.replace(/^0+/, '')

    if (!nonZeroValue.length || !event.target.value.length) {
        event.target.value = props.quantity
        return
    }

    if (startsWithZero) event.target.value = nonZeroValue;
}

</script>

<template>
    <div class="cart-list__card cart-card">
        <img class="cart-card__image" :src="imageSrc" :alt="name">

        <span class="cart-card__name text-sm">
            {{ name }}
        </span>

        <span class="cart-card__price text-sm">
            {{ price }}
        </span>

        <input @blur="handleBlur" @input="handleInput" class="cart-card__quantity text-sm" :value="quantity">

        <span class="cart-card__subtotal text-sm">
            {{ price * quantity }}
        </span>

        <button class="cart-card__delete-button">
            <TrashIcon width="2.8rem" height="2.8rem"/>
        </button>
    </div>
</template>

<style lang="scss" scoped>
.cart-card {
    grid-column: 1 /span 6;
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
        grid-column: 4;
        text-align: center;
        display: block;
        max-width: 5rem;
        height: fit-content;
        margin: 0 auto;
    }

    &__subtotal {
        grid-column: 5;
    }

    &__delete-button {
        grid-column: 6;
    }
}
</style>