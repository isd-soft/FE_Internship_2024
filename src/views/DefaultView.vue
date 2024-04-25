<script setup>
import PageHeader from '../components/shared/PageHeader.vue'
import PageFooter from '../components/shared/PageFooter.vue'

import { useAdminNotificationStore } from '../stores/adminNotificationStore.js'
import { watch } from 'vue'
import { createToast } from '@/components/generics/GenericToast.vue'

const adminNotificationStore = useAdminNotificationStore()

watch(
  () => adminNotificationStore.notificationList,
  () => {
    if (
      adminNotificationStore.notificationList[
        adminNotificationStore.notificationList.length - 1
      ].message.includes('Product added')
    )
      createToast('New Arrival', 'success')
  },
  { deep: true }
)
</script>
<template>
  <div>
    <PageHeader />
    <RouterView />
    <PageFooter />
  </div>
</template>

<style></style>
