import { useUserStore } from '@/stores/userStore'

export const authGuard = async (to, from) => {
  const userStore = useUserStore()
  console.log("Inside AuthGuard")
  return userStore.isAuthenticated()
}
