<script setup lang="ts">
import type { Image } from '@/types'
import { apiAxios } from '@/utils/axios'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { addr } from '@/config'

const route = useRoute()
// 当前相册的图片列表
const images = ref<Image[]>([])
const imageUrls = computed(() => {
  return images.value.map(image => `${addr.api}/file/images/${image.filename}`)
})
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
    <el-card class="aspect-video" body-class="p-0" shadow="hover" v-for="image, index in images" :key="image.id">
      <el-image
        class="h-full w-full"
        fit="cover"
        :src="`${addr.api}/file/images/${image.filename}`"
        :preview-src-list="imageUrls"
        :initial-index="index"
      >
      </el-image>
    </el-card>
  </el-card>
</template>

