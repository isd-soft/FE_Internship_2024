import axiosService from './axios'

export const updateProductRequest = async (productJSON, token) => {
  const response = await axiosService.post(`/article/update`,  productJSON, {
    headers: {
      'X-Auth-Token': token,
      'Content-Type': 'application/json'
    }
  })
  if (response.status === 200) return true
  return false
}