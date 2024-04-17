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
        if (update.event === 'CREATE' && userStore.isAdmin())
          adminUserStore.addUser(update.instances[0])
        else if (update.event === 'DELETE')
          adminUserStore.deleteUserWeb(update.instances.id) //Maybe
        break
      }
      case 'AuthUserRole': {
        if (update.event === 'UPDATE' && userStore.isAdmin())
          adminUserStore.addRoleToUser(update.instances.userId, update.instances.roleId)
        else if (update.event === 'DELETE')
          adminUserStore.deleteUserRoleWeb(update.lookup.userId, update.lookup.roleId[0])
        break
      }
      case 'Setting': {
        if (update.event === 'UPDATE') contactStore.changeContactInformation(update.instances[0])
        break
      }
    }
  })
}
