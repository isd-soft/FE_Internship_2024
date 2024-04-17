<script setup>
import GenericToast from '../generics/GenericToast.vue'
import { VueFinalModal } from 'vue-final-modal'
import { ref, computed } from 'vue'
import LoginForm from './LoginForm.vue'
import RegisterForm from './RegisterForm.vue'
import { useVfm } from 'vue-final-modal'

const vfm = useVfm()

//Form Management

const modalFlag = ref(false) //False - Login, True - Register

const changeModal = () =>{
  modalFlag.value = !modalFlag.value
}

//Toast management

const loginSuccess = ref(false)
const loginFinished = ref(false)
const toastType = computed(() => {
  return loginSuccess.value ? 'success' : 'error'
})
const toastMessage = computed(() => {
  return loginSuccess.value ? 'Login Successful' : 'Login Failed'
})

const finishLoginSuccess = () => {
  console.log('Login done')
  loginSuccess.value = true
  loginFinished.value = true
  //Needed to trigger Toast. The toast is not inside the Modal, but its appearance depends on loginFinished becoming true,
  //So the modal closing is done 100 sec after finish of this function async
  setTimeout(() => {
    vfm.closeAll(vfm.openedModals)
  }, 100)
}

const finishLoginFail = () => {
  loginFinished.value = true
}
const refreshAttempt = () => {
  loginFinished.value = false
}
</script>

<template>
  <VueFinalModal
    class="auth-modal"
    content-class="auth-modal__content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
    @clickOutside="$emit('close')"
  >
    <GenericToast v-if="loginFinished" :message="toastMessage" :type="toastType" />
    <LoginForm
      v-if="!modalFlag"
      @changeModal="changeModal"
      @inputStart="refreshAttempt"
      @success="finishLoginSuccess"
      @failure="finishLoginFail"
    />
    <RegisterForm
      v-if="modalFlag"
      @changeModal="changeModal"
      @inputStart="refreshAttempt"
      @success="finishLoginSuccess"
      @failure="finishLoginFail"
    />
  </VueFinalModal>
</template>

<style lang="scss">
.auth-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-warm-ivory);
  backdrop-filter: blur(6px);

  &__content {
    background-color: var(--color-old-lace);
    border-radius: 10px;
  }
}
</style>
