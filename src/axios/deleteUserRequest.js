import axiosService from './axios'

export const deleteUserRequest = async (token, userId) => {
  const response = await axiosService.delete('/user/delete', {
    headers: {
      'X-Auth-Token': token,
      'Content-Type': 'application/json'
    },
    data: userId
  })
  console.log(response)
  if (response.status === 200) return true
  else return false
}