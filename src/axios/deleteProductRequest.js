import axiosService from './axios'

export const deleteProductRequest = async (productJSON, token) => {

  const response = await axiosService.delete(`/article/delete`, {
    headers: {
      'X-Auth-Token': token,
      'Content-Type': 'application/json',
    },
    data: productJSON
  })
  if (response.status === 200) return true
  return false
}