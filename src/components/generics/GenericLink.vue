<script setup>
const props = defineProps({
  textContent: {
    type: String,
    default: '',
  },
  href: {
    type: String,
    default: '#',
  },
  containerClass: {
    type: String,
    default: '',
  },
  textFirst: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <RouterLink :to="props.href" :class="props.containerClass" @click = "$router.push(props.href)">
    <template v-if="props.textFirst">
      {{ props.textContent }}
      <slot></slot>
    </template>
    <template v-else>
      <slot></slot>
      {{ props.textContent }}
    </template>
  </RouterLink>
</template>