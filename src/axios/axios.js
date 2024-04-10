import axios from "axios"

const axiosService = axios.create({
    baseURL: "http://172.17.40.64:3000",
    headers: {
        "Content-Type" : "application/json"
    }
})

//'X-Auth-Token' token necessary for some operations

export default axiosService