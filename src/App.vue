<script setup>
import PageHeader from './components/shared/PageHeader.vue'
import PageFooter from './components/shared/PageFooter.vue'
import {ModalsContainer} from 'vue-final-modal'

</script>

<!-- TEMPORARY RENDER IN THE APP COMPONENT. -->

<!-- TODO: SET THE COMPONENTS IN THE CORESPONDING VIEWS. APPLY THE ROUTER IN THE APP COMPONENT AFTER THAT. -->

<template>
  <div>
    <!-- <PageHeader /> -->
    <RouterView />
    <PageFooter />
    <ModalsContainer />
  </div> 
</template>

<style lang="scss"></style>
