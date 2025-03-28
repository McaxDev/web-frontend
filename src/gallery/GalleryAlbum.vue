<script setup lang="ts">
import type { Image } from '@/utils/tables'
import { apiAxios } from '@/utils/axios'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import ImagesComponent from '@/components/ImagesComponent.vue'

const route = useRoute()
// 当前相册的图片列表
const images = ref<Image[]>([])
// 获取图片列表
apiAxios.get<Image[]>(`/gallery/get/images?path=${route.params.path}`).then((res) => {
  images.value = res.data
})
</script>

<template>
  <el-card shadow="never" body-class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
    <template #header>
      <el-page-header :content="$t('gallery.images.title')" @back="$router.push('/gallery')" />
    </template>
    <images-component :images="images" />
  </el-card>
</template>
