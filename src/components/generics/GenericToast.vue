<!-- eslint-disable vue/valid-template-root -->
<script>
import { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-default.css'

export function createToast(message, type) {
  const $toast = useToast()
  $toast.open({
    message: message,
    duration: 3000,
    position: "bottom-right",
    type: type
  })
}
</script>

<template>
  
</template>

<style lang="scss">
.v-toast {
  &__item {
    min-height: 60px;
    min-width: 190px;
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    font-weight: 500;
    justify-content: center;

    &--success {
      background-color: var(--color-blue-green);
      color: var(--color-white);
    }

    &--error {
      background-color: var(--color-candy-pink);
      color: var(--color-white);
    }
    &--info {
      background-color: var(--color-old-lace);
      color: var(--color-black);

    }

    &--warning {
      background-color: var(--color-light-silver);
      color: var(--color-black);
    }
  }
}
</style>
