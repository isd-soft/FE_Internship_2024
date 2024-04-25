import axios from 'axios'

const axiosService = axios.create({
  baseURL: 'http://172.17.40.64:3000',
//   baseURL: 'http://furniro.inthergroup.com:3000/rest/',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default axiosService
