import { defineStore } from "pinia";

export const useGlobalStore = defineStore('global', {
  state: () => {
    return {
      isDark: false,
      theme: '#28abce',
    }
  },
  actions: {
    toggleDark() {
      this.isDark = !this.isDark
      if (this.isDark) {
        document.documentElement.setAttribute('class', 'dark')
      } else {
        document.documentElement.removeAttribute('class')
      }
    },
    toggleTheme(id: string, color: string) {
      this.theme = color
      document.documentElement.setAttribute('data-theme', id)
    }
  }
})
