import axios from 'axios'

export const http = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin':'*',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
})