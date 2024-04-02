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
    <div v-if="props.type === 'discount'" class="product-card-label product-card-label--discount">
        -{{ props.value }}%
    </div>
    <div v-else-if="props.type === 'new'" class="product-card-label product-card-label--new">
        New
    </div>
    <div v-else class="product-card-label product-card-label--stock">
        {{ props.value }}
        <span>Available</span>
    </div>
</template>

<style scoped>
.product-card-label {
    width: 48px;
    height: 48px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: var(--color-white);

    span {
        font-size: 0.45rem;
    }
}

.product-card-label--new {
    background-color: var(--color-marine);
}

.product-card-label--discount {
    background-color: var(--color-pink);
}

.product-card-label--stock {
    background-color: var(--color-gray-3);
}
</style>