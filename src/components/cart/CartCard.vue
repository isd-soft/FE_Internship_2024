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

        <div class="cart-card__text-wrapper">
            <span class="cart-card__name text-sm">
                {{ name }}
            </span>

            <span class="cart-card__price text-sm">
                {{ price }}
            </span>

            <div class="cart-card__input-wrapper">
                <input @blur="handleBlur" @input="handleInput" class="cart-card__quantity text-sm" :value="quantity">
            </div>

            <span class="cart-card__subtotal text-sm">
                {{ price * quantity }}
            </span>
        </div>

        <button class="cart-card__delete-button">
            <TrashIcon width="2.8rem" height="2.8rem"/>
        </button>
    </div>
</template>

<style lang="scss" scoped>
.cart-card {
    display: flex;
    align-items: center;
    margin-bottom: 5rem;

    &__image {
        width: 10rem;
        aspect-ratio: 1/1;
        border-radius: 10px;
    }

    &__name,
    &__price {
        color: var(--color-quick-silver);
    }

    &__quantity {
        color: var(--color-black);
        width: 3.2rem;
        height: 3.2rem;
        border: 1px solid var(--color-quick-silver);
        text-align: center;
        border-radius: 10px;

        &:focus {
            outline: none;
        }
    }

    &__subtotal {
        color: var(--color-black);
    }

    &__text-wrapper {
        display: flex;
        align-items: center;
        width: 66%;
        margin: 0 4rem;
    }

    &__name,
    &__price,
    &__input-wrapper,
    &__subtotal {
        width: 20rem;
        text-align: center;
        outline: 1px red solid;
    }

    &__delete-button {
        padding: 0;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
}
</style>