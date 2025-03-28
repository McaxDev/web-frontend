<script setup lang="ts">
import useSettingStore from '@/setting/setting';
import type {Image} from '@/utils/tables';
import {computed} from 'vue';
const props = defineProps<{images: Image[]}>()
const setting = useSettingStore()
const imageUrls = computed(() => {
  return props.images.map(image => `${setting.fileAddr}/images/${image.filename}`)
})
</script>

<template>
  <el-card body-class="p-0" shadow="hover" v-for="image, index in images" :key="image.id">
    <el-image
      class="aspect-video"
      fit="cover"
      :src="`${setting.fileAddr}/images/${image.filename}`"
      :preview-src-list="imageUrls"
      :initial-index="index"
    >
    </el-image>
  </el-card>
</template>
