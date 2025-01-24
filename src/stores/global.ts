import { defineStore } from "pinia";

export const useGlobalStore = defineStore('global', {
  state: () => {
    return {
      isDark: false,
      theme: '#28abce',
    }
  },
  actions: {
    toggleTheme(color: string) {
      this.theme = color
      document.documentElement.style.setProperty('--primary', color)
    }
  }
})
