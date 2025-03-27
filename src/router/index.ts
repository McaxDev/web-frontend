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
      path: '/wiki/:path?',
      name: 'wikis',
      component: () => import('@/wiki/WikiLayout.vue'),
      meta: {
        fullScreen: true,
      },
    },
    {
      path: '/bbs',
      name: 'bbs',
      component: () => import('@/bbs/BbsLayout.vue'),
      children: [
        {
          path: '',
          name: 'bbs.home',
          component: () => import('@/bbs/BbsHome.vue'),
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
          component: () => import('@/components/AlbumComponent.vue'),
        },
      ],
      meta: {
        fullScreen: true,
      },
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('@/gallery/Gallery.vue'),
      meta: {
        horizontalMargin: true,
      },
    },
    {
      path: '/gallery/:path',
      name: 'images',
      component: () => import('@/gallery/Images.vue'),
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
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
    },
    {
      path: '/scan',
      name: 'scan',
      component: () => import('@/views/ScanQR.vue'),
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/UserProfile.vue'),
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
