import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getContactRequest } from '@/axios/getContactRequest'


export const useContactStore=defineStore("contactStore",()=>{
    const contactInformation=ref({})
    const loader=ref(false)
    
    const getContactInformation= async ()=>{
        loader.value=true
        console.log(loader)
        const result=await getContactRequest()
        console.log(result)
        if(result){
            console.log(result)
            return result
        }
        loader.value=false
    }
    
    return {
        contactInformation,getContactInformation
    }
})