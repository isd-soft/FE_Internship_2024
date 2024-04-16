<script setup>
import {ModalsContainer} from 'vue-final-modal'
import { socket } from "@/socket";

//Hot reload preparations
socket.off()
socket.connect()

</script>


<template>
  <div>
    <ModalsContainer />
    <RouterView/>
  </div>
</template>

<style lang="scss"></style>
