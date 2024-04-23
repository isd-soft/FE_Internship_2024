import axiosService from './axios'

export const getProductListRequest = async () => {
  const response = await axiosService.get('/article/list')
  if (response.status === 200) return response.data
  else return null
}