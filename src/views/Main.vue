<script setup lang="ts">
import {fileAddr} from '@/config';
import type {Image} from '@/types';
import {apiAxios} from '@/utils/axios';
import {ref} from 'vue';

const carousel = ref<Image[]>([])

apiAxios.get<Image[]>('/gallery/get/carousel').then(res => {
  carousel.value = res.data
})
</script>

<template>
  <el-carousel height="calc(100vh - 60px)" class="carousel">
    <el-carousel-item v-for="item in carousel" :key="item.id">
      <el-image
        fit="cover"
        :src="`${fileAddr}/images/${item.filename}`"
        class="image"
      />
    </el-carousel-item>
    <div class="carousel-content">
      <div class="brand">Axolotland Gaming Club</div>
    </div>
  </el-carousel>
</template>

<style scoped>
.carousel {
  position: relative;
}
.image {
  filter: brightness(70%);
  width: 100%;
  height: 100%;
}
.carousel-content {
  position: absolute;
  width: 100%;
}
.brand {
  padding-top: 40vh;
  color: white;
  text-align: center;
  font-size: 3rem;
}
</style>
