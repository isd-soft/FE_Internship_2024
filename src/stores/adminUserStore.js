import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getUserListRequest } from '@/axios/getUserListRequest'
import { updateUserRequest } from '@/axios/updateUserRequest'
import { deleteUserRequest } from '@/axios/deleteUserRequest'
import { getUserRoleRequest } from '@/axios/getUserRoleRequest'
import { useUserStore } from './userStore'

export const useAdminUserStore = defineStore('adminuser', () => {
  const users = ref([])
  const userRole = ref({})
  const userStore = useUserStore()

  const getUsers = async () => {
    const response = await getUserListRequest(userStore.token.key)
    if (response) users.value = response
  }

  //After Update and delete a webhook should be triggered that changes those values I think?
  //If no, then call getUser again
  const updateUsers = async (modifiedUser) => {
    const response = await updateUserRequest(JSON.stringify(modifiedUser), userStore.token.key)
    const index = users.value.findIndex((user) => user.id === modifiedUser.id)
    users.value[index] = modifiedUser
    if (response) console.log('User updated')
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
    console.log('Hello from AddUserWeb ', usr)
    const index = users.value.findIndex((user) => user.id === usr.id)
    if (index === -1) users.value.push(usr)
    else users.value[index] = usr
    console.log('User added: ', users.value)
  }

  //This is not getting called
  const updateUserRoleWeb = (usrId, roleId) => {
    const index = users.value.findIndex((user) => user.id === usrId)
    const role = userRole.value.filter((r) => r.id === roleId)[0]
    users.value[index].roles.push(role)
    console.log('User role updated: ', users.value[index])
  }

  const deleteUserWeb = (usrId) => {
    const index = users.value.findIndex((user) => user.id === usrId)
    console.log('Deleting user: ', usrId)
    users.value.splice(index, 1)
  }

  //This is not called
  const deleteUserRoleWeb = (usrId, roleId) => {}
  return {
    users,
    userRole,
    getUsers,
    updateUsers,
    deleteUser,
    getUserRole,
    addUserWeb,
    updateUserRoleWeb,
    deleteUserWeb,
    deleteUserRoleWeb
  }
})
