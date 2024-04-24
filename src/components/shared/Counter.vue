<script setup>
import { ref } from 'vue'

defineProps({
  isVisible: Boolean
})

const count = ref(1)

function increaseCount() {
  count.value++;
}

function decreaseCount() {
  if (count.value > 1) {
    count.value--;
  }
}
</script>

<template>
  <div v-if="isVisible" class="counter">
    <button class="counter__button" @click="decreaseCount">
      -
    </button>

    <span class="counter__value">
      {{ count }}
    </span>

    <button class="counter__button" @click="increaseCount">
      +
    </button>
  </div>
</template>

<style lang="scss" scoped>
.counter {
  display: flex;
  align-items: center;
  gap: 15px;
  border-radius: 10px;
  border: 1px solid var(--color-black);
  padding: 10px 15px;

  &__button {
    font-size: 16px;
    background-color: var(--color-white);
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.5);
    }
  }

  &__value {
    font-size: 16px;
    display: flex;
    width: 20px;
    justify-content: center;
    align-items: center;
  }
}

@media only screen and (max-width: 575px) {
  .counter {
    &__button {
      font-size: 12px;
    }

    &__value {
      font-size: 12px;
    }
  }
}
</style>