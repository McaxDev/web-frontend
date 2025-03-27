import { createGlobalState, useStorage } from '@vueuse/core'

const useSystemStore = createGlobalState(() =>
  useStorage('system', {
    themeColor: '#28ABCE',
    transition: 'el-fade-in-linear',
    fontSize: '16px',
  }),
)

export default useSystemStore
