import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { getContactRequest } from '@/axios/getContactRequest'


export const useContactStore=defineStore("contactStore",()=>{
    const contactInformation=ref({})
    const loader=ref(false)
    
    const fetchContactInformation= async ()=>{
        loader.value=false
        const result=await getContactRequest()
        if(result){
            contactInformation.value=result.value
            loader.value=true
        }
        
    }
    const getFormatAddress=computed(()=>{
        const address=[contactInformation.value.address,"Moldova Chisinau"]
        return address
    })
    const getFormatPhones=computed(()=>{
        const phones=contactInformation.value.phoneNumber.map(item=>{ return item.replace(/^(\+\d{3})(\d{3})(\d{2})(\d{3})$/, '($1)-$2-$3-$4')})
        return phones
    })

    //From Websocket
    const changeContactInformation = (info) => {
        contactInformation.value = info.value
    }
    
    return {
        contactInformation,loader,fetchContactInformation,getFormatAddress,getFormatPhones, changeContactInformation
    }
})