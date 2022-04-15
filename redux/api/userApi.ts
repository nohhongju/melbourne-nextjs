import axios from "axios"
import { JoinPayload } from '../reducers/userReducer'
const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege...",
}

export const joinApi = (data: JoinPayload) => axios.post(`${SERVER}/api/user/signup`, data, { headers })
