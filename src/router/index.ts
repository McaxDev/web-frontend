import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/home/Home.vue'
import Wiki from '@/views/Wiki.vue'
import Gallery from '@/gallery/Gallery.vue'
import Forum from '@/bbs/Forum.vue'
import Forums from '@/bbs/Forums.vue'
import Guild from '@/views/Guild.vue'
import Rank from '@/views/Rank.vue'
import Cloud from '@/views/Cloud.vue'
import About from '@/views/About.vue'
import Login from '@/views/Login.vue'
import Images from '@/gallery/Images.vue'

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
      name: 'forums',
      component: Forums,
      meta: {
        title: 'navbar.bbs',
        navbar: true,
      },
    },
    {
      path: '/bbs/:path',
      name: 'forum',
      component: Forum,
    },
    {
      path: '/guild',
      name: 'guild',
      component: Guild,
      meta: {
        title: 'navbar.guild',
        navbar: true,
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
  ],
})

export default router
