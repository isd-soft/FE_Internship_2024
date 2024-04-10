import axiosService from './axios'

export const logoutRequest = async (logoutJson) => {
  const response = await axiosService.post('/auth/sign-out', logoutJson)
  console.log(response)
  if (response.status === 200) return response.data
  else return null
}