<script setup lang="ts">
import {fileAxios} from '@/utils/axios';
import {ref} from 'vue';

interface File {
  name: string,
  type: string,
  mtime: string,
  size: number,
  fmtSize: string,
}

const files = ref<File[]>([])

fileAxios.get<File[]>('/cloud/').then(res => {
  files.value = res.data
  files.value.forEach(item => {
    if (item.size) {
      item.fmtSize = formatFileSize(item.size)
    }
  })
}).catch(err => console.log(err))

function formatFileSize(bytes: number): string {
    const units = ['B', 'KB', 'MB', 'GB'];
    let i = 0;
    while (bytes >= 1024 && i < units.length - 1) {
        bytes /= 1024;
        i++;
    }
    return `${bytes.toFixed(2)} ${units[i]}`;
}

</script>

<template>
  <cloud-container class="reactive-margin">
    <el-table :data="files" height="250" width="500" class="cloud-table">
      <el-table-column prop="name" :label="$t('cloud.name')" />
      <el-table-column prop="mtime" :label="$t('cloud.time')" />
      <el-table-column prop="fmtSize" :label="$t('cloud.size')" />
      <el-table-column :label="$t('cloud.open')">
      </el-table-column>
    </el-table>
  </cloud-container>
</template>

<style scoped>
.cloud-table {
  width: 400px;
}
</style>
