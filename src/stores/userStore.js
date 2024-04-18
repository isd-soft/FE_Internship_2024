import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginRequest } from '@/axios/loginRequest'
import { registerRequest } from '@/axios/registerRequest'
import { logoutRequest } from '@/axios/logoutRequest'
import { useCartStore } from './cartStore'

export const useUserStore = defineStore(
  'user',
  () => {
    const user = ref({})
    const token = ref({})
    const cartStore = useCartStore()
    const loader = ref(false)

    const login = async (username, password) => {
      loader.value = false
      const result = await loginRequest(JSON.stringify({ username: username, password: password }))
      if (result) {
        user.value = result.user
        token.value = result.token
        cartStore.getCart(user.value.id)
        loader.value = true
        return true
      }
      return false
    }

    const register = async (email, username, password, firstName, lastName) => {
      loader.value = false
      const result = await registerRequest(
        JSON.stringify({
          email: email,
          username: username,
          password: password,
          firstName: firstName,
          lastName: lastName
        })
      )
      if (result.user) {
        user.value = result.user
        token.value = result.token
        cartStore.getCart(user.value.id)
        loader.value = true
        return true
      }
      console.log('Something went wrong')
      return false
    }

    const isAuthenticated = () => {
      console.log('Checking auth')
      return token.value.key
    }

    const isAdmin = () => {
      return user.value.roles != undefined && user.value.roles.some((r) => r.role === 'ADMIN')
    }

    const logout = async () => {
      const result = await logoutRequest(JSON.stringify({ username: user.value.username }))
      user.value = {}
      token.value = {}
      cartStore.stashCart()
    }

    return { user, token, loader, login, register, isAuthenticated, isAdmin, logout }
  },
  {
    persist: {
      afterRestore: (ctx) => {
        setTimeout(() => {
          const cart = useCartStore()
          cart.getCart()}, 100)
      }
    }
  }
)
