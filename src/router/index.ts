import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/home/HomeView.vue'),
    },
    {
      path: '/wiki',
      name: 'wiki',
      children: [
        {
          path: '',
          name: 'wiki.list',
          component: () => import('@/wiki/WikiList.vue'),
          meta: {
            horizontalMargin: true,
          },
        },
        {
          path: ':path',
          name: 'wiki.path',
          component: () => import('@/wiki/WikiDocs.vue'),
          meta: {
            horizontalMargin: true,
          },
        },
      ],
    },
    {
      path: '/bbs',
      name: 'bbs',
      component: () => import('@/bbs/BbsLayout.vue'),
      children: [
        {
          path: '',
          name: 'bbs.list',
          component: () => import('@/bbs/BbsList.vue'),
        },
        {
          path: 'forum/:path',
          name: 'bbs.forum',
          component: () => import('@/bbs/BbsForum.vue'),
        },
        {
          path: 'post/:path',
          name: 'bbs.post',
          component: () => import('@/bbs/BbsPost.vue'),
        },
        {
          path: 'news',
          name: 'bbs.news',
          component: () => import('@/bbs/BBSNews.vue'),
        },
        {
          path: 'members',
          name: 'bbs.members',
          component: () => import('@/bbs/BBSMembers.vue'),
        },
      ],
      meta: {
        fullScreen: true,
      },
    },
    {
      path: '/guild',
      name: 'guild',
      component: () => import('@/guild/GuildLayout.vue'),
      children: [
        {
          path: '',
          name: 'guild.home',
          component: () => import('@/guild/GuildHome.vue'),
        },
        {
          path: 'forum',
          name: 'guild.forum',
          component: () => import('@/components/ForumComponent.vue'),
        },
        {
          path: 'members',
          name: 'guild.members',
          component: () => import('@/guild/GuildMembers.vue'),
        },
        {
          path: 'album',
          name: 'guild.album',
          component: () => import('@/guild/GuildAlbum.vue'),
        },
        {
          path: 'ware',
          name: 'guild.ware',
          component: () => import('@/guild/GuildWare.vue'),
        },
        {
          path: 'setting',
          name: 'guild.setting',
          component: () => import('@/guild/GuildSetting.vue'),
        },
      ],
      meta: {
        fullScreen: true,
      },
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('@/gallery/AlbumList.vue'),
      meta: {
        horizontalMargin: true,
      },
    },
    {
      path: '/gallery/:path',
      name: 'album',
      component: () => import('@/gallery/GalleryAlbum.vue'),
      meta: {
        horizontalMargin: true,
      },
    },
    {
      path: '/rank',
      name: 'rank',
      component: () => import('@/views/Rank.vue'),
    },
    {
      path: '/cloud',
      name: 'cloud',
      component: () => import('@/cloud/Cloud.vue'),
      meta: {
        horizontalMargin: true,
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue'),
    },
    {
      path: '/scan',
      name: 'scan',
      component: () => import('@/views/ScanQR.vue'),
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/UserInfo.vue'),
    },
    {
      path: '/server',
      name: 'server',
      component: () => import('@/server/ServerLayout.vue'),
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('@/shop/ShopLayout.vue'),
    },
    {
      path: '/system-setting',
      name: 'system-setting',
      component: () => import('@/setting/SystemSetting.vue'),
      meta: {
        horizontalMargin: true,
      },
    },
  ],
})

export default router
