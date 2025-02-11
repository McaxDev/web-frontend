import { defineStore } from "pinia";
import Cookies from "js-cookie";

export const useGlobalStore = defineStore('global', {
  state: () => {
    return {
      isDark: false,
      theme: '#28ABCE',
      transition: 'el-fade-in-linear',
      fontSize: 16,
    }
  },
  actions: {
    toggleTheme(color: string) {
      this.theme = color
      document.documentElement.style.setProperty('--primary', color)
      Cookies.set('theme', color, { sameSite: 'Lax' })
    },
  },
})
