import {ref} from 'vue'

export const isHamburgerIconVisible = ref(true)

export const menuToggle = () => {
    isHamburgerIconVisible.value = !isHamburgerIconVisible.value
}