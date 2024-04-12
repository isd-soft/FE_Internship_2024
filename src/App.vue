<script setup>
import {ModalsContainer} from 'vue-final-modal'
import { useProductStore } from './stores/productStore';

const productStore = useProductStore()
productStore.initStore()

</script>


<template>
  <div>
    <ModalsContainer />
    <RouterView/>
  </div>
</template>

<style lang="scss"></style>
