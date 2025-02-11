export const addr = {
  api: 'https://mcax.cn:520',
}

export const themes = [
  '#28ABCE', // 青色
  '#409EFF', // 蓝色
  '#67C23A', // 绿色
  '#E6A23C', // 黄色
  '#F56C6C', // 红色
  '#909399', // 灰色
]

export const languages: [string, string][] = [
  ["en", "English"],
  ["zhCN", "简体中文"],
  ["zhTW", "繁體中文"],
  ["ru", "Русский"],
  ["fr", "Français"],
  ["ko", "한국어"],
  ["ja", "日本語"],
  ["es", "Español"],
  ["pt", "Português"],
  ["ar", "البرتغالية"],
]

interface FontGroup {
  name: string;
  rollback: string;
  fonts: string[];
}

export const fontGroups: FontGroup[] = [
  {
    name: "navbar.sans-serif",
    rollback: "sans-serif",
    fonts: [
      "Arial",
      "Helvetica",
      "Verdana",
      "Tahoma",
      "Trebuchet MS",
      "Roboto", // Google Fonts
      "Open Sans", // Google Fonts
      "Lato", // Google Fonts
      "Noto Sans" // Google Fonts, 多语言支持
    ],
  },
  {
    name: "navbar.serif",
    rollback: "serif",
    fonts: [
      "Times New Roman",
      "Georgia",
      "Garamond",
      "Palatino Linotype",
      "Book Antiqua",
      "Merriweather", // Google Fonts
    ],
  },
  {
    name: "navbar.monospace",
    rollback: "monospace",
    fonts: [
      "Courier New",
      "Lucida Console",
      "Monaco",
      "Fira Code", // 程序员常用
      "Consolas", // Windows 默认等宽字体
      "Source Code Pro", // Google Fonts
    ],
  },
  {
    name: "navbar.cursive",
    rollback: "cursive",
    fonts: [
      "Comic Sans MS",
      "Pacifico", // Google Fonts
      "Dancing Script", // Google Fonts
      "Brush Script MT",
      "Fantasy",
    ],
  },
];
