<script setup>
import {useAdminUserStore} from "../stores/adminUserStore"
import { storeToRefs } from "pinia";

const adminStore = useAdminUserStore()
adminStore.getUsers()
const users = storeToRefs(adminStore)
</script>

<template>
    <div>
        <div>{{ users }}</div>
        <RouterView />
    </div>
</template>

<style lang="scss" scoped>

</style>
