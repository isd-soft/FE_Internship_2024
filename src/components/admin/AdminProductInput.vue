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
        <label :for="name" class="admin-product-form__field-title">
            {{ title }}:
        </label>

        <Field :as="tag ? tag : 'input'" :id="name" class="admin-product-form__field"
            :class="`admin-product-form__${name}`" :placeholder="placeholder" :name="name" :type="type"
            :uncheckedValue="false" v-bind="valueAttr" />

        <label v-if="type === 'checkbox'" :for="name" class="admin-product-form__checkbox-label"></label>

        <ErrorMessage class="admin-product-form__error" :name="name" />
    </div>
</template>

<style scoped lang="scss">
.admin-product-form {
    &__field-wrapper {
        display: flex;
        flex-direction: column;
        gap: 5px;

        &:nth-child(3),
        &:nth-child(4) {
            grid-column: span 2;
        }

        &:nth-child(3) {
            .admin-product-form__field {
                height: 80px;
            }
        }
    }

    &__field-title {
        font-size: 16px;
        font-weight: 500;
        width: fit-content;
    }

    &__field {
        font-size: 14px;
        border: 1px solid var(--color-quick-silver);
        border-radius: 10px;
        padding: 12px;

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
        height: 100%;
        width: 45px;
        border: 1px solid var(--color-quick-silver);
        border-radius: 10px;
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
        bottom: 0.4rem;
        left: 8.5rem;
        display: block;
        width: fit-content;
        text-align: center;
        color: var(--color-candy-pink);
    }

}
</style>