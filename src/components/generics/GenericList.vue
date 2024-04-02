<script setup>
defineProps({
    listTag: {
        type: String,
        validator: (value) => ['ul', 'ol'].includes(value),
        default: 'ul'
    },
    isVertical: Boolean,
    items: {
        type: Array,
        default: () => []
    }
})
</script>

<template>
    <component :is="listTag" class="list" :class="{ 'list-vertical': isVertical, 'list-horizontal': !isVertical }">
        <li v-for="(item, index) in items" :key="index">
            <slot :item="item"></slot>
        </li>
    </component>
</template>

<style lang="scss" scoped>
.list {
    display: flex;

    &-horizontal {
        flex-direction: row;
    }

    &-vertical {
        flex-direction: column;
    }
}
</style>