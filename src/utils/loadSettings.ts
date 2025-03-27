import { useI18n } from 'vue-i18n'
import useSystemStore from '@/stores/system'

export default async () => {
  const system = useSystemStore()

  const language = localStorage.getItem('language')
  if (language) {
    useI18n().locale.value = language
  }

  const theme = localStorage.getItem('theme')
  if (theme) {
    system.toggleTheme(theme)
  }

  const fontFamily = localStorage.getItem('font-family')
  if (fontFamily) {
    document.documentElement.style.setProperty('--font-family', fontFamily)
  }

  const transition = localStorage.getItem('transition')
  if (transition) {
    system.transition = transition
  }

  const fontSize = localStorage.getItem('font-size')
  if (fontSize) {
    system.fontSize = Number(fontSize)
    document.documentElement.style.setProperty('--font-size', fontSize + 'px')
  }
}
