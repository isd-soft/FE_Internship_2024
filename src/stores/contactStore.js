import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { getContactRequest } from '@/axios/getContactRequest'
import { postContactInfoRequest } from '@/axios/postContactInfoRequest'
import { useUserStore } from './userStore'
import { useAdminNotificationStore } from './adminNotificationStore'

export const useContactStore = defineStore('contactStore', () => {
  const contactInformation = ref({})
  const loader = ref(false)
  const userStore = useUserStore()
  const adminNotificationStore = useAdminNotificationStore

  const fetchContactInformation = async () => {
    loader.value = false
    const result = await getContactRequest()
    if (result) {
      contactInformation.value = result.value
      loader.value = true
    }
  }
  const postContactInfo = async (workHours) => {
    const result = await postContactInfoRequest(
      JSON.stringify({
        name: 'CONTACT_INFORMATION',
        value: {
          address: contactInformation.value.address,
          country: contactInformation.value.country,
          city: contactInformation.value.city,
          geoCoordinates: contactInformation.value.geoCoordinates,
          phoneNumber: contactInformation.value.phoneNumber.filter((item) => item),
          email: contactInformation.value.email.filter((item) => item),
          workTime: workHours
        }
      }),
      userStore.token.key
    )
    if (result) {
      contactInformation.value = result.value
      return true
    }
    return false
  }

  const getFormatAddress = computed(() => {
    const address = [
      contactInformation.value.address,
      `${contactInformation.value.country}, ${contactInformation.value.city}`
    ]
    return address
  })
  const getFormatPhones = computed(() => {
    const phones = contactInformation.value.phoneNumber.map((item) => {
      return item.replace(/^(\+\d{3})(\d{3})(\d{2})(\d{3})$/, '($1)-$2-$3-$4')
    })
    return phones
  })
  //From Websocket
  const changeContactInformation = (info) => {
    contactInformation.value = info.value
    adminNotificationStore.addNotification({ message: 'Contact information updated', type: 'info' })
  }

  return {
    contactInformation,
    loader,
    fetchContactInformation,
    getFormatAddress,
    getFormatPhones,
    postContactInfo,
    changeContactInformation
  }
})
