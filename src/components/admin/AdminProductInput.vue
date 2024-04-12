<script setup>
import { handleNumberInputBlur } from '../../utils/handleNumberInputBlur.js'
import { handleNumberInputInsert } from '../../utils/handleNumberInputInsert.js'

const NOOP = () => { }

defineProps({
    title: String,
    placeholder: String,
    isNumeric: Boolean,
    tag: String,
    name: String,
    value: {
        required: true
    }
})

</script>

<template>
    <div>
        <span class="admin-product-form__field-title text-sm">
            {{ title }}:
        </span>

        <component @input="isNumeric ? handleNumberInputInsert($event) : NOOP"
            @blur="isNumeric ? handleNumberInputBlur($event, value) : NOOP" :is="tag ? tag : 'input'"
            class="admin-product-form__field text-sm" :class="`admin-product-form__${title}`"
            :placeholder="placeholder ? placeholder : ''" :value="value" :name="name" />
    </div>
</template>

<style scoped lang="scss"></style>