import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getUserListRequest } from '@/axios/getUserListRequest'
import { updateUserRequest } from '@/axios/updateUserRequest'
import { deleteUserRequest } from '@/axios/deleteUserRequest'
import { getUserRoleRequest } from '@/axios/getUserRoleRequest'
import {useUserStore} from './userStore'

export const useAdminUserStore = defineStore('adminuser', () => {
    const users = ref([])
    const userRole = ref({})
    const userStore = useUserStore()
    const userLoader = ref(false)
    const userRoleLoader = ref(false)

    const getUsers = async () => {
        userLoader.value = false
        const response = await getUserListRequest(userStore.token.key)
        if(response) users.value = response
        userLoader.value = true
    }

    //After Update and delete a webhook should be triggered that changes those values I think?
    //If no, then call getUser again
    const updateUsers = async(modifiedUser) => {
        const response = await updateUserRequest(JSON.stringify(modifiedUser), userStore.token.key)
        const index = users.value.findIndex(user => user.id === modifiedUser.id)
        users.value[index] = modifiedUser
        if (response) console.log("User updated")
        return response
    }

    const deleteUser = async(userId) =>{
        const response = await deleteUserRequest(userStore.token.key, [userId])
        if (response) users.value = users.value.filter(user => user.id !== userId)
        return response 
    }

    const getUserRole = async() => {
        userRoleLoader.value = false
        const response = await getUserRoleRequest(userStore.token.key)
        if(response) userRole.value = response
        userRoleLoader.value = true
    }

    return {users, userRole, userLoader, userRoleLoader, getUsers, updateUsers, deleteUser, getUserRole}

})