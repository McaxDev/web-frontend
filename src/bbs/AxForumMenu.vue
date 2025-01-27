<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  User,
} from '@element-plus/icons-vue'
</script>

<template>
      <el-menu
        default-active="2"
      >
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>{{ $t('forums.bbs') }}</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon><document /></el-icon>
          <span>{{ $t('forums.latestNews') }}</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><user /></el-icon>
          <span>{{ $t('forums.members') }}</span>
        </el-menu-item>
      </el-menu>
</template>
