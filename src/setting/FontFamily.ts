interface FontGroup {
  name: string
  rollback: string
  fonts: string[]
}

const fontGroups: FontGroup[] = [
  {
    name: '无衬线字体',
    rollback: 'sans-serif',
    fonts: [
      'Arial',
      'Helvetica',
      'Verdana',
      'Tahoma',
      'Trebuchet MS',
      'Roboto', // Google Fonts
      'Open Sans', // Google Fonts
      'Lato', // Google Fonts
      'Noto Sans', // Google Fonts, 多语言支持
    ],
  },
  {
    name: '衬线字体',
    rollback: 'serif',
    fonts: [
      'Times New Roman',
      'Georgia',
      'Garamond',
      'Palatino Linotype',
      'Book Antiqua',
      'Merriweather', // Google Fonts
    ],
  },
  {
    name: '等宽字体',
    rollback: 'monospace',
    fonts: [
      'Courier New',
      'Lucida Console',
      'Monaco',
      'Fira Code', // 程序员常用
      'Consolas', // Windows 默认等宽字体
      'Source Code Pro', // Google Fonts
    ],
  },
  {
    name: '装饰字体',
    rollback: 'cursive',
    fonts: [
      'Comic Sans MS',
      'Pacifico', // Google Fonts
      'Dancing Script', // Google Fonts
      'Brush Script MT',
      'Fantasy',
    ],
  },
]

const fonts = fontGroups.map(({name, rollback, fonts}) => ({
  value: name,
  label: name,
  children: fonts.map(font => ({
    value: `${font}, ${rollback}`,
    label: font,
  })),
}))

export default fonts
