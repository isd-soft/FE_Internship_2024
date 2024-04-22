import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getUserListRequest } from '@/axios/getUserListRequest'
import { updateUserRequest } from '@/axios/updateUserRequest'
import { deleteUserRequest } from '@/axios/deleteUserRequest'
import { getUserRoleRequest } from '@/axios/getUserRoleRequest'
import { useUserStore } from './userStore'
import { useAdminNotificationStore } from './adminNotificationStore'

export const useAdminUserStore = defineStore('adminuser', () => {
  const users = ref([])
  const userRole = ref({})
  const userStore = useUserStore()
  const adminNotificationStore = useAdminNotificationStore()

  const getUsers = async () => {
    const response = await getUserListRequest(userStore.token.key)
    if (response) users.value = response
  }

  //After Update and delete a webhook should be triggered that changes those values I think?
  //If no, then call getUser again
  const updateUsers = async (modifiedUser) => {
    const response = await updateUserRequest(JSON.stringify(modifiedUser), userStore.token.key)
    return response
  }

  const deleteUser = async (userId) => {
    const response = await deleteUserRequest(userStore.token.key, [userId])
    return response
  }

  const getUserRole = async () => {
    const response = await getUserRoleRequest(userStore.token.key)
    if (response) userRole.value = response
  }

  //WebSocket functions:
  const addUserWeb = (usr) => {
    const index = users.value.findIndex((user) => user.id === usr.id)
    if (index === -1) {
      users.value.push(usr)
      adminNotificationStore.addNotification({
        message: `User created</br> Username: ${usr.id}`,
        type: 'success'
      })
    } else {
      users.value[index] = usr
      adminNotificationStore.addNotification({ message: `User updated</br> Username: ${usr.username} `, type: 'info' })
    }
  }

  const deleteUserWeb = (usrId) => {
    const index = users.value.findIndex((user) => user.id === usrId)
    adminNotificationStore.addNotification({ message: `User deleted</br> Username: ${users.value[index].username} `, type: 'error' })
    users.value.splice(index, 1)
  }

  return {
    users,
    userRole,
    getUsers,
    updateUsers,
    deleteUser,
    getUserRole,
    addUserWeb,
    deleteUserWeb
  }
})
