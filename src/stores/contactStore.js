import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { getContactRequest } from '@/axios/getContactRequest'
import {postContactInfoRequest} from '@/axios/postContactInfoRequest'
import {useUserStore} from './userStore'


export const useContactStore=defineStore("contactStore",()=>{
    const contactInformation=ref({})
    const loader=ref(false)
    const userStore = useUserStore()
    
    const fetchContactInformation= async ()=>{
        loader.value=false
        const result=await getContactRequest()
        if(result){
            contactInformation.value=result.value
            loader.value=true
        }

        
    }
    const postContactInfo = async (workHours) => {
    const result = await postContactInfoRequest(
        
        JSON.stringify({
        name: "CONTACT_INFORMATION",
        value:{
            address: contactInformation.value.address,
            country: contactInformation.value.country,
            city: contactInformation.value.city,
            geoCoordinates:contactInformation.value.geoCoordinates,
            phoneNumber: contactInformation.value.phoneNumber,
            email: contactInformation.value.email,
            workTime: workHours
        }
        })
    ,userStore.token.key)
    if (result) {
        console.log('result')
        contactInformation.value = result.value
        return true
    }
    console.log('Something went wrong')
    return false
    }

    const getFormatAddress=computed(()=>{
        const address=[contactInformation.value.address,`${contactInformation.value.country}, ${contactInformation.value.city}`]
        return address
    })
    const getFormatPhones=computed(()=>{
        const phones=contactInformation.value.phoneNumber.map(item=>{ return item.replace(/^(\+\d{3})(\d{3})(\d{2})(\d{3})$/, '($1)-$2-$3-$4')})
        return phones
    })

    //From Websocket
    const changeContactInformation = (info) => {
        console.log("Changing contact info ", info.value)
        contactInformation.value = info.value
    }
    
    return {
        contactInformation,loader,fetchContactInformation,getFormatAddress,getFormatPhones,postContactInfo, changeContactInformation
    }
})