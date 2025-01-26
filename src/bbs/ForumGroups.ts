import type {ForumGroup} from "./types";

export const forumGroups: ForumGroup[] = [
  {
    name: 'forums.games.title',
    forums: [
      {
        path: 'main',
        name: 'forums.games.main',
        image: '/bbs/games-main.jpg',
      },
      {
        path: 'sc',
        name: 'forums.games.sc',
        image: '/bbs/games-sc.jpg',
      },
      {
        path: 'mod',
        name: 'forums.games.mod',
        image: '/bbs/games-mod.jpg',
      },
      {
        path: 'bedrock',
        name: 'forums.games.bedrock',
        image: '/bbs/games-bedrock.jpg',
      },
      {
        path: 'dst',
        name: 'forums.games.dst',
        image: '/bbs/games-dst.jpg',
      },
      {
        path: 'terraria',
        name: 'forums.games.terraria',
        image: '/bbs/games-terraria.jpg',
      },
    ],
  },
  {
    name: 'forums.feedback.title',
    forums: [
      {
        path: 'bugs',
        name: 'forums.feedback.bugs',
        image: '/bbs/feedback-bugs.jpg',
      },
      {
        path: 'suggestions',
        name: 'forums.feedback.suggestions',
        image: '/bbs/feedback-suggestions.jpg',
      }
    ],
  },
]
