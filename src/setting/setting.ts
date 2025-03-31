import {useCssVar} from '@vueuse/core'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const useSettingStore = defineStore(
  'setting',
  () => {

    const darkMode = ref('auto')
    const themeColor = useCssVar('--primary')
    const transition = ref('el-fade-in-linear')
    const fontSize = useCssVar('--font-size')
    const fontFamily = useCssVar('--font-family')
    const apiAddr = ref('https://api.axtl.cn:520')

    const fileAddr = computed(() => `${apiAddr.value}/file`)

    return {
      darkMode, themeColor, transition, fontSize, fontFamily, apiAddr, fileAddr,
    }
  },
  {
    persist: true,
  },
)

export default useSettingStore
