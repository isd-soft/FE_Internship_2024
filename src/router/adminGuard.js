import { useUserStore } from '@/stores/userStore'

export const adminGuard = async (to, from) => {
  const userStore = useUserStore()
  return userStore.isAdmin()
}
