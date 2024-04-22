import { defineStore } from 'pinia'
import {ref} from 'vue'

export const useAdminNotificationStore = defineStore('notification', () => {
    const notificationList = ref([])

    const addNotification = (notification) => notificationList.value.push(notification)

    return {notificationList, addNotification}

})
