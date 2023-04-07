import axios from 'axios'

export const Auth = axios.create({
    baseURL:"http://localhost:5000",
    withCredentials: true
})