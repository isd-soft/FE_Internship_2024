import axiosService from './axios'


export const postContactInfoRequest = async (registerJson,token) => {
    console.log(JSON.parse(registerJson))
    const response = await axiosService.post('/setting/update', registerJson,{
        headers: {
            'X-Auth-Token': token,
            'Content-Type': 'application/json'
        }
        })
    console.log(response)
    if (response.status === 200) return response.data
    else return null
    }