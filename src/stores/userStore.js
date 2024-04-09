import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    // const id = ref(0)
    // const email = ref("")
    // const firstName = ref("")
    // const lastName = ref("")
    // const roles = ref("")

    const user = ref({})

    function login(email, password){
        // let result = await axios.post("/login", JSON.stringify({email: email, password: password}))
        // Insert Verification to check if result was fetched
        // this.user.value = JSON.parse(result)
        // return success condition
        return true
    }

    function register(email, password, firstName, lastName){
        console.log(JSON.stringify({email: email, password:password, firstName:firstName, lastName:lastName}, null, 2))
        // let result = await axios.post("/register", JSON.stringify({email: email, password: password, firstName:firstName, lastName:lastName}))
        // Insert Verification to check if result was fetched
        // this.user.value = JSON.parse(result)
        // return success condition
        return false
    }

    function isAuthenticated(){
        return this.user.value && this.user.value.keys().length > 0
    }

    return{user, login, register, isAuthenticated}
})