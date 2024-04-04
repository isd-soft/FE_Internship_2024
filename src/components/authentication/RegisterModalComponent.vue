<script setup>
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  confirmPassword: yup.string().required().oneOf([yup.ref("password")], "Password doesn't match")
})

const { defineField, errors, handleSubmit } = useForm({
  validationSchema: schema,
})

const [email, emailAttrs] = defineField('email', {
  validateOnModelUpdate: false,
})

const [firstName, firstNameAttrs] = defineField('firstName', {
  validateOnModelUpdate: false,
})

const [lastName, lastNameAttrs] = defineField('lastName', {
  validateOnModelUpdate: false,
})

const [password, passwordAttrs] = defineField('password', {
  validateOnModelUpdate: false,
})

const [confirmPassword, confirmPasswordAttrs] = defineField('confirmPassword', {
  validateOnModelUpdate: false,
})

const onSubmit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2));
})
</script>

<template>
    <h1>Discover</h1>
    <p>Create an account to shop</p>
  <form @submit="onSubmit">
    <input v-model="email" v-bind="emailAttrs" name="email" type="email" />
    <span>{{ errors.email }}</span>

    <input v-model="firstName" v-bind="firstNameAttrs" name="firstName" type="text" />
    <span>{{ errors.firstName }}</span>

    <input v-model="lastName" v-bind="lastNameAttrs" name="lastName" type="text" />
    <span>{{ errors.lastName }}</span>

    <input v-model="password" v-bind="passwordAttrs" name="password" type="password" />
    <span>{{ errors.password }}</span>

    <input v-model="confirmPassword" v-bind="confirmPasswordAttrs" name="confirmPassword" type="password" />
    <span>{{ errors.confirmPassword }}</span>

    <button>Sign Up</button>
  </form>
  <!-- Emit towards the parent to open the other auth modal -->
  <p @click="$emit('changeModal')">Already have an account? Log In!</p>
</template>

<style lang="scss" scoped>

</style>
