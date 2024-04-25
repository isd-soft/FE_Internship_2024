import { io } from 'socket.io-client'
import { useProductStore } from './stores/productStore'
import { useUserStore } from './stores/userStore'
import { useAdminUserStore } from './stores/adminUserStore'
import { useContactStore } from './stores/contactStore'

// const URL = 'http://172.17.40.64:3000'
const URL = 'https://furniro.inthergroup.com/ws'

const LIVE_UPDATE_EVENT = 'live:entity-hook'

export const socket = io(URL)

export const bindEvents = () => {
  const productStore = useProductStore()
  const adminUserStore = useAdminUserStore()
  const userStore = useUserStore()
  const contactStore = useContactStore()

  socket.on(LIVE_UPDATE_EVENT, (...args) => {
    const update = args[0]
    switch (update.model) {
      case 'Article': {
        if (update.event === 'CREATE' || update.event === 'UPDATE')
          productStore.addproductMap(update.instances)
        else if (update.event === 'DELETE') productStore.removeproductMap(update.instances[0].id)
        break
      }
      case 'AuthUser': {
        if (update.event === 'CREATE' && userStore.isAdmin()) {
          adminUserStore.addUserWeb(update.instances[0])
        } else if (update.event === 'DELETE') adminUserStore.deleteUserWeb(update.instances[0].id)
        break
      }
      case 'Setting': {
        if (update.event === 'UPDATE') contactStore.changeContactInformation(update.instances[0])
        break
      }
    }
  })
}
