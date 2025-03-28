import type { User } from '@/utils/tables'
import { apiAxios } from './axios'
import useUserStore from '@/stores/user'

export function getMyInfo() {
  const token = localStorage.getItem('token')
  if (token) {
    apiAxios
      .get<User>('/account/get/myinfo')
      .then((res) => {
        useUserStore().user = res.data
      })
      .catch((err) => console.log(err))
  }
}
