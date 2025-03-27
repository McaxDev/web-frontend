/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': 'var(--main-bg-color)',
        'subtle': 'var(--subtle-bg-color)',
        'primary': 'var(--el-color-primary)',
      },
    },
  },
  plugins: [],
}

