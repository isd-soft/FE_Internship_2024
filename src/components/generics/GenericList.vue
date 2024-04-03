<template>
    <component :is="tag" :class="customClass" :style="customStyle">
        <li v-for="item in items" :key="getKey(item)" :class="itemClass">
            <slot :item="item"></slot>
        </li>
        <li v-if="items.length === 0 && emptyStateMessage">{{ emptyStateMessage }}</li>
    </component>
</template>

<script setup>
const props = defineProps({
    items: {
        type: Array,
        required: true
    },
    tag: {
        type: String,
        default: 'ul',
        validator: value => ['ul', 'ol'].includes(value)
    },
    keyProp: {
        type: String,
        default: null
    },
    customClass: {
        type: String,
        default: ''
    },
    itemClass: {
        type: String,
        default: ''
    },
    customStyle: {
        type: Object,
        default: () => ({})
    },
    emptyStateMessage: {
        type: String,
        default: ''
    },
    sortBy: {
        type: String,
        default: ''
    },
    filterBy: {
        type: String,
        default: ''
    },
    loading: {
        type: Boolean,
        default: false
    },
    virtualScrolling: {
        type: Boolean,
        default: false
    }
})

const getKey = (item) => props.keyProp ? item[props.keyProp] : item;
</script>