<script setup>
import AdminSidebar from '@/components/admin/AdminSidebar.vue'
import { useAdminUserStore } from '../stores/adminUserStore.js'
import { useAdminNotificationStore } from '../stores/adminNotificationStore.js'
import { watch} from 'vue'
import { createToast } from '@/components/generics/GenericToast.vue'

const adminUserStore = useAdminUserStore()
adminUserStore.getUsers()
adminUserStore.getUserRole()

const adminNotificationStore = useAdminNotificationStore()

watch(
  () => adminNotificationStore.notificationList,
  () => {
    createToast(
      adminNotificationStore.notificationList[adminNotificationStore.notificationList.length - 1]
        .message,
      adminNotificationStore.notificationList[adminNotificationStore.notificationList.length - 1]
        .type
    )
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
