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

        <ErrorMessage class="admin-product-form__error" :name="name" />
    </div>
</template>

<style scoped lang="scss">
.admin-product-form {
    &__field-wrapper {
        display: flex;
        flex-direction: column;

        &:nth-child(3),
        &:nth-child(4) {
            grid-column: span 2;
        }

        &:nth-child(3) {
            .admin-product-form__field {
                height: 100px;
            }
        }
    }

    &__field-title {
        font-size: 1.2rem;
        font-weight: 500;
        width: 8rem;
    }

    &__field {
        font-size: 14px;
        border: 1px solid var(--color-quick-silver);
        border-radius: 10px;
        padding: 12px;
        flex-grow: 1;

        &::placeholder {
            color: var(--color-quick-silver);
        }
    }

    &__description {
        resize: none;
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

@media only screen and (max-width: 575px) {
    .admin-product-form__field-wrapper {
        flex-direction: column;

        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4) {
            grid-column: span 1;
        }
    }

    .admin-product-form {
        &__field {
            font-size: 1.6rem;
            width: 100%;
        }

        &__error {
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
        }
    }
}
</style>