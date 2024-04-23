import axiosService from './axios'


export const postContactInfoRequest = async (registerJson,token) => {
    const response = await axiosService.post('/setting/update', registerJson,{
        headers: {
            'X-Auth-Token': token,
            'Content-Type': 'application/json'
        }
        })
    if (response.status === 200) return response.data
    else return null
    }