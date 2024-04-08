import {computed} from 'vue'
import { mediaFlag } from './updateMediaFlag'

export const isMenuVisible = computed(() => mediaFlag.value > 768)