<script setup lang="ts">
import useStateStore from '@/stores/state';
import BbsNavBar from './BbsNavBar.vue';
import {ref} from 'vue';

const state = useStateStore()
const menuState = ref(false)
</script>

<template>
  <div class="h-full flex gap-2">

    <el-card v-if="state.windowWidth!=='sm'" body-class="p-0" shadow="hover">
      <bbs-nav-bar />
    </el-card>

    <!-- 中间内容区域 -->
    <div class="grow flex flex-col gap-2">

      <div class="flex justify-between mx-4" v-if="state.windowWidth==='sm'">
        <div class="font-bold">
          {{ $t('bbs.title') }}
        </div>
        <el-button v-if="state.windowWidth==='sm'" @click="menuState=true">
          {{ $t('bbs.layout.openMenu') }}
        </el-button>
      </div>

      <div class="grow min-h-0">
        <router-view />
      </div>

    </div>

  </div>


  <!-- 左侧导航栏 -->
  <el-drawer v-model="menuState" body-class="p-0" size="50%">
    <bbs-nav-bar />
  </el-drawer>
</template>
