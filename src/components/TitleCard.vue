<script setup lang="ts">
defineProps<{
  title?: string,
}>()
</script>

<template>
  <el-card shadow="hover">
    <h3 v-if="title" class="text-xl font-semibold mb-2 text-primary">
      {{ title }}
    </h3>
    <slot></slot>
  </el-card>
</template>
