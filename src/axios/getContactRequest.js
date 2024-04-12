import axiosService from "./axios";

export const getContactRequest=async()=>{
    const response = await axiosService.get('/setting/read/CONTACT_INFORMATION',{
    })
    if (response.status === 200) {
        return response.data
        
    }
    else return null
}