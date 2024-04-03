<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from "@/components/PageFooter.vue"
import MozaicComponent from "@/components/MozaicComponent.vue"
</script>

<template>
  <header>
    <Navbar />
  </header>
  <RouterView /> 

  <MozaicComponent />

  <Footer/>
</template>

<style lang="scss">

</style>
