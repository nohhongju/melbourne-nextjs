import axios from "axios"
const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege...",
}

const joinAPI = (data) => axios.post(`${SERVER}/api/user/signup`, inputs, { headers })

export default {
    joinAPI
}