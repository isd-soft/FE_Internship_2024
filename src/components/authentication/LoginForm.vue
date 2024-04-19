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
  <div class="login-container">
    <h1 class="text-xl login-container__title">Welcome</h1>
    <p class="text-sm login-container__description">Sign in to continue</p>
    <form @submit="onSubmit" class="login-container__form login-form">
      <input
        class="text-sm login-form__input"
        :class="{ 'login-form__input--error': errors.username }"
        v-model="username"
        v-bind="usernameAttributeList"
        name="username"
        type="username"
        placeholder="Username"
        @focus="$emit('inputStart')"
      />
      <input
        class="text-sm login-form__input"
        :class="{ 'login-form__input--error': errors.password }"
        v-model="password"
        v-bind="passwordAttributeList"
        name="password"
        placeholder="Password"
        type="password"
        @focus="$emit('inputStart')"
      />

      <span class="text-sm login-form__error">{{
        isFailure ? 'Incorrect Username or Password' : ''
      }}</span>

      <button class="text-sm primary-button .text-sm login-form__submit-button">Log In</button>
    </form>
    <button class="text-xs login-container__toggle-button" @click="$emit('changeModal')">
      Not a user? Sign Up!
    </button>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  // padding: 5rem 3.8rem 4rem 4rem;
  padding: 50px 38px 40px 40px;

  &__title {
    color: var(--color-uc-gold);
    margin-bottom: 10px;
    font-size: 32px;
  }

  &__description {
    margin-bottom: 50px;
    font-size: 16px;
  }

  &__toggle-button {
    font-size: 12px;
    border: none;
    background: none;
    width: 100%;
    font-size: 12px;
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
    border-radius: 10px;
    padding: 15px 12px;
    font-size: 16px;
    margin-bottom: 16px;

    ::placeholder {
      color: var(--color-quick-silver);
    }

    &--error {
      outline: 2px solid var(--color-candy-pink);
    }
  }

  &__error {
    min-height: 30px;
    color: var(--color-candy-pink);
    padding-left: 4px;
    font-size: 12px;
  }

  &__submit-button {
    // margin-top: 9.5rem;
    // margin-bottom: 1rem;
    margin-top: 24px;
    margin-bottom: 10px;
    padding: 12px 130px;
    font-size: 16px;
    align-self: center;
    color: var(--color-white);
    background-color: var(--color-uc-gold);
    border: 1px solid var(--color-uc-gold);
  }
}

@media only screen and (max-width: 991px) {
  .login-container {
    &__title {
      font-size: 30px;
    }
    &__description {
      font-size: 14px;
    }
  }
  .login-form {
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
      min-height: 20px;
    }
  }
}

@media only screen and (max-width: 575px) {
  .login-container {
    padding: 0 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100% - 65px);
  }

  .login-form {
    &__input {
      padding: 12px 12px;
      width: min(350px, 80vw);
      margin-bottom: 20px;
    }
    &__error {
      margin-bottom: 2px;
    }

    &__submit-button {
      padding: 12px min(90px, 25vw);
      white-space: nowrap;
    }
  }
}
</style>
