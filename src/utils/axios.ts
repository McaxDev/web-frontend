import axios from "axios";
import { ElMessage } from "element-plus";
import { apiAddr, fileAddr } from "@/config";

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

apiAxios.interceptors.response.use(
  res => {

    const newToken = res.headers['Authorization']
    if (newToken) {
      localStorage.setItem('token', newToken)
    }

    ElMessage({
      message: res.data.message,
      type: 'success',
    })
    return res.data
  },
  err => {
    return Promise.reject(err)
  },
)
