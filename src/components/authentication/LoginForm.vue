<script setup>
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { ref, computed } from 'vue'
import { useUserStore } from '../../stores/userStore'

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required()
})

const { defineField, errors, handleSubmit } = useForm({
  validationSchema: schema
})

const [email, emailAttrs] = defineField('email', {
  validateOnModelUpdate: false
})
const [password, passwordAttrs] = defineField('password', {
  validateOnModelUpdate: false
})

const onSubmit = handleSubmit((values) => {
  const userStore = useUserStore()
  const { email, password } = values
  const result = userStore.login(email, password)
  result ? emit('success') : emit('failure')
})

const emit = defineEmits(['success', 'failure', 'changeModal', 'inputStart'])
</script>

<template>
  <div class="autho-modal__content login-container">
    <h1 class="text-xl login-container__title">Welcome</h1>
    <p class="text-sm login-container__description">Sign in to continue</p>
    <form @submit="onSubmit" class="login-container__form login-form">
      <input
        class="login-form__input"
        v-model="email"
        v-bind="emailAttrs"
        name="email"
        type="email"
        placeholder="Email"
        @focus="$emit('inputStart')"
      />
      <span class="login-form__error">{{ errors.email }}</span>

      <input
        class="login-form__input"
        v-model="password"
        v-bind="passwordAttrs"
        name="password"
        placeholder="Password"
        type="password"
        @focus="$emit('inputStart')"
      />
      <span class="login-form__error">{{ errors.password }}</span>

      <button class="login-form__submit-button">Log In</button>
    </form>
    <button class="login-container__switch-modal-button" @click="$emit('changeModal')">
      Not a user? Sign Up!
    </button>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  padding: 5rem 3.8rem 4rem 4rem;

  &__title {
    color: var(--color-uc-gold);
    margin-bottom: 1rem;
  }

  &__description {
    margin-bottom: 5rem;
  }

  &__switch-modal-button {
    font-size: 1.2rem;
    border: none;
    background: none;
    text-decoration: underline;
    width: 100%;
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
    margin-top: 9.5rem;
    margin-bottom: 1rem;
    padding: 1.2rem 0;
    color: var(--color-white);
    background-color: var(--color-uc-gold);
    font-size: 1.6rem;
    border: 1px solid var(--color-uc-gold);
  }
}
</style>
