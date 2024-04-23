<script setup>
import {ModalsContainer} from 'vue-final-modal'
import { socket , bindEvents} from "@/socket";
import {useProductStore} from '@/stores/productStore.js'
import { useContactStore } from "@/stores/contactStore";

const productStore = useProductStore()
const contactStore = useContactStore()
contactStore.fetchContactInformation()
productStore.initStore()

socket.off()
socket.connect()
bindEvents()

</script>


<template>
  <div>
    <ModalsContainer />
    <RouterView />
  </div>
</template>

<style lang="scss"></style>
