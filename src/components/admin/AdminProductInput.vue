<script setup>
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
        <label :for="name" class="admin-product-form__field-title text-sm">
            {{ title }}:
        </label>

        <component :is="tag ? tag : 'input'" class="admin-product-form__field text-sm"
            :class="`admin-product-form__${title}`" :placeholder="placeholder ? placeholder : ''" :value="value"
            :name="name" />
    </div>
</template>

<style scoped lang="scss"></style>