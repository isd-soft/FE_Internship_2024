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

const textContent = props.value ? `-${props.value}` : props.type

</script>

<template>
    <div :class="className" class="product-modal__chip">
        {{ textContent }}
    </div>
</template>

<style lang="scss" scoped>
.product-modal__chip {
    font-size: 16px;
    color: var(--color-white);
    padding: 2px 10px;
    border-radius: 10px;

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