import axios from "axios"

const axiosService = axios.create({
    baseURL: "",
})

//'X-Auth-Token' token necessary for some operations

export default axiosService