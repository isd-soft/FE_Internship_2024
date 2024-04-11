import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginRequest } from '@/axios/loginRequest'
import { registerRequest } from '@/axios/registerRequest'
import { logoutRequest } from '@/axios/logoutRequest'

export const useUserStore = defineStore('user', () => {
  const user = ref({})
  const token = ref({})

  const login = async (username, password) => {
    const result = await loginRequest(JSON.stringify({ username: username, password: password }))
    if (result) {
      user.value = result.user
      token.value = result.token
      return true
    }
    return false
  }

  const register = async (email, username, password, firstName, lastName) => {
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
    return user.value.roles.role === 'ADMIN'
  }

  const logout = async () => {
    const result = await logoutRequest(JSON.stringify({username : user.value.username}))
    user.value = {}
    token.value = {}
  }

  return { user, token, login, register, isAuthenticated, isAdmin, logout }
})
