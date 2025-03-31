<script setup lang="ts">
import type { Album } from '@/utils/tables'
import { apiAxios } from '@/utils/axios'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import ImagesComponent from '@/components/ImagesComponent.vue'

const route = useRoute()
// 当前相册的图片列表
const album = ref<Album|null>(null)
// 获取图片列表
apiAxios.get<Album>(`/gallery/album?path=${route.params.path}`).then((res) => {
  album.value = res.data
})
</script>

<template>
  <el-card v-if="album" shadow="never" body-class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
    <template #header>
      <el-page-header :content="$t('gallery.images.title')" @back="$router.push('/gallery')" />
    </template>
    <images-component :images="album.photos" />
  </el-card>
</template>
