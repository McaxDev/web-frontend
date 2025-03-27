export interface Model {
  id: number
  createdAt: string
  updatedAt: string
}

export interface Guild extends Model {
  name: string
  number: number
  logo: string
  profile: string
  notice: string
  money: number
  level: string
}

export interface Album extends Model {
  cover: string
  path: string
  title: string
  description: string
  only_admin: boolean
  pinned: boolean
  images: Image[]
}

export interface Image extends Model {
  filename: string
  title: string
  description: string
  likes: number
  user: object
  album: object
}

export interface Wiki extends Model {
  path: string
  title: string
  category: string
  markdown: string
  html: string
}
