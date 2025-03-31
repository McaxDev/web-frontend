<script setup lang="ts">
import useSettingStore from '@/setting/setting'
import { apiAxios } from '@/utils/axios'
import type {Album} from '@/utils/tables'
import { ref } from 'vue'

const setting =useSettingStore()
const albums = ref<Album[]>([])

apiAxios
  .get<Album[]>('/gallery/albums')
  .then((res) => {
    albums.value = res.data
  })
  .catch((err) => console.log(err))
</script>

<template>
  <el-card class="h-48 bg-[url('/login-bg.jpg')]">

  </el-card>

  <el-row :gutter="15">
    <el-col v-for="album in albums" :key="album.id" :xs="12" :sm="8" :md="6">
      <el-card body-class="p-0" @click="$router.push(`/gallery/${album.path}`)">
        <el-image
          class="h-32 w-full"
          fit="cover"
          :src="`${setting.fileAddr}/images/${album.cover?.filename}`"
        />
      </el-card>
    </el-col>
  </el-row>
</template>
