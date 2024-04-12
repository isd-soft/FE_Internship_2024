<script setup>
import AdminSidebar from '@/components/admin/AdminSidebar.vue';
import {useAdminUserStore} from "../stores/adminUserStore"
import { storeToRefs } from "pinia";

const adminStore = useAdminUserStore()

adminStore.getUsers()

adminStore.getUserRole()

const users = storeToRefs(adminStore)

</script>

<template>
    <div>
        <AdminSidebar />
        <RouterView />
    </div>
</template>

<style lang="scss" scoped>

</style>
