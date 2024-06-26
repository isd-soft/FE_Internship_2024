import axiosService from './axios'

export const getUserRequest = async (userId, token) => {
  const response = await axiosService.get(`/user/read/${userId}`, {
    headers: {
      'X-Auth-Token': token
    }
  })
  if (response.status === 200) return response.data
}
