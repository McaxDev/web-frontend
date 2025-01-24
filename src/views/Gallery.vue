<script setup lang="ts">
import {fileAddr} from '@/config';
import type {Album, Image} from '@/types';
import {apiAxios} from '@/utils/axios';
import {watch} from 'vue';
import {ref} from 'vue';
import {useRoute} from 'vue-router';

const route = useRoute()

const albums = ref<Album[]>([])
const images = ref<Image[]>([])

watch(() => route.params.path, (value) => {
if (value) {
  apiAxios.get<Image[]>(`/gallery/get/images?path=${value}`).then(res => {
    images.value = res.data
  })
} else {
  apiAxios.get<Album[]>('/gallery/get/albums').then(res => {
    albums.value = res.data
  })
}
}, {immediate: true})
</script>

<template>
  <div class="reactive-margin">

    <div class="gallery-banner">
      {{ $t('gallery.title') }}
    </div>

    <el-row :gutter="15">
      <el-col v-if="$route.params.path" :xs="12" :sm="8" :md="6">
        <el-card body-class="card-body">
          <div @click="$router.push('/gallery')" class="card-image">返回上一页</div>
        </el-card>
      </el-col>
      <el-col v-if="$route.params.path" v-for="image in images" :key="image.id" :xs="12" :sm="8" :md="6">
        <el-card body-class="card-body">
          <el-image class="card-image" fit="cover" :src="`${fileAddr}/images/${image.filename}`" />
        </el-card>
      </el-col>
      <el-col v-else v-for="album in albums" :key="album.id" :xs="12" :sm="8" :md="6">
          <el-card body-class="card-body" @click="$router.push(`/gallery/${album.path}`)">
            <el-image class="card-image transition-box" fit="cover" :src="`${fileAddr}/images/${album.cover}`" />
          </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style>
.card-body {
  padding: 5px !important;
}
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
