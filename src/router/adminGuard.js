import { useUserStore } from '@/stores/userStore'

export const adminGuard = async (to, from, next) => {
  const userStore = useUserStore()
  userStore.isAdmin() ? next() : next('/store')
}
