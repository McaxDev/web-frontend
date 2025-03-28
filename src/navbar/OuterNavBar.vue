<script setup lang="ts">
import { outerMenuItems } from './MenuItems';
</script>

<template>
  <el-menu-item v-for="item in outerMenuItems" :key="item.label" :index="item.path">
    {{ $t(item.label) }}
  </el-menu-item>
</template>
