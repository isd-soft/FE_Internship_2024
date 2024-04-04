<script setup>
import PageHeader from './components/shared/PageHeader.vue'
import HeroSection from './components/home/HeroSection.vue'
import CategorySection from './components/home/CategorySection.vue'
import ProductSection from './components/home/ProductSection.vue'
import MozaicComponent from './components/home/MozaicComponent.vue'
import PageFooter from './components/shared/PageFooter.vue'
</script>

<!-- TEMPORARY RENDER IN THE APP COMPONENT. -->

<!-- TODO: SET THE COMPONENTS IN THE CORESPONDING VIEWS. APPLY THE ROUTER IN THE APP COMPONENT AFTER THAT. -->

<template>
  <div>
    <PageHeader />
    <HeroSection />
    <CategorySection />
    <ProductSection />
    <MozaicComponent />
    <PageFooter />
  </div> 
</template>

<style lang="scss"></style>
