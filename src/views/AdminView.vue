<script setup>
import AdminSidebar from '@/components/admin/AdminSidebar.vue';
import { useAdminUserStore } from "../stores/adminUserStore.js";

const adminUserStore = useAdminUserStore()
adminUserStore.getUsers()
adminUserStore.getUserRole()

</script>

<template>
    <div>
        <AdminSidebar />
        <RouterView />
    </div>
</template>

<style lang="scss" scoped></style>
