import {ref} from 'vue'

const isCollapsedMenuOpen = ref(false)

const toggleCollapsedMenu = () => {
    isCollapsedMenuOpen.value = !isCollapsedMenuOpen.value
}

export const collapsedMenuInstruments = {
    flag: isCollapsedMenuOpen,
    toggle: toggleCollapsedMenu
}