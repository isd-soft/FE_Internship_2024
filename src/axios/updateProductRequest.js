// Must have id of product and the field u want to change:
// {
//     "id": "14f1b6cf-9d05-4790-b01b-548e6cec61eb", 
//     "name": "Winter boots, but better"
// }

import axiosService from './axios'

export const updateProductRequest = async (productJSON, token) => {
  const response = await axiosService.post(`/article/update`,  productJSON, {
    headers: {
      'X-Auth-Token': token,
      'Content-Type': 'application/json'
    }
  })
  //Check for errors
  if (response.status === 200) return true
  return false
}