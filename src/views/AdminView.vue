<script setup>
import AdminSidebar from '@/components/admin/AdminSidebar.vue'
import { useAdminUserStore } from '../stores/adminUserStore.js'
import { useAdminNotificationStore } from '../stores/adminNotificationStore.js'
import { watch, ref } from 'vue'
import { useToast } from 'vue-toast-notification'

const adminUserStore = useAdminUserStore()
adminUserStore.getUsers()
adminUserStore.getUserRole()

const adminNotificationStore = useAdminNotificationStore()

watch(
  () => adminNotificationStore.notificationList,
  () => {
    const $toast = useToast()
    $toast.open({
      message: adminNotificationStore.notificationList[adminNotificationStore.notificationList.length - 1].message,
      duration: 3000,
      position: 'bottom-right',
      type: adminNotificationStore.notificationList[adminNotificationStore.notificationList.length - 1].type
    })
  },
  { deep: true }
)
</script>

<template>
  <div>
    <AdminSidebar />
    <RouterView />
  </div>
</template>

<style lang="scss" scoped></style>
