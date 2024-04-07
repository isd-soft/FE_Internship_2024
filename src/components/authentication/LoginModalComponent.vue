<script setup>
import GenericToast from '../generics/GenericToast.vue'
import { VueFinalModal } from 'vue-final-modal'
import { ref, computed } from 'vue'
import LoginFormComponent from './LoginFormComponent.vue'
// import LoginFormComponent from "./LoginFormComponent.vue"

console.log('Created Modal')

//Toast management

const loginSuccess = ref(false)
const loginFinished = ref(false)
const toastType = computed(() => {
  return loginSuccess.value ? 'success' : 'error'
})
const toastMessage = computed(() => {
  return loginSuccess.value ? 'Login Successful' : 'Login Failed'
})

function finishLoginSuccess(){
    console.log("Login done")
    loginSuccess.value = true
    loginFinished.value =true
    emit('close')
}

function finishLoginFail(){
    loginFinished.value=true
}
function refreshAttempt(){
    loginFinished.value = false
}

const emit = defineEmits(['close', 'success', 'failure', 'switch'])
</script>

<template>
    <VueFinalModal
      class="login-modal"
      content-class="login-modal__content"
      overlay-transition="vfm-fade"
      content-transition="vfm-fade"
      @clickOutside="emit('close')"
    >
      <slot>
        <GenericToast v-if="loginFinished" :message="toastMessage" :type="toastType" /> 
        <LoginFormComponent @changeModal="emit('switch')" @inputStart="refreshAttempt" @success="finishLoginSuccess" @failure="finishLoginFail"/>
      </slot>
    </VueFinalModal>
</template>

<style lang="scss">
.login-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-warm-ivory);
  backdrop-filter: blur(12px);

  &__content {
    display: flex;
    background: #fff;
    border-radius: 0.5rem;
    column-gap: 3.5vw;
    max-width: 70%;
  }
}
</style>
