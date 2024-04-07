import {ref, computed} from 'vue'

export const mediaFlag = ref(window.innerWidth) // Checks the width of the viewport
export const isMenuVisible = computed(() => mediaFlag.value > 768) // Sets the visibility of non-collapsable menu
export const isCollapsedMenuOpen = ref(false) // Checks if the collapsible menu open

// Updates the values of the mediaFlag so it doesn't stay the same
export const updateMediaFlag = () => {
    mediaFlag.value = window.innerWidth
  }

// Changes the value of isCollapsedMenuOpen on the opposite
export const toggleCollapsedMenu = () => {
    isCollapsedMenuOpen.value = !isCollapsedMenuOpen.value
}