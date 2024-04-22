import axiosService from './axios'

export const updateUserRequest = async (userJSON, token) => {
  const response = await axiosService.post('/user/update', userJSON, {
    headers: {
      'X-Auth-Token': token,
      'Content-Type': 'application/json'
    }
  })
  if (response.status === 200) return true
  else return false
}