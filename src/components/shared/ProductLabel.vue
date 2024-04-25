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

  <div v-else-if="props.type === 'stock'" class="label label__stock">
    <span class="label__specification">Sold out</span>
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
  top: 1.4rem;
  right: 1.4rem;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  font-size: 12px;

  &__specification {
    font-size: 10px;
  }

  &__new {
    background-color: var(--color-violet-blue);
  }

  &__discount {
    background-color: var(--color-blue-green);
  }

  &__stock {
    background-color: var(--color-candy-pink);
  }
}

@media only screen and (max-width: 991px) {
  .label {
    width: clamp(36px, 6.25vw, 48px);
    height: clamp(36px, 6.25vw, 48px);
    font-size: clamp(12px, 2vw, 16px);

    &__specification {
      font-size: clamp(6px, 1vw, 8px);
      text-align: center;
    }
  }
}

@media only screen and (max-width: 575px) {
  .label {
    width: clamp(36px, 12.8vw, 48px);
    height: clamp(36px, 12.8vw, 48px);
    font-size: clamp(12px, 4.3vw, 16px);

    &__specification {
      font-size: clamp(6px, 2vw, 8px);
    }
  }
}
</style>