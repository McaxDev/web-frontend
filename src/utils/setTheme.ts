export function setTheme(color: string) {
  const root = document.documentElement
  root.style.setProperty('--primary', color)
}
