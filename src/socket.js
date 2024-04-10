import { io } from 'socket.io-client'
import { useProductStore } from './stores/productStore'

const URL = '172.17.40.64:3000'

const LIVE_UPDATE_EVENT = 'live:entity-hook'

export const socket = io(URL)

socket.on(LIVE_UPDATE_EVENT, (...args) => {
  //handle somehow
})
