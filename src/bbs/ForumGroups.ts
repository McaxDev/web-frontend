import type {ForumGroup} from "./types";

export const forumGroups: ForumGroup[] = [
  {
    name: 'forums.games.title',
    forums: [
      {
        path: 'main',
        name: 'forums.games.main',
        subtitle: 'forums.games.mainSubtitle',
        image: '/bbs/games-main.jpg',
      },
      {
        path: 'sc',
        name: 'forums.games.sc',
        subtitle: 'forums.games.scSubtitle',
        image: '/bbs/games-sc.jpg',
      },
      {
        path: 'mod',
        name: 'forums.games.mod',
        subtitle: 'forums.games.modSubtitle',
        image: '/bbs/games-mod.jpg',
      },
      {
        path: 'bedrock',
        name: 'forums.games.bedrock',
        subtitle: 'forums.games.bedrockSubtitle',
        image: '/bbs/games-bedrock.jpg',
      },
      {
        path: 'dst',
        name: 'forums.games.dst',
        subtitle: 'forums.games.dstSubtitle',
        image: '/bbs/games-dst.jpg',
      },
      {
        path: 'terraria',
        name: 'forums.games.terraria',
        subtitle: 'forums.games.terrariaSubtitle',
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
        subtitle: 'forums.feedback.bugsSubtitle',
        image: '/bbs/feedback-bugs.jpg',
      },
      {
        path: 'suggestions',
        name: 'forums.feedback.suggestions',
        subtitle: 'forums.feedback.suggestionsSubtitle',
        image: '/bbs/feedback-suggestions.jpg',
      }
    ],
  },
]
