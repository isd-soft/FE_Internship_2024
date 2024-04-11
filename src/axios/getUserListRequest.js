import axiosService from './axios'

export const getUserListRequest = async (token) => {
  const response = await axiosService.get('/user/list', {
    headers: {
      'X-Auth-Token': token,
      'Content-Type': 'application/json'
    }
  })
  console.log(response)
  if (response.status === 200) return response.data
  else return null
}