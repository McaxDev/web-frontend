<script setup lang="ts">
import { Link } from '@element-plus/icons-vue';
</script>

<template>
  <el-sub-menu index="toolbox">
    <template #title>
      {{ $t('navbar.toolbox') }}
    </template>
    <a href="https://www.chunkbase.com/apps/seed-map" target="_blank" class="decoration-none">
      <el-menu-item>
        ChunkBase
        <el-icon>
          <Link />
        </el-icon>
      </el-menu-item>
    </a>
    <a href="https://map.mcax.cn" target="_blank" class="decoration-none">
      <el-menu-item>
        BlueMap
        <el-icon>
          <Link />
        </el-icon>
      </el-menu-item>
    </a>
    <a href="https://log.mcax.cn" target="_blank" class="decoration-none">
      <el-menu-item>
        {{ $t('navbar.playerLog') }}
        <el-icon>
          <Link />
        </el-icon>
      </el-menu-item>
    </a>
    <el-menu-item index="/about">
      {{ $t('navbar.about') }}
    </el-menu-item>
  </el-sub-menu>
</template>
