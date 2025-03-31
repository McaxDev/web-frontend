<script setup lang="ts">
import type {Forum} from '@/utils/tables';

defineProps<{forum: Forum|null}>()
</script>

<template>
  <el-card shadow="hover">
    <template #header>
      {{ $t('bbs.forumInfo.title') }}
    </template>
    {{ forum?.profile }}
  </el-card>
</template>
