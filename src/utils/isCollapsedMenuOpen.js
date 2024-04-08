import {ref} from 'vue'

export const isCollapsedMenuOpen = ref(false)

export const toggleCollapsedMenu = () => {
    isCollapsedMenuOpen.value = !isCollapsedMenuOpen.value
}