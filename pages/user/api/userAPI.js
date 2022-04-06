import axios from "axios";
const SERVER = `http://localhost:8080`

export const usersignin = signinRequest => axios.post(`${SERVER}/user/sign-in`,signinRequest)
export const usersignup = signupRequest => axios.post(`${SERVER}/user/sign-up`,signupRequest)