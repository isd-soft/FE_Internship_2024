import {ref} from 'vue'

export const mediaFlag = ref(window.innerWidth) // Checks the width of the viewport

export const updateMediaFlag = () => {
    mediaFlag.value = window.innerWidth
  }