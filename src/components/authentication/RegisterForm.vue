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

const [email, emailAttributeList] = defineField('email', {
  validateOnModelUpdate: false
})

const [firstName, firstNameAttributeList] = defineField('firstName', {
  validateOnModelUpdate: false
})

const [lastName, lastNameAttributeList] = defineField('lastName', {
  validateOnModelUpdate: false
})

const [password, passwordAttributeList] = defineField('password', {
  validateOnModelUpdate: false
})

const [confirmPassword, confirmPasswordAttributeList] = defineField('confirmPassword', {
  validateOnModelUpdate: false
})

const onSubmit = handleSubmit((values) => {
  const userStore = useUserStore()
  const { email, password, firstName, lastName } = values
  userStore.register(email, password, firstName, lastName).then(res => res? emit('success') : emit('failure')).catch(err => emit('failure') )
})

const emit = defineEmits(['success', 'failure', 'changeModal', 'inputStart'])
</script>

<template>
  <div class="auth-modal__content register-container">
    <h1 class="text-xl register-container__title">Discover</h1>
    <p class="text-sm register-container__description">Create an account to shop</p>
    <form @submit="onSubmit" class="register-container__form register-form">
      <input
        class="register-form__input"
        v-model="email"
        v-bind="emailAttributeList"
        name="email"
        type="email"
        placeholder="Email"
        @focus="$emit('inputStart')"
      />
      <span class="register-form__error">{{ errors.email }}</span>

      <input
        class="register-form__input"
        v-model="firstName"
        v-bind="firstNameAttributeList"
        name="firstName"
        type="text"
        placeholder="First Name"
        @focus="$emit('inputStart')"
      />
      <span class="register-form__error">{{ errors.firstName }}</span>

      <input
        class="register-form__input"
        v-model="lastName"
        v-bind="lastNameAttributeList"
        name="lastName"
        type="text"
        placeholder="Last Name"
        @focus="$emit('inputStart')"
      />
      <span class="register-form__error">{{ errors.lastName }}</span>

      <input
        class="register-form__input"
        v-model="password"
        v-bind="passwordAttributeList"
        name="password"
        type="password"
        placeholder="Password"
        @focus="$emit('inputStart')"
      />
      <span class="register-form__error">{{ errors.password }}</span>

      <input
        class="register-form__input"
        v-model="confirmPassword"
        v-bind="confirmPasswordAttributeList"
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        @focus="$emit('inputStart')"
      />
      <span class="register-form__error">{{ errors.confirmPassword }}</span>

      <button class="register-form__submit-button">Sign Up</button>
    </form>
    <p class="register-container__toggle-button" @click="$emit('changeModal')">
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

  &__toggle-button {
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
