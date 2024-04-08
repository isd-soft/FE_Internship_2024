import {ref} from 'vue'

 const mediaFlag = ref(window.innerWidth)

 const updateMediaFlag = () => {
    mediaFlag.value = window.innerWidth
  }

export const mediaFlagInstruments = {
    flag: mediaFlag,
    toggle: updateMediaFlag
}