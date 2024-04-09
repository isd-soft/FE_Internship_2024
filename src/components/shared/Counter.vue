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
        <button class="counter__button text-sm" @click = "increaseCount">+</button>
        <span class="counter__value text-md">{{ count }}</span>
        <button class="counter__button text-sm" @click = "decreaseCount">-</button>
    </div>
</template>

<style lang="scss" scoped>
.counter{
    display: flex;
    align-items: center;
    column-gap: 2.4vw;
    border-radius: .8vw;
    height: auto;
    border: 1px solid var(--color-quick-silver);
    padding: 10px;

    &__button{
        border: none;
        cursor: pointer;
        background-color: white;
    }
}
</style>