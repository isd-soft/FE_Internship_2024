<script setup>
import {useAdminUserStore} from "../stores/adminUserStore"
import { storeToRefs } from "pinia";

const adminStore = useAdminUserStore()

adminStore.getUsers()

adminStore.getUserRole()

const users = storeToRefs(adminStore)

</script>

<template>
    <div>
        <RouterView />
    </div>
</template>

<style lang="scss" scoped>

</style>
