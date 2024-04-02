<script>
export default {
  props: {
    links: {
      type: Array,
      required: true,
    },
    direction: {
      type: String,
      default: 'row', // 'row' or 'column'
    },
    padding: {
      type: String,
      default: '0 35px', // Example default padding
    },
  },
  computed: {
    itemStyle() {
      return {
        padding: this.padding,
      };
    },
  },
}
</script>

<template>
  <div :class="`link-group link-group--${direction}`">
    <a v-for="(link, index) in links" :key="index" :href="link.url" class="link-group__item" :style="itemStyle">
      {{ link.text }}
    </a>
  </div>
</template>

<style lang="scss" scoped>
$link-group-padding: '0 35px';

.link-group {
  display: flex;
  align-items: center;
  &--row {
    flex-direction: row;
  }
  &--column {
    flex-direction: column;
  }
  &__item {
    text-decoration: none;
    color: var(--color-black);
    padding: $link-group-padding;
  }
}
</style>