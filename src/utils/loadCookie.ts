import {useGlobalStore} from "@/stores/global"
import Cookies from "js-cookie"
import { useI18n } from "vue-i18n"

export async function loadCookies() {

  const global = useGlobalStore()

  const language = Cookies.get('language')
  if (language) {
    useI18n().locale.value = language
  }

  const theme = Cookies.get('theme')
  if (theme) {
    global.toggleTheme(theme)
  }

  const fontFamily = Cookies.get('font-family')
  if (fontFamily) {
    document.documentElement.style.setProperty('--font-family', fontFamily)
  }

  const transition = Cookies.get('transition')
  if (transition) {
    global.transition = transition
  }

  const fontSize = Cookies.get('font-size')
  if (fontSize) {
    useGlobalStore().fontSize = Number(fontSize)
    document.documentElement.style.setProperty('--font-size', fontSize+'px')
  }
}
