<script setup lang="ts">
import { apiAxios } from '@/utils/axios'
import { ref } from 'vue'
import JoinQqGroup from './JoinQqGroup.vue'
import OnlineStatistic from './OnlineStatistic.vue'
import useSettingStore from '@/setting/setting'
import type {Album} from '@/utils/tables'

const carousel = ref<Album|null>(null)
const setting = useSettingStore()

apiAxios.get<Album>('/gallery/album?path=carousel').then(res => {
  carousel.value = res.data
})

const notes = [
  ['鸡你太美', 'Bestcb233'],
  ['妈妈省的', 'Bestcb234'],
]
</script>

<template>
  <el-card body-class="p-0" shadow="hover">
    <el-carousel height="calc(100dvh - 84px)" class="relative">
      <el-carousel-item v-for="item in carousel?.photos" :key="item.id">
        <el-image fit="cover" :src="`${setting.fileAddr}/images/${item.filename}`" class="w-full h-full brightness-75" />
          a{{`${setting.fileAddr}/images/${item.filename}`}}a
      </el-carousel-item>
      <div class="absolute w-full">
        <div class="pt-96 text-white text-center text-lg">Axolotland Gaming Club</div>
      </div>
    </el-carousel>
  </el-card>

  <!-- 在线玩家统计部分 -->
  <section class="reactive-margin p-3">
    <online-statistic />
  </section>

  <!-- 加入QQ群的部分 -->
  <section class="reactive-margin p-3">
    <join-qq-group />
  </section>



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
