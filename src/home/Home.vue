<script setup lang="ts">
import {fileAddr} from '@/config';
import type {Image} from '@/types';
import {apiAxios} from '@/utils/axios';
import {ref} from 'vue';
import AxHistoryOnline from '@/components/AxHistoryOnline.vue';


const carousel = ref<Image[]>([])

apiAxios.get<Image[]>('/gallery/get/carousel').then(res => {
  carousel.value = res.data
})

const notes = [
  ['鸡你太美', 'Bestcb233'],
  ['妈妈省的', 'Bestcb234'],
]
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

  <!--
  <div class="reactive-margin">
    <el-row gutter="10" class="profile">
      <el-col :sm="8" v-for="i in 3">
        <el-card>
          <div class="profile-title">
            {{ $t(`home.profile[${i-1}].title`) }}
          </div>
          <el-text class="profile-content">
            {{ $t(`home.profile[${i-1}].content`) }}
          </el-text>
        </el-card>
      </el-col>
    </el-row>
    <el-card class="m-3">
      <ax-history-online />
    </el-card>
  </div>
  -->

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
.profile {
  padding: 1.5rem;
}
.profile-title {
  font-weight: bold;
  font-size: 1.2rem;
}
</style>
