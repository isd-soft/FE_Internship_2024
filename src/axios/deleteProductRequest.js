// Must be a list of id of products to delete:
// ["first id", "second id"]

import axiosService from './axios'

export const deleteProductRequest = async (productJSON, token) => {
  const response = await axiosService.delete(`/article/delete`,  productJSON, {
    headers: {
      'X-Auth-Token': token,
      'Content-Type': 'application/json'
    }
  })
  //Check for errors
  if (response.status === 200) return true
  return false
}