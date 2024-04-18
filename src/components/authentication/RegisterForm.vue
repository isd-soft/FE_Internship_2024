<script setup>
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { useUserStore } from '../../stores/userStore'

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
    .register(email, username, password, firstName, lastName)
    .then((res) => (res ? emit('success') : emit('failure')))
    .catch((err) => emit('failure'))
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
        :class="{ 'register-form__input--error': errors.email }"
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
        :class="{ 'register-form__input--error': errors.firstName }"
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
        :class="{ 'register-form__input--error': errors.password }"
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
        :class="{ 'register-form__input--error': errors.username }"
        v-model="username"
        v-bind="usernameAttributeList"
        name="username"
        type="username"
        placeholder="Username"
        @focus="$emit('inputStart')"
      />
      <span class="register-form__error">{{ errors.username }}</span>


      <input
        class="register-form__input"
        :class="{ 'register-form__input--error': errors.lastName }"
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
        :class="{ 'register-form__input--error': errors.confirmPassword }"
        v-model="confirmPassword"
        v-bind="confirmPasswordAttributeList"
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        @focus="$emit('inputStart')"
      />
      <span class="register-form__error">{{ errors.confirmPassword }}</span>

    </form>
    <button class="primary-button register-form__submit-button" @click="onSubmit">Sign Up</button>
    <p class="register-container__toggle-button" @click="$emit('changeModal')">
      Already have an account? Log In!
    </p>
  </div>
</template>

<style lang="scss" scoped>
span {
  height: 1.2rem;
}

.register-container {
  padding: 5rem 3.8rem 4rem 4rem;
  display: flex;
  flex-direction: column;

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
    width: 100%;
    text-align: center;
    text-decoration: underline transparent;
    transition: .2s ease-out;

    &:hover{
      cursor: pointer;
      text-decoration: underline black;
    }
  }
}

.register-form {
    display: grid;
    // grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 3fr 1fr);
    grid-auto-flow:column;
    grid-column-gap: 2rem;
    // grid-gap: 1rem;
    &__input {
    border: 1px solid var(--color-quick-silver);
    border-radius: 1rem;
    padding: 1.5rem 1.2rem;
    margin-bottom: 0.2rem;
    font-size: 1.6rem;
    ::placeholder {
      color: var(--color-quick-silver);
    }

    &--error {
      outline: 2px solid var(--color-candy-pink);
    }
    }

    &__submit-button {
    margin-top: 2.4rem;
    margin-bottom: 1rem;
    padding: 1.2rem 11rem;
    color: var(--color-white);
    background-color: var(--color-uc-gold);
    font-size: 1.6rem;
    border: 1px solid var(--color-uc-gold);
    align-self: center;
    
  }

  &__error {
    color: var(--color-candy-pink);
    font-size: 1rem;
    margin-bottom: 0.1rem;
    padding-left: 0.4rem;
  }
  }

  

@media only screen and (max-width: 768px) {
  .register-form {
  display: flex;
  flex-direction: column;

    &__submit-button {
    margin-top: 2.4rem;
    margin-bottom: 1rem;
    padding: 1.2rem 11rem;
    color: var(--color-white);
    background-color: var(--color-uc-gold);
    font-size: 1.6rem;
    border: 1px solid var(--color-uc-gold);
  }
}

}
</style>
