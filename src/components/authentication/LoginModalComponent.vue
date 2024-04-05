<script setup>
import { useForm, useIsFormValid, useIsFormDirty } from 'vee-validate'
import * as yup from 'yup'
import {ref, computed} from "vue"
import {useUserStore} from "@/stores"
import {GenericToast} from "../generics/GenericToast.vue"


//Toast management

const loginSuccess = ref(false)
const loginFinished = ref(false)
const toastType = computed(() => {
    return loginSuccess.value? "success": "error"
})
const toastMessage = computed(() => {
    return loginSuccess.value? "Login Successful": "Login Failed"
})


// Form management

//Disables Button
const isValid = useIsFormValid();
const isDirty = useIsFormDirty();

const isDisabled = computed(() => {
    return !isDirty.value || !isValid.value;
  });




const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
});

const { defineField, errors } = useForm({
    validationSchema: schema,
})

// const { defineField, errors, handleSubmit } = useForm({
//   validationSchema: schema,
// })

const [email, emailAttrs] = defineField('email', {
    validateOnModelUpdate: false,
})
const [password, passwordAttrs] = defineField('password', {
    validateOnModelUpdate: false,
})

// const onSubmit = handleSubmit(values => {
//   const userStore = useUserStore();
//   alert(JSON.stringify(values, null, 2));
//   const {email, password} = values
//   const result = userStore.login(email, password)

// })

async function onSubmit(values){
    const userStore = useUserStore();
    alert(JSON.stringify(values, null, 2));
    const {email, password} = values
    const result = await userStore.login(email, password)
    //If result success
    loginSuccess.value = true
}
</script>

<template>
    <GenericToast v-if="loginFinished" :message="toastMessage" :type="toastType"/>

    <h1>Welcome</h1>
    <p>Sign in to continue</p>
  <form @submit="onSubmit">
    <input v-model="email" v-bind="emailAttrs" name="email" type="email" />
    <span>{{ errors.email }}</span>

    <input v-model="password" v-bind="passwordAttrs" name="password" type="password" />
    <span>{{ errors.password }}</span>

    <button :disabled="isDisabled">Log In</button>
  </form>
    <!-- Emit towards the parent to open the other auth modal -->
    <p @click="$emit('changeModal')">Not a user? Sign Up!</p>
</template>

<style lang="scss" scoped>

</style>
