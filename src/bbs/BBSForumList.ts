export interface Forum {
  path: string,
  name: string,
  subtitle: string,
  image: string,
}

export interface ForumPart {
  name: string,
  forums: Forum[],
}

export const forums: Record<string, Forum> = {
  main: {
    path: 'main',
    name: 'bbs.games.main',
    subtitle: 'bbs.games.mainSubtitle',
    image: '/bbs/games-main.jpg',
  },
  sc: {
    path: 'sc',
    name: 'bbs.games.sc',
    subtitle: 'bbs.games.scSubtitle',
    image: '/bbs/games-sc.jpg',
  },
  mod: {
    path: 'mod',
    name: 'bbs.games.mod',
    subtitle: 'bbs.games.modSubtitle',
    image: '/bbs/games-mod.jpg',
  },
  bedrock: {
    path: 'bedrock',
    name: 'bbs.games.bedrock',
    subtitle: 'bbs.games.bedrockSubtitle',
    image: '/bbs/games-bedrock.jpg',
  },
  dst: {
    path: 'dst',
    name: 'bbs.games.dst',
    subtitle: 'bbs.games.dstSubtitle',
    image: '/bbs/games-dst.jpg',
  },
  terraria: {
    path: 'terraria',
    name: 'bbs.games.terraria',
    subtitle: 'bbs.games.terrariaSubtitle',
    image: '/bbs/games-terraria.jpg',
  },
  bugs: {
    path: 'bugs',
    name: 'bbs.feedback.bugs',
    subtitle: 'bbs.feedback.bugsSubtitle',
    image: '/bbs/feedback-bugs.jpg',
  },
  suggestions: {
    path: 'suggestions',
    name: 'bbs.feedback.suggestions',
    subtitle: 'bbs.feedback.suggestionsSubtitle',
    image: '/bbs/feedback-suggestions.jpg',
  }
}

export const forumParts: ForumPart[] = [
  {
    name: 'bbs.games.title',
    forums: [
      forums['main'],
      forums['sc'],
      forums['mod'],
      forums['bedrock'],
      forums['dst'],
      forums['terraria'],
    ],
  },
  {
    name: 'bbs.feedback.title',
    forums: [
      forums['bugs'],
      forums['suggestions'],
    ],
  },
]
