import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getUserListRequest } from '@/axios/getUserListRequest'
import { updateUserRequest } from '@/axios/updateUserRequest'
import { deleteUserRequest } from '@/axios/deleteUserRequest'
import {useUserStore} from './userStore'

export const useAdminUserStore = defineStore('adminuser', () => {
    const users = ref({})
    const userStore = useUserStore()

    const getUsers = async () => {
        const response = await getUserListRequest(userStore.token.key)
        if(response) users.value = response
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

    return {users, getUsers, updateUsers, deleteUser}

})