import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main.vue'
import Wiki from '@/views/Wiki.vue'
import Gallery from '@/views/Gallery.vue'
import BBS from '@/views/BBS.vue'
import Guild from '@/views/Guild.vue'
import Rank from '@/views/Rank.vue'
import Cloud from '@/views/Cloud.vue'
import About from '@/views/About.vue'
import Login from '@/views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/main',
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
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
      path: '/wiki/:page',
      name: 'wikis',
      component: Wiki,
    },
    {
      path: '/bbs',
      name: 'bbs',
      component: BBS,
      meta: {
        title: 'navbar.bbs',
        navbar: true,
      },
    },
    {
      path: '/guild',
      name: 'guild',
      component: Guild,
      meta: {
        title: 'navbar.guild',
        navbar: true,
        others: true,
      },
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
      component: Gallery,
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
  ],
})

export default router
