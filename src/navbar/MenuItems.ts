const menuItems = [
  ['/', 'navbar.home'],
  ['/wiki', 'navbar.wiki'],
  ['/bbs', 'navbar.bbs'],
  ['/guild', 'navbar.guild'],
  ['/gallery', 'navbar.gallery'],
  ['/rank', 'navbar.rank'],
  ['/cloud', 'navbar.cloud'],
  ['/about', 'navbar.about'],
].map(([path, label]) => ({ path, label }))

export const externalLinks = [
  ['https://www.chunkbase.com', 'navbar.chunkbase'],
  ['https://map.mcax.cn', 'navbar.bluemap'],
  ['https://log.mcax.cn', 'navbar.playerLog'],
].map(([url, label]) => ({ url, label }))

export const outerMenuItems = menuItems.slice(0, 4)
export const innerMenuItems = menuItems.slice(4)
