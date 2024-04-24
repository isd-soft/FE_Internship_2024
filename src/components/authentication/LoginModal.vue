<script setup>
import {createToast} from '../generics/GenericToast.vue';
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


const closeModal = () => vfm.closeAll(vfm.openedModals)

const finishLoginSuccess = () => {
  createToast(`Login successful`, 'success')
  closeModal()
}

const finishRegisterSuccess = () =>{
  createToast(`Welcome, ${userStore.user.firstName}`, 'success')
    closeModal()
}

const finishLoginFail = () => {
  createToast(`Login failed`, 'error')
}

const finishRegisterFail = () => {
  createToast(`Register failed`, 'error')
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
    <div class="auth-modal__toggle-container">
      <CrossIcon class="auth-modal__toggle" @click="closeModal" />
    </div>
    <LoginForm
      v-if="!modalFlag"
      @changeModal="changeModal"
      @success="finishLoginSuccess"
      @failure="finishLoginFail"
    />
    <RegisterForm
      v-if="modalFlag"
      @changeModal="changeModal"
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
