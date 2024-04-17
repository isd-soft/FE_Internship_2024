<script setup>
import {ModalsContainer} from 'vue-final-modal'
import { socket , bindEvents} from "@/socket";
import {useProductStore} from '@/stores/productStore.js'

const productStore = useProductStore()
productStore.initStore()


bindEvents()
socket.emit('test');
//Hot reload preparations

</script>


<template>
  <div>
    <ModalsContainer />
    <RouterView />
  </div>
</template>

<style lang="scss"></style>
