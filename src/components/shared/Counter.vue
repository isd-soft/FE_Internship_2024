<script setup>
import {ref} from 'vue'

const count = ref(0)

function increaseCount() {
  count.value++;
}

function decreaseCount() {
  if (count.value > 0) {
    count.value--;
  }
}
</script>

<template>
    <div class="counter">
        <button class="counter__button-action text-sm" @click = "decreaseCount">-</button>
        <span class="counter__value text-md">{{ count }}</span>
        <button class="counter__button-action text-sm" @click = "increaseCount">+</button>
    </div>
</template>

<style lang="scss" scoped>
.counter{
    display: flex;
    align-items: center;
    column-gap: 2.35rem;
    border-radius: 1.43rem;
    height: auto;
    border: 1px solid var(--color-quick-silver);
    padding: 1rem;

    &__button-action{
      background-color: var(--color-white);
    }

    &__value{
      display: flex;
      width: 3.5rem;
      justify-content: center;
      align-items: center;
    }
}
</style>