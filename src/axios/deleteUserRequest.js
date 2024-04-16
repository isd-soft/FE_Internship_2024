import axiosService from './axios'

export const deleteUserRequest = async (token) => {
  const response = await axiosService.delete('/user/delete', {
    headers: {
      'X-Auth-Token': token,
      'Content-Type': 'application/json'
    }
  })
  console.log(response)
  if (response.status === 200) return true
  else return false
}