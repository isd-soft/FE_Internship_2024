import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getUserListRequest } from '@/axios/getUserListRequest'
import { updateUserRequest } from '@/axios/updateUserRequest'
import { deleteUserRequest } from '@/axios/deleteUserRequest'

export const useAdminUserStore = defineStore('adminuser', () => {
    const users = ref({})

    const getUsers = async (token) => {
        const response = await getUserListRequest(token)
        if(response) users.value = response
    }

    //After Update and delete a webhook should be triggered that changes those values I think?
    //If no, then call getUser again
    const updateUsers = async(token, modifiedUser) => {
        const response = await updateUserRequest(JSON.stringify(modifiedUser), token)
        return response
    }

    const deleteUser = async(token, userId) =>{
        const response = await deleteUserRequest(JSON.stringify([userId]), token)
        return response 
    }

    return {users, getUsers, updateUsers, deleteUser}

})