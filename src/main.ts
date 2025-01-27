// 从第三方库导入的对象
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import { createI18n } from 'vue-i18n'

// 从本地导入的对象
import App from './App.vue'
import router from './router'
import zhCN from '@/locale/zh-CN.json'
import zhTW from '@/locale/zh-TW.json'
import en from '@/locale/en.json'
import ru from '@/locale/ru.json'
import fr from '@/locale/fr.json'
import ja from '@/locale/ja.json'
import ko from '@/locale/ko.json'
import es from '@/locale/es.json'

// 样式
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/styles/styles.css'
import '@/styles/margin-padding-utils.css'

const app = createApp(App)
const i18n = createI18n({
  locale: 'zhCN',
  fallbackLocale: 'en',
  messages: {en, zhCN, zhTW, ru, fr, ja, ko, es},
})

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(i18n)

app.mount('#app')
