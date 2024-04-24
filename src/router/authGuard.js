import { useUserStore } from '@/stores/userStore'

export const authGuard = async (to, from) => {
  const userStore = useUserStore()
  return userStore.isAuthenticated()
}
