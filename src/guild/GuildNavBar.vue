<script setup lang="ts">
import {ChatLineRound, House, Picture, User} from '@element-plus/icons-vue';


const bbsMenuItems = ([
  ['/guild', 'guild.layout.home', House],
  ['/guild/forum', 'guild.layout.forum', ChatLineRound],
  ['/guild/members', 'guild.layout.members', User],
  ['/guild/album', 'guild.layout.album', Picture],
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
