<script setup lang="ts">
import type {Wiki} from '@/types';
import { DocumentAdd } from '@element-plus/icons-vue';
defineProps<{data: Record<string, Wiki[]>}>()
defineEmits(['openDialog'])

</script>

<template>
  <el-menu router>
    <el-menu-item v-for="wiki in data['']" :key="wiki.id" :index="`/wiki/${wiki.path}`">
      {{ wiki.title }}
    </el-menu-item>
    <div v-for="(wikis, key) in data" :key="key">
      <el-sub-menu :index="key" v-if="key" class="wiki-menu">
        <template #title>
          {{key}}
        </template>
        <el-menu-item v-for="wiki in wikis" :key="wiki.id" :index="`/wiki/${wiki.path}`">
          {{ wiki.title }}
        </el-menu-item>
      </el-sub-menu>
    </div>
    <el-menu-item @click="$emit('openDialog')">
      {{ $t('wiki.add') }}
      <el-icon>
        <DocumentAdd />
      </el-icon>
    </el-menu-item>
  </el-menu>
</template>
