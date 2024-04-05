<script setup>
import GenericToast from "../generics/GenericToast.vue"
import { VueFinalModal } from 'vue-final-modal'
import {ref, computed} from "vue"
import LoginFormComponent from "./LoginFormComponent.vue"

console.log("Created Modal")

//Toast management

const loginSuccess = ref(false)
const loginFinished = ref(false)
const toastType = computed(() => {
    return loginSuccess.value? "success": "error"
})
const toastMessage = computed(() => {
    return loginSuccess.value? "Login Successful": "Login Failed"
})


const emit = defineEmits(['close'])
</script>

<template>
    <GenericToast v-if="loginFinished" :message="toastMessage" :type="toastType"/>
    <VueFinalModal
    class="login-modal"
    content-class="login-modal__content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
    @clickOutside="emit('close')"
  >
  <LoginFormComponent />
    </VueFinalModal>
</template>

<style lang="scss">

.login-modal{
    
    &__content{
        background-color: black;
        height: 200px;
        width: 200px;
    }
}
</style>
