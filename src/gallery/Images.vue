<script setup lang="ts">
import type {Image} from '@/types';
import {apiAxios} from '@/utils/axios';
import {ref} from 'vue';
import {useRoute} from 'vue-router';
import { addr } from '@/config';

const route = useRoute()
// 当前相册的图片列表
const images = ref<Image[]>([])
// 获取图片列表
apiAxios.get<Image[]>(`/gallery/get/images?path=${route.params.path}`).then(res => {
  images.value = res.data
})
</script>

<template>
  <div class="reactive-margin">

    <div class="gallery-banner">
      {{ $t('gallery.title') }}
    </div>

    <el-row :gutter="15">
      <el-col :xs="12" :sm="8" :md="6">
        <el-card body-class="card-body">
          <div @click="$router.push('/gallery')" class="card-image">返回上一页</div>
        </el-card>
      </el-col>
      <el-col v-for="image in images" :key="image.id" :xs="12" :sm="8" :md="6">
        <el-card body-class="p-0">
          <el-image class="card-image" fit="cover" :src="`${addr.api}/file/images/${image.filename}`" />
        </el-card>
      </el-col>

    </el-row>
  </div>
</template>

<style>
.card-image {
  height: 150px;
  width: 100%;
  border-radius: 4px;
}
.gallery-banner {
  margin: 20px;
  height: 200px;
  background-image: url(/login-bg.jpg);
  border-radius: 20px;
  text-align: center;
  font-size:50px;
  color: white;
  text-shadow: 2px 2px 4px #000000;
}
</style>
