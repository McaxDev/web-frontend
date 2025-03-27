import {useBreakpoints} from '@vueuse/core'
import { defineStore } from 'pinia'

const useStateStore = defineStore(
  'state',
  () => {

    const breakPoints = useBreakpoints({
      sm: 0,
      md: 768,
      lg: 1024,
    })
    const windowWidth = breakPoints.active()

    return {
      windowWidth,
    }
  },
)

export default useStateStore
