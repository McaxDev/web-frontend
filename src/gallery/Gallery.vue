<script setup lang="ts">
import {fileAddr} from '@/config';
import type {Album} from '@/types';
import {apiAxios} from '@/utils/axios';
import {ref} from 'vue';

const albums = ref<Album[]>([])

apiAxios.get<Album[]>('/gallery/get/albums').then(res => {
  albums.value = res.data
}).catch(err => console.log(err))

</script>

<template>
  <div class="reactive-margin">

    <div class="gallery-banner">
      {{ $t('gallery.title') }}
    </div>

    <el-row :gutter="15">
      <el-col v-for="album in albums" :key="album.id" :xs="12" :sm="8" :md="6">
          <el-card body-class="p-0" @click="$router.push(`/gallery/${album.path}`)">
            <el-image class="card-image transition-box" fit="cover" :src="`${fileAddr}/images/${album.cover}`" />
          </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style>
.card-body {
  padding: 0px !important;
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
