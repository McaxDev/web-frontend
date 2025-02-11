<script setup lang="ts">
import PageTemplate, {type NavSideItem} from '@/components/PageTemplate.vue';
import {useUserStore} from '@/stores/user';
import { List, House, ChatLineRound } from '@element-plus/icons-vue';

const user = useUserStore()

const navs: NavSideItem[] = [
  {
    title: 'guild.list',
    icon: List,
    path: 'list',
  },
  {
    title: 'guild.home',
    icon: House,
    path: 'home',
    login: true,
  }, {
    title: 'guild.bbs',
    icon: ChatLineRound,
    path: 'bbs',
    login: true,
  }
]

</script>

<template>
  <page-template :nav="navs" path="guild" aside-padding="4">
    <template #main>
      <router-view />
    </template>

    <template #aside>
      <div class="p-4">
        <el-card>
          <el-empty v-if="!user.user" :description="$t('guild.aside.logout')" />
          <el-empty v-else-if="!user.user?.guild" :description="$t('guild.aside.noguild')" />
          <el-descriptions v-else :title="$t('guild.aside.title')">
            <el-descriptions-item
              v-for="item in ['name', 'number', 'money', 'level', 'profile', 'notice']"
              :key="item"
              :span="3"
              :label="$t(`guild.aside.${item}`)">
              {{ (user.user?.guild as Record<string, any>)?.[item] }}
            </el-descriptions-item>
            <el-descriptions-item :span="3" :label="$t('guild.aside.perm.title')">
              {{ $t(`guild.aside.perm.${user.user?.guildRole.toString()}`) }}
            </el-descriptions-item>
          </el-descriptions>
        </el-card>
      </div>
    </template>
  </page-template>
</template>
