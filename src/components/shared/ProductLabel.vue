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
  <div v-if="props.type === 'discount'" class="product-card__label label label__discount">
    -{{ props.value }}%
  </div>

  <div v-else-if="props.type === 'new'" class="label label__new">New</div>

  <div v-else class="label label__stock">
    {{ props.value }}
    <span class="label__specification">Available</span>
  </div>
</template>

<style lang="scss" scoped>
.label {
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 24px;
  right: 24px;
  width: 48px;
  height: 48px;
  border-radius: 100%;

  &__specification {
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