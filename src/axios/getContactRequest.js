import axiosService from "./axios";

export const getContactRequest=async()=>{
    const response = await axiosService.get('/setting/list')

    if (response.status === 200) {
        return response
        
    }
    console.log(response)
}