<script setup>
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { useUserStore } from '../../stores/userStore'
import GenericLink from '../generics/GenericLink.vue'

const schema = yup.object({
  firstName: yup.string().required('This is a required field'),
  lastName: yup.string().required('This is a required field'),
  email: yup
    .string()
    .email("The introduced value isn't an email")
    .required('This is a required field'),
  username: yup.string().required('This is a required field'),
  password: yup
    .string()
    .min(6, 'The password must contain at least 6 characters')
    .required('This is a required field'),
  confirmPassword: yup
    .string()
    .required('This is a required field')
    .oneOf([yup.ref('password')], "Password doesn't match")
})

const { defineField, errors, handleSubmit } = useForm({
  validationSchema: schema
})

const [email, emailAttributeList] = defineField('email', {
  validateOnModelUpdate: false
})

const [username, usernameAttributeList] = defineField('username', {
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
  const { email, username, password, firstName, lastName } = values
  userStore
    .register(email.trim(), username.trim(), password.trim(), firstName.trim(), lastName.trim())
    .then((res) => (res ? emit('success') : emit('failure')))
    .catch((err) => emit('failure'))
})

const emit = defineEmits(['success', 'failure', 'changeModal'])
</script>

<template>
  <div class="register-container">
    <h1 class="text-xl register-container__title">Discover</h1>
    <p class="text-sm register-container__description">Create an account to shop</p>
    <form @submit="onSubmit" class="register-container__form register-form">
      <input
        class="text-sm register-form__input"
        :class="{ 'register-form__input--error': errors.email }"
        style="grid-column: 1 /1"
        v-model="email"
        v-bind="emailAttributeList"
        name="email"
        type="email"
        placeholder="Email"
      />
      <span class="register-form__error" style="grid-column: 1 /1">{{ errors.email }}</span>

      <input
        class="text-sm register-form__input"
        :class="{ 'register-form__input--error': errors.username }"
        style="grid-column: 2 / 2"
        v-model="username"
        v-bind="usernameAttributeList"
        name="username"
        type="username"
        placeholder="Username"
      />
      <span class="register-form__error" style="grid-column: 2 /2">{{ errors.username }}</span>

      <input
        class="text-sm register-form__input"
        :class="{ 'register-form__input--error': errors.firstName }"
        v-model="firstName"
        v-bind="firstNameAttributeList"
        style="grid-column: 1 /1"
        name="firstName"
        type="text"
        placeholder="First Name"
      />
      <span style="grid-column: 1 /1" class="register-form__error">{{ errors.firstName }}</span>

      <input
        class="text-sm register-form__input"
        :class="{ 'register-form__input--error': errors.lastName }"
        style="grid-column: 2 / 2"
        v-model="lastName"
        v-bind="lastNameAttributeList"
        name="lastName"
        type="text"
        placeholder="Last Name"
      />
      <span class="register-form__error" style="grid-column: 2 /2">{{ errors.lastName }}</span>

      <input
        class="text-sm register-form__input"
        :class="{ 'register-form__input--error': errors.password }"
        style="grid-column: 1 / 1"
        v-model="password"
        v-bind="passwordAttributeList"
        name="password"
        type="password"
        placeholder="Password"
      />
      <span style="grid-column: 1 /1" class="register-form__error">{{ errors.password }}</span>

      <input
        class="text-sm register-form__input"
        :class="{ 'register-form__input--error': errors.confirmPassword }"
        style="grid-column: 2 / 2"
        v-model="confirmPassword"
        v-bind="confirmPasswordAttributeList"
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
      />
      <span style="grid-column: 2 /2" class="register-form__error">{{
        errors.confirmPassword
      }}</span>
    </form>
    <button class="text-sm primary-button register-form__submit-button" @click="onSubmit">
      Sign Up
    </button>
    <span class="text-xs register-container__toggle-button" @click="$emit('changeModal')">
      <p class="register-container__toggle-text">Already have an account?</p>
      <GenericLink class="register-container__toggle-link">Log In!</GenericLink>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.register-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 60px 40px 60px;
  display: flex;

  &__title {
    color: var(--color-uc-gold);
    margin-bottom: 10px;
    font-size: 32px;
  }

  &__description {
    margin-bottom: 30px;
    font-size: 16px;
  }

  &__toggle-button {
    border: none;
    background: none;
    width: 100%;
    font-size: 12px;
    display: flex;
    justify-content: center;
  }

  &__toggle-text {
    font-size: 12px;
    margin-right: 3px;
  }

  &__toggle-link {
    font-size: 12px;
    text-decoration: underline transparent;
    transition: 0.2s ease-out;
    color: var(--color-black);

    &:hover {
      cursor: pointer;
      text-decoration: underline black;
    }
    &:active {
      color: var(--color-black);
    }
  }
}

.register-form {
  display: grid;
  grid-template-rows: repeat(3, 3fr 1fr);
  grid-auto-flow: column;
  grid-column-gap: 16px;

  &__input {
    border: 1px solid var(--color-quick-silver);
    border-radius: 10px;
    padding: 12px 12px;
    font-size: 14px;
    margin-bottom: 2px;
    min-width: 260px;
    ::placeholder {
      color: var(--color-quick-silver);
    }

    &--error {
      border: 1px solid var(--color-candy-pink);
      outline: 1px solid var(--color-candy-pink);
    }
  }

  &__submit-button {
    margin-top: 24px;
    margin-bottom: 10px;
    padding: 12px 110px;
    font-size: 16px;
    color: var(--color-white);
    background-color: var(--color-uc-gold);
    border: 1px solid var(--color-uc-gold);
    align-self: center;
  }

  &__error {
    color: var(--color-candy-pink);
    font-size: 10px;
    padding-left: 4px;
    height: 16px;
  }
}

@media only screen and (max-width: 991px) {
  .register-container {
    &__title {
      font-size: 30px;
    }
    &__description {
      font-size: 14px;
    }
  }
  .register-form {
    display: flex;
    flex-direction: column;
    &__input {
      font-size: 14px;
    }
    &__submit-button {
      margin-top: 18px;
      margin-bottom: 10px;
      font-size: 14px;
    }

    &__error {
      margin-bottom: 3px;
    }
  }

  @media only screen and (max-width: 575px) {
    .register-container {
      padding: 0 5rem;
      height: calc(100% - 80px);
      align-items: center;
    }
    .register-form {
      &__input {
        padding: 12px 12px;
        width: min(350px, 80vw);
      }
      &__error {
        margin-bottom: 2px;
        height: 17px;
      }

      &__submit-button {
        padding: 12px min(90px, 25vw);
        white-space: nowrap;
      }
    }
  }
}
</style>
