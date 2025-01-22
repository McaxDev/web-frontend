<script setup lang="ts">
import {fileAddr} from '@/config';
import type {Album} from '@/types';
import {apiAxios} from '@/utils/axios';
import {ref} from 'vue';

const albums = ref<Album[]>([])

apiAxios.get<Album[]>('/gallery/get/albums').then(res => {
  albums.value = res.data
})
</script>

<template>
  <div class="reactive-px">

    <div class="gallery-banner-outer">
      <el-image src="/login-bg.jpg" class="gallery-banner-inner">

      </el-image>
    </div>

    <el-row :gutter="15">
      <el-col v-for="album in albums" :key="album.id" :xs="12" :sm="8" :md="6">
        <el-card body-class="card-body">
          <el-image class="card-image" fit="cover" :src="`${fileAddr}/images/${album.cover}`">

          </el-image>
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
  border-radius: 4px;
}
.gallery-banner-outer {
  margin: 20px;
}
.gallery-banner-inner {
  height: 200px;
  width: 100%;
  border-radius: 10px;
}
</style>
