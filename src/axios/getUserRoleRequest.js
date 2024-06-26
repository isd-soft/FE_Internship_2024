import axiosService from './axios'

export const getUserRoleRequest = async (token) => {
  const response = await axiosService.get('/auth/role/list', {
    headers: {
      'X-Auth-Token': token,
      'Content-Type': 'application/json'
    }
  })
  if (response.status === 200) return response.data
  else return null
}