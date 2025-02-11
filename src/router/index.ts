import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/home/Home.vue'
import Wiki from '@/views/Wiki.vue'
import Gallery from '@/gallery/Gallery.vue'
import Rank from '@/views/Rank.vue'
import Cloud from '@/views/Cloud.vue'
import About from '@/views/About.vue'
import Login from '@/views/Login.vue'
import Images from '@/gallery/Images.vue'
import ScanQR from '@/views/ScanQR.vue'

import BBSTemplate from '@/bbs/BBSTemplate.vue'
import BBSHome from '@/bbs/BBSHome.vue'
import BBSNews from '@/bbs/BBSNews.vue'
import BBSMembers from '@/bbs/BBSMembers.vue'
import BBSPage from '@/bbs/BBSPage.vue'
import GuildList from '@/guild/GuildList.vue'
import GuildBBS from '@/guild/GuildBBS.vue'
import GuildTemplate from '@/guild/GuildTemplate.vue'
import GuildHome from '@/guild/GuildHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: 'navbar.main',
        navbar: true,
      },
    },
    {
      path: '/wiki',
      name: 'wiki',
      redirect: '/wiki/index',
      meta: {
        title: 'navbar.wiki',
        navbar: true,
      },
    },
    {
      path: '/wiki/:path',
      name: 'wikis',
      component: Wiki,
    },
    {
      path: '/bbs',
      name: 'bbs',
      component: BBSTemplate,
      redirect: '/bbs/home',
      meta: {
        title: 'navbar.bbs',
        navbar: true,
      },
      children: [
        {
          path: 'home',
          name: 'bbsHome',
          component: BBSHome,
        },
        {
          path: 'news',
          name: 'bbsNews',
          component: BBSNews,
        },
        {
          path: 'members',
          name: 'bbsMembers',
          component: BBSMembers,
        },
        {
          path: ':forum',
          name: 'bbsPage',
          component: BBSPage,
        },
      ],
    },
    {
      path: '/guild',
      name: 'guild',
      redirect: '/guild/list',
      component: GuildTemplate,
      meta: {
        title: 'navbar.guild',
        navbar: true,
        others: true,
      },
      children: [
        {
          path: 'list',
          component: GuildList,
        },
        {
          path: 'home',
          component: GuildHome,
        },
        {
          path: 'bbs',
          component: GuildBBS,
        }
      ],
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery,
      meta: {
        title: 'navbar.gallery',
        navbar: true,
        others: true,
      },
    },
    {
      path: '/gallery/:path',
      name: 'images',
      component: Images,
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank,
      meta: {
        title: 'navbar.rank',
        navbar: true,
        others: true,
      },
    },
    {
      path: '/cloud',
      name: 'cloud',
      component: Cloud,
      meta: {
        title: 'navbar.cloud',
        navbar: true,
        others: true,
      },
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/scan',
      name: 'scan',
      component: ScanQR,
    },
  ],
})

export default router
