import { Model } from 'echarts'
import { defineStore } from 'pinia'
import type { Guild } from '@/types'
import {ref} from 'vue'
import type {User} from '@/utils/tables'

const useUserStore = defineStore(
  'user',
  () => {
    const user = ref<User|null>(null)
    const token = ref<string|null>(null)
    return {user, token}
  },
  {
    persist: true,
  },
)

export default useUserStore
