import { io } from 'socket.io-client'
import { useProductStore } from './stores/productStore'
import { useUserStore } from './stores/userStore'
import { useAdminUserStore } from './stores/adminUserStore'
import { useContactStore } from './stores/contactStore'


const URL = 'http://172.17.40.64:3000'


const LIVE_UPDATE_EVENT = 'message'

export const socket = io(URL)

export const bindEvents = () => {
  const productStore = useProductStore()
  const adminUserStore = useAdminUserStore()
  const userStore = useUserStore()
  const contactStore = useContactStore()

  console.log('Binding socket events')
    socket.on(LIVE_UPDATE_EVENT, (...args) => {
      const update = args[1]
      switch(update.model){
        case 'Article': {
          console.log(update.instances)
          if(update.event == 'AFTER_CREATE' || update.event == 'AFTER_UPDATE')productStore.addproductMap(update.instances)
          break
        }
        case 'AuthUser':{
          if(update.event == 'AFTER_CREATE' && userStore.isAdmin()) adminUserStore.addUser(update.instances[0]) //Need to update the adminStore
          break
        }
        case 'AuthUserRole':{
          if (update.event == 'AFTER_UPDATE' && userStore.isAdmin() ) adminUserStore.addRoleToUser(update.instances.userId, update.instances.roleId) //Need to update the adminStore
          break}
        case 'Setting': {
          if (update.event == 'AFTER_UPDATE') contactStore.changeContactInformation(update.instances)
          break
        }
      }
    })
}

// export const bindEvents = () => {
  
// }
