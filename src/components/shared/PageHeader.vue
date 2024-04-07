<script setup>
import HeaderLogo from './HeaderLogo.vue'
import HeaderNavigation from './HeaderNavigation.vue';
import GenericLink from '../generics/GenericLink.vue';
import CartIcon from '../../assets/icons/CartIcon.svg';
import UserIcon from '../../assets/icons/UserIcon.svg';
import LoginModalComponent from '../authentication/LoginModalComponent.vue'
import LoginFormComponent from '../authentication/LoginFormComponent.vue'
import RegisterModalComponent from '../authentication/RegisterModalComponent.vue'
import { useModal } from 'vue-final-modal'
import {ref} from 'vue'

const authModalSelectionToggle = ref(false) // False - Login, True - Register

const openModal = () => {
   console.log("I have opened")
    open()
}

const { open } = useModal({
  component: LoginModalComponent,
  attrs: {}, 
  slots: {
    LoginFormComponent
  }})



</script>

<template>
    <header class="header">
        <div class="header__container container">
            <HeaderLogo />

            <HeaderNavigation />

            <div class="header__link-wrapper">
                <GenericLink href="#" containerClass="header__link">
                    <CartIcon />
                </GenericLink>

                <div @click="openModal" containerClass="header__link">
                    <UserIcon />
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1380px;
    padding: 30px 0;
    margin: 0 auto;
}

.header__link-wrapper {
    display: flex;
    align-items: center;
    column-gap: 24px;
}
</style>