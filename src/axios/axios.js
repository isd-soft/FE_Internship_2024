import axios from "axios"

const axiosService = axios.create({
    baseURL: "",
    headers: {}
})

export default axiosService