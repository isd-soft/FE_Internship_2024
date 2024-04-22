import {computed} from 'vue'
import { mediaFlagInstruments } from './updateMediaFlag'

const {flag:mediaFlag, toggle:mediaFlagUpdate} = mediaFlagInstruments

export const isMenuVisible = computed(() => mediaFlag.value > 992)