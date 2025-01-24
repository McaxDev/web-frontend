import axios from "axios";
import { ElMessage } from "element-plus";
import { apiAddr, fileAddr } from "@/config";

declare module 'axios' {
  interface AxiosRequestConfig {
    noMsg?: boolean,
  }
}

export const apiAxios = axios.create({
  baseURL: apiAddr,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const fileAxios = axios.create({
  baseURL: fileAddr,
  timeout: 5000,
})

apiAxios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.set('Authorization', `Bearer ${token}`)
    }
    return config
  },
  err => {
    return Promise.reject(err)
  },
)

apiAxios.interceptors.response.use(
  res => {

    const newToken = res.headers['Authorization']
    if (newToken) {
      localStorage.setItem('token', newToken)
    }

    if (res.data.message) {
      ElMessage({
        message: res.data.message,
        type: 'success',
      })
    }
    return res.data
  },
  err => {
    return Promise.reject(err)
  },
)
