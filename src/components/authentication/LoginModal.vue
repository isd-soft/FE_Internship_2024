<script setup>
import GenericToast from '../generics/GenericToast.vue'
import { VueFinalModal } from 'vue-final-modal'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import LoginForm from './LoginForm.vue'
import RegisterForm from './RegisterForm.vue'
import { useVfm } from 'vue-final-modal'
import CrossIcon from '../../assets/icons/CrossIcon.svg'
import { mediaFlagInstruments } from '../../utils/updateMediaFlag.js'

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
const loginFinished = ref(false)
const toastType = computed(() => {
  return loginSuccess.value ? 'success' : 'error'
})
const toastMessage = computed(() => {
  return loginSuccess.value ? 'Login Successful' : 'Login Failed'
})

const closeModal = () => vfm.closeAll(vfm.openedModals)

const finishLoginSuccess = () => {
  console.log('Login done')
  loginSuccess.value = true
  loginFinished.value = true
  //Needed to trigger Toast. The toast is not inside the Modal, but its appearance depends on loginFinished becoming true,
  //So the modal closing is done 100 sec after finish of this function async
  setTimeout(() => {
    closeModal()
  }, 100)
}

const finishLoginFail = () => {
  loginFinished.value = true
}
const refreshAttempt = () => {
  loginFinished.value = false
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
    <GenericToast v-if="loginFinished" :message="toastMessage" :type="toastType" />
    <div class="auth-modal__toggle-container">
      <CrossIcon v-if="mediaFlag < 575" class="auth-modal__toggle" @click="closeModal" />
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

@media only screen and (max-width: 575px) {
  .auth-modal {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    backdrop-filter: blur(0px);

    &__content {
      width: 100vw;
      height: 100vh;
      justify-content: center;
      align-items: center;
    }

    &__toggle-container {
      padding: 30px 30px 0 0;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    &__toggle {
      height: 40px;
      width: 40px;
      &.cross {
        fill: var(--color-granite-gray);
      }

      &:hover{
        cursor: pointer;
      }
    }
  }
}
</style>
