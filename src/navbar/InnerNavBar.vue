<script setup lang="ts">
import { openLink } from '@/utils/utils'
import { innerMenuItems, externalLinks } from './MenuItems'
</script>

<template>
  <el-menu-item v-for="item in innerMenuItems" :key="item.label" :index="item.path">
    {{ $t(item.label) }}
  </el-menu-item>
  <el-sub-menu index="external-links">
    <template #title>
      {{ $t('navbar.externalLinks') }}
    </template>
    <el-menu-item v-for="item in externalLinks" :key="item.label" @click="openLink(item.url)">
      {{ $t(item.label) }}
    </el-menu-item>
  </el-sub-menu>
</template>
