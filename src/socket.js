import { io } from 'socket.io-client'
import { useProductStore } from './stores/productStore'


const URL = 'http://172.17.40.64:3000'


const LIVE_UPDATE_EVENT = 'message'

export const socket = io(URL)

export const bindEvents = () => {
  const productStore = useProductStore()

  console.log('Binding socket events')
    socket.on(LIVE_UPDATE_EVENT, (...args) => {
      const update = args[1]
      switch(update.model){
        case 'Article': {
          console.log(update.instances)
          productStore.addproductMap(update.instances)
          break
        }
      }
    })
}

// export const bindEvents = () => {
  
// }
