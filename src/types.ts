export interface Model {
  id: number,
  createdAt: string,
  updatedAt: string,
}

export interface User extends Model {
 name: string,
 avatar: string,
 profile: string,
 admin: boolean,
 tempCoin: number,
 permCoin: number,
 email: string,
 phone: string,
 qq: string,
 bedrockName: string,
 javaName: string,
 guildRole: number,
 donation: number,
 exp: number,
 level: number,
}

export interface Album extends Model {
  cover: string,
  path: string,
  title: string,
  description: string,
  only_admin: boolean,
  pinned: boolean,
  images: Image[],
}

export interface Image extends Model {
  filename: string,
  title: string,
  description: string,
  likes: number,
  user: object,
  album: object,
}

export interface Wiki extends Model {
  path: string,
  title: string,
  category: string,
  content: string,
  html: string,
}
