<script setup>
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { useUserStore } from '../../stores/userStore'

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password')], "Password doesn't match")
})

const { defineField, errors, handleSubmit } = useForm({
  validationSchema: schema
})

const [email, emailAttrs] = defineField('email', {
  validateOnModelUpdate: false
})

const [firstName, firstNameAttrs] = defineField('firstName', {
  validateOnModelUpdate: false
})

const [lastName, lastNameAttrs] = defineField('lastName', {
  validateOnModelUpdate: false
})

const [password, passwordAttrs] = defineField('password', {
  validateOnModelUpdate: false
})

const [confirmPassword, confirmPasswordAttrs] = defineField('confirmPassword', {
  validateOnModelUpdate: false
})

const onSubmit = handleSubmit((values) => {
  const userStore = useUserStore()
  const { email, password, firstName, lastName } = values
  const result = userStore.register(email, password, firstName, lastName)
  result ? emit('success') : emit('failure')
})

const emit = defineEmits(['success', 'failure', 'changeModal', 'inputStart'])
</script>

<template>
  <div class="autho-modal__content register-container">
    <h1 class="text-xl register-container__title">Discover</h1>
    <p class="text-sm register-container__description">Create an account to shop</p>
    <form @submit="onSubmit" class="register-container__form register-form">
      <input
        class="register-form__input"
        v-model="email"
        v-bind="emailAttrs"
        name="email"
        type="email"
        placeholder="Email"
        @focus="$emit('inputStart')"
      />
      <span class="register-form__error">{{ errors.email }}</span>

      <input
        class="register-form__input"
        v-model="firstName"
        v-bind="firstNameAttrs"
        name="firstName"
        type="text"
        placeholder="First Name"
        @focus="$emit('inputStart')"
      />
      <span class="register-form__error">{{ errors.firstName }}</span>

      <input
        class="register-form__input"
        v-model="lastName"
        v-bind="lastNameAttrs"
        name="lastName"
        type="text"
        placeholder="Last Name"
        @focus="$emit('inputStart')"
      />
      <span class="register-form__error">{{ errors.lastName }}</span>

      <input
        class="register-form__input"
        v-model="password"
        v-bind="passwordAttrs"
        name="password"
        type="password"
        placeholder="Password"
        @focus="$emit('inputStart')"
      />
      <span class="register-form__error">{{ errors.password }}</span>

      <input
        class="register-form__input"
        v-model="confirmPassword"
        v-bind="confirmPasswordAttrs"
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        @focus="$emit('inputStart')"
      />
      <span class="register-form__error">{{ errors.confirmPassword }}</span>

      <button class="register-form__submit-button">Sign Up</button>
    </form>
    <p class="register-container__switch-modal-button" @click="$emit('changeModal')">
      Already have an account? Log In!
    </p>
  </div>
</template>

<style lang="scss" scoped>
.register-container {
  padding: 5rem 3.8rem 4rem 4rem;

  &__title {
    color: var(--color-uc-gold);
    margin-bottom: 1rem;
  }

  &__description {
    margin-bottom: 1.6rem;
  }

  &__switch-modal-button {
    font-size: 1.2rem;
    border: none;
    background: none;
    text-decoration: underline;
    width: 100%;
    text-align: center;
  }
}

.register-form {
  display: flex;
  flex-direction: column;

  &__input {
    border: 1px solid var(--color-quick-silver);
    border-radius: 1rem;
    padding: 1.5rem 1.2rem;
    font-size: 1.6rem;

    ::placeholder {
      color: var(--color-quick-silver);
    }

    :focus {
      border: 1px solid var(--color-uc-gold);
    }
  }

  &__error {
    color: var(--color-candy-pink);
    margin-bottom: 0.8rem;
    padding-left: 0.4rem;
  }

  &__submit-button {
    margin-top: 2.4rem;
    margin-bottom: 1rem;
    padding: 1.2rem 0;
    color: var(--color-white);
    background-color: var(--color-uc-gold);
    font-size: 1.6rem;
    border: 1px solid var(--color-uc-gold);
  }
}
</style>
