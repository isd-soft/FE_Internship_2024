<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from "@/components/PageFooter.vue"
</script>

<template>
  <header>
    <Navbar />
  </header>

  <RouterView />

<Footer/>
</template>

<style lang="scss">

</style>
