// Expected format of product:

// {
//     "name": "Summer sandals",
//     "code": "P400021L435",
//     "description": "Nice summer sandals",
//     "imageUrl": "https://www.overlookboots.com/cdn/shop/articles/winter-boots-buying-guide.jpg?v=1636722912",
//     "price": 15.99,
//     "stock": 51,
//     "rating": 3,
//     "discount": 10,
//     "color": "",
//     "isNew": true
// }

import axiosService from './axios'

export const createProductRequest = async (productJSON, token) => {
  const response = await axiosService.post(`/article/create`,  productJSON, {
    headers: {
      'X-Auth-Token': token,
      'Content-Type': 'application/json'
    }
  })
  //Check for errors
  if (response.status === 200) return true
  return false
}