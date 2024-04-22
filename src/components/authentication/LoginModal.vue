<script setup>
import GenericToast from '../generics/GenericToast.vue'
import { VueFinalModal } from 'vue-final-modal'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import LoginForm from './LoginForm.vue'
import RegisterForm from './RegisterForm.vue'
import { useVfm } from 'vue-final-modal'
import CrossIcon from '../../assets/icons/CrossIcon.svg'
import { mediaFlagInstruments } from '../../utils/updateMediaFlag.js'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()

//Button management
const { flag: mediaFlag, toggle: updateMediaFlag } = mediaFlagInstruments

//Form Management
const vfm = useVfm()

const modalFlag = ref(false) //False - Login, True - Register
const changeModal = () => {
  modalFlag.value = !modalFlag.value
}

//Toast management
const loginSuccess = ref(false)
const registerSuccess = ref(false)
const authFinished = ref(false)
const toastType = computed(() => {
  return (loginSuccess.value || registerSuccess.value)? 'success' : 'error'
})
const toastMessage = computed(() => {
  if (loginSuccess.value) return 'Login Successful'
  else if (registerSuccess.value)return `Welcome, ${userStore.user.firstName}`  
  else return 'Authentication Failed'
})

const closeModal = () => vfm.closeAll(vfm.openedModals)

const finishLoginSuccess = () => {
  console.log('Login done')
  loginSuccess.value = true
  authFinished.value = true
  //Needed to trigger Toast. The toast is not inside the Modal, but its appearance depends on loginFinished becoming true,
  //So the modal closing is done 100 sec after finish of this function async
  setTimeout(() => {
    closeModal()
  }, 100)
}

const finishRegisterSuccess = () =>{
  registerSuccess.value = true
  authFinished.value = true
  //Needed to trigger Toast. The toast is not inside the Modal, but its appearance depends on loginFinished becoming true,
  //So the modal closing is done 100 sec after finish of this function async
  setTimeout(() => {
    closeModal()
  }, 100)
}

const finishLoginFail = () => {
  authFinished.value = true
}

const finishRegisterFail = () => {
  authFinished.value = true
}
const refreshAttempt = () => {
  authFinished.value = false
}

onMounted(() => window.addEventListener('resize', updateMediaFlag))
onUnmounted(() => window.removeEventListener('resize', updateMediaFlag))
</script>

<template>
  <VueFinalModal
    class="auth-modal"
    content-class="auth-modal__content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
    @clickOutside="$emit('close')"
  >
    <GenericToast v-if="authFinished" :message="toastMessage" :type="toastType" />
    <div class="auth-modal__toggle-container">
      <CrossIcon class="auth-modal__toggle" @click="closeModal" />
    </div>
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
      @success="finishRegisterSuccess"
      @failure="finishRegisterFail"
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
    overflow: auto;
  }

  &__toggle-container {
      padding: min(20px, 4vw) min(20px, 4vw) 0 0;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    &__toggle {
      height: 35px;
      width: 35px;
      &.cross {
        fill: var(--color-granite-gray);
      }

      &:hover{
        cursor: pointer;
      }
    }
}

@media only screen and (max-width: 575px) {
  .auth-modal {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    backdrop-filter: blur(0px);

    &__content {
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      border-radius: 0;
    }
  }
}
</style>
