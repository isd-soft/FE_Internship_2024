import { useUserStore } from "@/stores/userStore"

export const authGuard = async (to, from, next) => {
    const userStore = useUserStore()
    userStore.isAuthenticated()? next() : next('/store')

}