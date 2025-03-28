import {Setting, ShoppingCart, Warning} from "@element-plus/icons-vue"

const menuItems = [
  ['/', 'navbar.home'],
  ['/wiki', 'navbar.wiki'],
  ['/bbs', 'navbar.bbs'],
  ['/guild', 'navbar.guild'],
  ['/server', 'navbar.server'],
  ['/gallery', 'navbar.gallery'],
  ['/rank', 'navbar.rank'],
  ['/cloud', 'navbar.cloud'],
].map(([path, label]) => ({ path, label }))

export const externalLinks = [
  ['https://www.chunkbase.com', 'navbar.menuItems.chunkbase'],
  ['https://map.mcax.cn', 'navbar.menuItems.bluemap'],
  ['https://log.mcax.cn', 'navbar.menuItems.playerLog'],
  ['https://github.com/McaxDev', 'navbar.menuItems.github'],
].map(([url, label]) => ({ url, label }))

export const outerMenuItems = menuItems.slice(0, 4)
export const innerMenuItems = menuItems.slice(4)

export const rightMenuItems = ([
  ['/system-setting', 'navbar.systemSetting', Setting],
  ['/shop', 'navbar.shop', ShoppingCart],
  ['/about', 'navbar.about', Warning],
] as [string, string, object][]).map(([path, label, icon]) => ({path, label, icon}))
