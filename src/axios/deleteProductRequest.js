// Must be a list of id of products to delete:
// ["first id", "second id"]

import axiosService from './axios'

export const deleteProductRequest = async (productJSON, token) => {
  console.log('product: ', productJSON);
  console.log('token: ', token);

  const response = await axiosService.delete(`/article/delete`, {
    headers: {
      'X-Auth-Token': token,
      'Content-Type': 'application/json',
    },
    data: productJSON
  })
  //Check for errors
  console.log(response);

  if (response.status === 200) return true
  return false
}