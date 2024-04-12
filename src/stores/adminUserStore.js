import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getUserListRequest } from '@/axios/getUserListRequest'
import { updateUserRequest } from '@/axios/updateUserRequest'
import { deleteUserRequest } from '@/axios/deleteUserRequest'
import { getUserRoleRequest } from '@/axios/getUserRoleRequest'
import {useUserStore} from './userStore'

export const useAdminUserStore = defineStore('adminuser', () => {
    const users = ref({})
    const userRoles = ref({})
    const userStore = useUserStore()
    const usersLoader = ref(false)
    const userRolesLoader = ref(false)

    const getUsers = async () => {
        usersLoader.value = false
        const response = await getUserListRequest(userStore.token.key)
        if(response) users.value = response
        usersLoader.value = true
    }

    //After Update and delete a webhook should be triggered that changes those values I think?
    //If no, then call getUser again
    const updateUsers = async(modifiedUser) => {
        const response = await updateUserRequest(JSON.stringify(modifiedUser), userStore.token.key)
        return response
    }

    const deleteUser = async(userId) =>{
        const response = await deleteUserRequest(JSON.stringify([userId]), userStore.token.key)
        return response 
    }

    const getUserRole = async() => {
        userRolesLoader.value = false
        const response = await getUserRoleRequest(userStore.token.key)
        if(response) userRoles.value = response
        console.log(userRoles.value)
        userRolesLoader.value = true
    }

    return {users, usersLoader, userRolesLoader, getUsers, updateUsers, deleteUser, getUserRole}

})