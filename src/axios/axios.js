import axios from 'axios'

const axiosService = axios.create({
//   baseURL: 'http://172.17.40.64:3000',
  baseURL: 'https://furniro.inthergroup.com/rest/',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default axiosService
