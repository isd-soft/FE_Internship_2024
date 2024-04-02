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
    default: true,
  },
});
</script>

<template>
  <a :href="props.href" :class="props.containerClass">
    <template v-if="props.textFirst">
      {{ props.textContent }}
      <slot></slot>
    </template>
    <template v-else>
      <slot></slot>
      {{ props.textContent }}
    </template>
  </a>
</template>

<style lang="scss" scoped>
  a{
    text-decoration: none;
  }
</style>

<!-- use define props instead of export default

Text-content
children
href
container
text-first
text-class
базовая конфигурация для линка

GenericList
tag = ol/ul/div
is_vertical flag
class
items
базовая конфигурация для списков -->