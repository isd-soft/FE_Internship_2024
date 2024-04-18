import { io } from 'socket.io-client'
import { useProductStore } from './stores/productStore'
import { useUserStore } from './stores/userStore'
import { useAdminUserStore } from './stores/adminUserStore'
import { useContactStore } from './stores/contactStore'

const URL = 'http://172.17.40.64:3000'

const LIVE_UPDATE_EVENT = 'live:entity-hook'

export const socket = io(URL)

export const bindEvents = () => {
  const productStore = useProductStore()
  const adminUserStore = useAdminUserStore()
  const userStore = useUserStore()
  const contactStore = useContactStore()

  console.log('Binding socket events')
  socket.on(LIVE_UPDATE_EVENT, (...args) => {
    const update = args[0]
    console.log(update)
    switch (update.model) {
      case 'Article': {
        console.log(update.instances)
        if (update.event === 'CREATE' || update.event === 'UPDATE')
          productStore.addproductMap(update.instances)
        else if (update.event === 'DELETE') productStore.removeproductMap(update.instances[0].id) //Probably
        break
      }
      case 'AuthUser': {
        console.log('Reached here')
        console.log(update.event === 'CREATE')
        console.log(userStore.isAdmin())
        if (update.event === 'CREATE' && userStore.isAdmin()) {
          console.log('Trying to update')
          adminUserStore.addUserWeb(update.instances[0])
        } else if (update.event === 'DELETE') adminUserStore.deleteUserWeb(update.instances[0].id) //Maybe
        break
      }
      case 'Setting': {
        if (update.event === 'UPDATE') contactStore.changeContactInformation(update.instances[0])
        break
      }
    }
  })
}
