// 从第三方库导入的对象
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import { createI18n } from 'vue-i18n'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

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
import 'element-plus/theme-chalk/display.css' // 断点隐藏类
import 'element-plus/theme-chalk/dark/css-vars.css' // 启用暗黑模式
import '@/styles.css'
import TitleCard from './components/TitleCard.vue'

const app = createApp(App)

app.component('TitleCard', TitleCard)

const i18n = createI18n({
  locale: 'zhCN',
  fallbackLocale: 'en',
  messages: { en, zhCN, zhTW, ru, fr, ja, ko, es },
})

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.use(i18n)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
