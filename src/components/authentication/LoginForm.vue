<script setup>
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { ref, computed } from 'vue'
import { useUserStore } from '../../stores/userStore'

const isFailure = ref(false)

const schema = yup.object({
  username: yup.string().required(),
  password: yup
    .string()
    .min(6, 'Password must contain at least 6 characters')
    .required('Password must not be empty')
})

const { defineField, errors, handleSubmit } = useForm({
  validationSchema: schema
})

const [username, usernameAttributeList] = defineField('username', {
  validateOnModelUpdate: false
})
const [password, passwordAttributeList] = defineField('password', {
  validateOnModelUpdate: false
})

const onSubmit = handleSubmit((values) => {
  const userStore = useUserStore()
  const { username, password } = values
  userStore
    .login(username, password)
    .then((res) => {
      if (res) emit('success')
      else {
        emit('failure')
        isFailure.value = true
      }
    })
    .catch((err) => {
      emit('failure')
      isFailure.value = true
    })
})

const emit = defineEmits(['success', 'failure', 'changeModal', 'inputStart'])
</script>

<template>
  <div class="auth-modal__content login-container">
    <h1 class="text-xl login-container__title">Welcome</h1>
    <p class="text-sm login-container__description">Sign in to continue</p>
    <form @submit="onSubmit" class="login-container__form login-form">
      <input
        class="login-form__input"
        :class="{ 'login-form__input--error': errors.username }"
        v-model="username"
        v-bind="usernameAttributeList"
        name="username"
        type="username"
        placeholder="Username"
        @focus="$emit('inputStart')"
      />
      <input
        class="login-form__input"
        :class="{ 'login-form__input--error': errors.password }"
        v-model="password"
        v-bind="passwordAttributeList"
        name="password"
        placeholder="Password"
        type="password"
        @focus="$emit('inputStart')"
      />

      <span class="login-form__error">{{ isFailure ? 'Incorrect Username or Password' : '' }}</span>

      <button class="primary-button login-form__submit-button">Log In</button>
    </form>
    <button class="login-container__toggle-button" @click="$emit('changeModal')">
      Not a user? Sign Up!
    </button>
  </div>
</template>

<style lang="scss" scoped>
span {
  min-height: 3rem;
}

.login-container {
  padding: 5rem 3.8rem 4rem 4rem;

  &__title {
    color: var(--color-uc-gold);
    margin-bottom: 1rem;
  }

  &__description {
    margin-bottom: 5rem;
  }

  &__toggle-button {
    font-size: 1.2rem;
    border: none;
    background: none;
    width: 100%;
    text-decoration: underline transparent;
    transition: 0.2s ease-out;

    &:hover {
      text-decoration: underline black;
    }
  }
}

.login-form {
  display: flex;
  flex-direction: column;

  &__input {
    border: 1px solid var(--color-quick-silver);
    border-radius: 1rem;
    padding: 1.5rem 1.2rem;
    font-size: 1.6rem;
    margin-bottom: 0.8rem;

    ::placeholder {
      color: var(--color-quick-silver);
    }

    &--error {
      outline: 2px solid var(--color-candy-pink);
    }
  }

  &__error {
    color: var(--color-candy-pink);
    font-size: 1.4rem;
    padding-left: 0.4rem;
  }

  &__submit-button {
    margin-top: 9.5rem;
    margin-bottom: 1rem;
    padding: 1.2rem 13rem;
    align-self: center;
    color: var(--color-white);
    background-color: var(--color-uc-gold);
    font-size: 1.6rem;
    border: 1px solid var(--color-uc-gold);
  }
}
</style>
