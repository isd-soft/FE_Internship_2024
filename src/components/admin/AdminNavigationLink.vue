<script setup>
import GenericLink from '../generics/GenericLink.vue'

defineProps({
  href: String,
  textContent: String,
  icon: Object
})
</script>

<template>
  <GenericLink :href="href" containerClass="navigation__link" :textContent="textContent">
    <component :is="icon" />
  </GenericLink>
</template>

<style lang="scss" scoped></style>
