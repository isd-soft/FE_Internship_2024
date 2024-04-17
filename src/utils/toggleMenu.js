import { menuToggleInstruments } from "./menuToggle"
import { reactive } from "vue"

const { flag: isMenuIconVisible, toggle: menuToggle } = menuToggleInstruments

export const menuState = reactive({
    menuState: 'closed'
  })

export const toggleMenu = () => {
    menuState.menuState = menuState.menuState === 'open' ? 'closed' : 'open'
    if (menuState.menuState === 'open') {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    setTimeout(() => {
      menuToggle()
    }, 250)
  }