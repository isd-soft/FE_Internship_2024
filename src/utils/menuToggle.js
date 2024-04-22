import {ref} from 'vue'

const isMenuIconVisible = ref(true)

const menuToggle = () => {
    isMenuIconVisible.value = !isMenuIconVisible.value
}

export const menuToggleInstruments = {
    flag: isMenuIconVisible,
    toggle: menuToggle
}