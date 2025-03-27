<script setup lang="ts">
import PageTemplate, { type NavSideItem } from '@/components/PageTemplate.vue'
import { useStateStore } from '@/stores/state'
import { Menu as IconMenu, User, Document } from '@element-plus/icons-vue'

const global = useStateStore()

const navs: NavSideItem[] = [
  {
    title: 'bbs.menu.home',
    icon: IconMenu,
    path: 'home',
  },
  {
    title: 'bbs.menu.news',
    icon: Document,
    path: 'news',
  },
  {
    title: 'bbs.menu.members',
    icon: User,
    path: 'members',
  },
]
</script>

<template>
  <page-template :nav="navs" path="bbs">
    <template #main>
      <router-view v-slot="{ Component }">
        <transition :name="global.transition">
          <component :is="Component" />
        </transition>
      </router-view>
    </template>

    <template #aside>
      <section class="forums-slot">
        <el-card>
          <el-descriptions direction="vertical">
            <template #title>
              <div class="text-title">统计信息</div>
            </template>
            <el-descriptions-item label="注册用户">0</el-descriptions-item>
            <el-descriptions-item label="帖子总数">0</el-descriptions-item>
          </el-descriptions>
        </el-card>
      </section>
    </template>
  </page-template>
</template>

<style>
.forums-slot {
  box-sizing: border-box;
  padding: 1rem;
}
.forums-title {
  padding-left: 1.2rem;
  line-height: 2rem;
}
.card-title {
  font-size: 1.2rem;
}
.forums-card {
  color: white;
  height: 12rem;
  background-size: cover;
  display: flex;
  flex-direction: column-reverse;
  box-sizing: border-box;
  position: relative;
}

.forums-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}

.card-content {
  z-index: 1;
}
</style>
