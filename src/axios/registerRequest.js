import axiosService from './axios'

export const registerRequest = async (registerJson) => {
  const response = await axiosService.post('/auth/sign-up', registerJson)
  console.log(response)
  if (response.status === 200) return response.data
  else return null
}
