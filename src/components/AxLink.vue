<script setup lang="ts">
import { defineProps } from 'vue'
import { Link } from '@element-plus/icons-vue'

defineProps<{ text: string }>()
</script>

<template>
  <a target="_blank" class="decoration-none ax-link">
    {{ text }}
    <el-icon class="ml-2">
      <Link />
    </el-icon>
  </a>
</template>

<style scoped>
.ax-link {
  display: flex;
  align-items: center;
}
</style>
