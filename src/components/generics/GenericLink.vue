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
  textClass: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <RouterLink :to="props.href" :class="props.containerClass" @click = "$router.push(props.href)">
    <template v-if="props.textFirst">
      <span :class = "textClass">{{ props.textContent }}</span>
      <slot></slot>
    </template>
    <template v-else>
      <slot></slot>
      <span :class = "textClass">{{ props.textContent }}</span>
    </template>
  </RouterLink>
</template>