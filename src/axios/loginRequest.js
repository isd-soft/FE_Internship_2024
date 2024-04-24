import axiosService from './axios'

export const loginRequest = async (loginJson) => {
  const response = await axiosService.post('/auth/sign-in', loginJson)
  if (response.status === 200) return response.data
  else return null
}
