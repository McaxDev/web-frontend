<script setup lang="ts">
import {apiAxios} from '@/utils/axios';
import type {Guild} from '@/types';
import {ref} from 'vue';

const guilds = ref<Guild[]>([])

apiAxios.get<Guild[]>('/guild/get/guilds').then(res => {
  guilds.value = res.data
}).catch(err => console.log(err))

</script>

<template>
  <div class="p-4">
    <div class="text-title">公会列表</div>
    <el-card v-for="guild in guilds" :key="guild.name">
      {{ guild.name }}
    </el-card>

  </div>
</template>
