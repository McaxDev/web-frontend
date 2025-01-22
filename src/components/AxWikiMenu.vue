<script setup lang="ts">
import type {Wiki} from '@/types';
import { DocumentAdd } from '@element-plus/icons-vue';
defineProps<{data: Record<string, Wiki[]>}>()
</script>

<template>
  <el-menu router>
    <el-sub-menu v-for="(wikis, key) in data" :key="key" :index="key" class="wiki-menu">
      <template #title>
        {{key}}
      </template>
      <el-menu-item v-for="wiki in wikis" :key="wiki.id" :index="`/wiki/${wiki.path}`">
        {{ wiki.title }}
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item>
      {{ $t('wiki.add') }}
      <el-icon>
        <DocumentAdd />
      </el-icon>
    </el-menu-item>
  </el-menu>
</template>
