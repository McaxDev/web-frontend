// 文本或Markdown内容
export interface Content {
  text: string,
  html: string | null,
}

// 图片表
export interface Image {
  id: number,
  createdAt: Date,
  filename: string,
  label: string | null,
  profile: Content,
  likes: number | null, // 点赞数
  Uploader: User | null,
  User: User | null,
  Album: Album | null,
  Guild: Guild | null,
}

// 用户表
export interface User {
  id: number,
  createdAt: Date,
  updatedAt: Date,
  name: string,
  avatar: Image | null,
  cover: Image | null, // 封面图片
  admin: boolean,
  voter: boolean, // 是否是议员
  voice: number | null, // 作为议员的投票话语权
  isMale: boolean | null,  // 性别
  profile: Content, // 个人介绍
  birthday: Date | null,
  photos: Image[],
  dailyCoin: number | null,
  honorCoin: number | null,
  email: string,
  phone: string | null,
  qq: string | null,
  mcbeName: string | null,
  mcjeName: string | null
  guild: Guild | null,
  guildRole: number | null,
  donation: number,
  exp: number, // 经验值
  level: number,
  setting: Record<string, any> | null
  props: Property[],
  reviews: Review[],
  albums: Album[],
}

// 文档组表
export interface Wiki {
  id: number,
  label: string,
  sort: number,
  documents: Docs[],
}

// 文档表
export interface Docs {
  id: number,
  createdAt: Date,
  updatedAt: Date,
  path: string,
  title: string,
  content: Content,
  sort: number,
  reviews: Review[],
}

// 在线记录表
export interface Online {
  id: number,
  time: Date,
  server: string,
  count: number | null,
}

// 公会表
export interface Guild {
  id: number,
  createdAt: Date,
  updatedAt: Date,
  name: string,
  count: number, // 总人数
  avatar: Image | null,
  cover: Image | null,
  profile: Content,
  notice: Content,
  money: number,
  level: number,
  posts: Post[],
  photos: Image[],
  members: User[],
}

// 相册表
export interface Album {
  id: number,
  createdAt: Date,
  updatedAt: Date,
  cover: Image | null,
  path: string,
  title: string,
  profile: Content,
  admin: boolean,
  pinned: boolean, // 是否置顶
  guild: Guild | null,
  user: User | null,
  photos: Image[],
}

// 用户财产表
export interface Property {
  id: number,
  updatedAt: Date,
  property: string, // 物品ID
  count: number,
}

// 论坛组表
export interface BBS {
  id: number,
  label: string,
  forums: Forum[],
}

// 论坛表
export interface Forum {
  id: number,
  path: string,
  title: string,
  subTitle: string,
  profile: string,
  cover: Image | null,
  posts: Post[],
}

// 贴子表
export interface Post {
  id: number,
  createdAt: Date,
  updatedAt: Date,
  pinned: boolean,
  title: string,
  content: Content | null,
  author: User,
  reviews: Review[] | null,
}

// 评论表
export interface Review {
  id: number,
  updatedAt: Date,
  content: Content,
  attitude: boolean | null, // 态度 赞成/反对/中立
  user: User | null,
  reviews: Review[],
}
