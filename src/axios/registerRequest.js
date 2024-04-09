import axiosService from './axios'

export const registerRequest = async (registerJson) => {
  const response = await axiosService.post('/auth/sign-up', registerJson)
  //Check for errors
  if (response.status === 200) return response.data
}
