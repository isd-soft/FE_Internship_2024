<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from "@/components/PageFooter.vue"
import {ModalsContainer} from 'vue-final-modal'
import MozaicComponent from "@/components/MozaicComponent.vue"

</script>

<template>
  <header>
    <Navbar />
  </header>
  <RouterView /> 

  <MozaicComponent />

  <Footer/>
  <ModalsContainer />
</template>

<style lang="scss">

</style>
