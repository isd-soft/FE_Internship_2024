import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginRequest } from '@/axios/loginRequest'
import { registerRequest } from '@/axios/registerRequest'

export const useUserStore = defineStore('user', () => {
  // const id = ref(0)
  // const email = ref("")
  // const firstName = ref("")
  // const lastName = ref("")
  // const roles = ref("")

  const user = ref({})

  async function login(email, password) {
    const result = await loginRequest(JSON.stringify({ email: email, password: password }))
    this.user.value = JSON.parse(result)
    return true
  }

  async function register(email, password, firstName, lastName) {
    const result = await registerRequest(JSON.stringify({ email: email, password: password, firstName: firstName, lastName:lastName }))
    this.user.value = JSON.parse(result)
    return false
  }

  function isAuthenticated() {
    return this.user.value && this.user.value.keys().length > 0
  }

  function logout(){
    this.user.value = {}
  }

  return { user, login, register, isAuthenticated, logout}
}

)
