<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from "@/components/PageFooter.vue"
import {ModalsContainer} from 'vue-final-modal'
</script>

<template>
  <header>
    <Navbar />
  </header>
  <RouterView /> 
  <Footer/>
  <ModalsContainer />
</template>

<style lang="scss">

</style>
