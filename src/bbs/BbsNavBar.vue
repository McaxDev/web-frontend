<script setup lang="ts">
import {House, Tickets, User} from '@element-plus/icons-vue';


const bbsMenuItems = ([
  ['/bbs', 'bbs.layout.home', House],
  ['/bbs/news', 'bbs.layout.news', Tickets],
  ['/bbs/members', 'bbs.layout.members', User],
] as [string, string, object][]).map(([path, name, icon]) => ({path, name, icon}))
</script>

<template>
  <el-menu router :default-active="$route.path">
    <el-menu-item v-for="item in bbsMenuItems" :key="item.name" :index="item.path">
      <el-icon>
        <component :is="item.icon" />
      </el-icon>
      {{ $t(item.name) }}
    </el-menu-item>
  </el-menu>
</template>
