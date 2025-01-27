export interface ForumGroup {
  name: string,
  forums: Forum[],
}

export interface Forum {
  path: string,
  name: string,
  subtitle: string,
  image: string,
}
