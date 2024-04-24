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

const className = 'product-modal__chip--' + props.type

const textContent = () => {
    const {type, value} = props

    if (type === 'stock') return 'Sold Out'
    if (type === 'new') return 'New'
    return `-${value}%`
}

</script>

<template>
    <div :class="className" class="product-modal__chip">
        {{ textContent() }}
    </div>
</template>

<style lang="scss" scoped>
.product-modal__chip {
    font-size: 16px;
    color: var(--color-white);
    display: block;
    width: fit-content;
    padding: 2px 10px;
    border-radius: 5px;

    &--new {
        background-color: var(--color-violet-blue);
    }

    &--discount {
        background-color: var(--color-blue-green);
    }

    &--stock {
        background-color: var(--color-candy-pink);
    }
}
</style>