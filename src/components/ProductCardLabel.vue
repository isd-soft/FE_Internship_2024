<script setup>
const props = defineProps({
    type: {
        type: String,
        validator: (value) => ['discount', 'stock', 'new'].includes(value)
    },
    value: {
        type: Number,
        required: false
    }
})
</script>

<template>
    <div v-if="props.type === 'discount'" class="product-card-label product-card-label__discount">
        -{{ props.value }}%
    </div>
    <div v-else-if="props.type === 'new'" class="product-card-label product-card-label__new">
        New
    </div>
    <div v-else class="product-card-label product-card-label__stock">
        {{ props.value }}
        <span>Available</span>
    </div>
</template>

<style lang="scss" scoped>
.product-card-label {
    position: absolute;
    top: 24px;
    right: 24px;
    width: 48px;
    height: 48px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: var(--color-white);

    span {
        font-size: 0.7rem;
    }

    &__new {
        background-color: var(--color-blue-green);
    }

    &__discount {
        background-color: var(--color-candy-pink);
    }

    &__stock {
        background-color: var(--color-granite-gray);
    }
}
</style>