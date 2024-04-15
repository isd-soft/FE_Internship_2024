<script setup>
import { Field, ErrorMessage } from 'vee-validate';

const props = defineProps({
    title: String,
    placeholder: String,
    tag: String,
    name: String,
    type: String,
    checkboxValue: Boolean
})

const valueAttr = props.type === 'checkbox' ? { value: props.checkboxValue } : null;

</script>

<template>
    <div class="admin-product-form__field-wrapper">
        <label :for="name" class="admin-product-form__field-title text-xs">
            {{ title }}:
        </label>

        <Field :as="tag ? tag : 'input'" :id="name" class="admin-product-form__field text-xs"
            :class="`admin-product-form__${name}`" :placeholder="placeholder" :name="name" :type="type"
            :uncheckedValue="false" v-bind="valueAttr" />

        <label v-if="type === 'checkbox'" :for="name" class="admin-product-form__checkbox-label"></label>

        <ErrorMessage class="admin-product-form__error text-xs" :name="name" />
    </div>
</template>

<style scoped lang="scss">
.admin-product-form {
    &__field-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding-top: 2rem;

        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4) {
            grid-column: span 2;
        }
    }

    &__field-title {
        font-weight: 500;
        width: 8rem;
        text-align: center;
    }

    &__field {
        border: 1px solid var(--color-quick-silver);
        border-radius: 1rem;
        padding: 0.75rem 0.6rem;
        flex-grow: 1;

        &::placeholder {
            color: var(--color-quick-silver);
        }

        &:focus {
            border: 1px solid var(--color-uc-gold);
            outline: none;
        }
    }

    &__description {
        resize: none;
    }

    &__checkbox-label {
        position: relative;
        width: 3.5rem;
        height: 3.5rem;
        border: 1px solid var(--color-quick-silver);
        border-radius: 1rem;
    }

    &__checkbox-label::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 10;
        width: 2rem;
        height: 1rem;
        border-bottom: 5px solid var(--color-uc-gold);
        border-left: 5px solid var(--color-uc-gold);
        transform: rotate(-45deg);
        translate: -50% -60%;
        opacity: 0;
        cursor: pointer;
    }

    &__isNew {
        position: absolute;
        opacity: 0;
        visibility: hidden;
    }

    &__isNew:checked+&__checkbox-label::after {
        opacity: 1;
    }

    &__error {
        font-weight: 500;
        position: absolute;
        top: 0.2rem;
        left: 0;
        width: 100%;
        text-align: center;
        color: var(--color-candy-pink);
    }

}
</style>