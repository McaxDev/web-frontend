<script setup lang="ts">
import useStateStore from '@/stores/state';
import BbsNavBar from './BbsNavBar.vue';
import BbsMyinfo from './BbsMyinfo.vue';
import {ref} from 'vue';

const state = useStateStore()
const menuState = ref(false)
const myinfoState = ref(false)
</script>

<template>
  <div class="h-full flex flex-row gap-2">

    <!-- 左侧导航栏 -->
    <el-drawer v-if="state.windowWidth === 'sm'" v-model="menuState" body-class="p-0" size="50%">
      <bbs-nav-bar />
    </el-drawer>
    <el-card class="basis-1/12 grow" body-class="p-0" shadow="hover" v-else>
      <bbs-nav-bar />
    </el-card>

    <!-- 中间内容区域 -->
    <el-card class="basis-3/5 grow" body-class="overflow-y-auto" shadow="hover">
      <template #header>
        <div class="flex flex-row items-center gap-2">
          <div>{{ $t(`bbs.layout.${$route.name?.toString()}`) }}</div>
          <el-button v-if="state.windowWidth === 'sm'" class="ms-auto" @click="menuState = true">
            {{ $t('bbs.layout.openMenu') }}
          </el-button>
          <el-button v-if="state.windowWidth === 'sm'" @click="myinfoState = true">
            {{ $t('bbs.layout.openMyinfo') }}
          </el-button>
        </div>
      </template>
      <router-view />
    </el-card>

    <!-- 右侧个人信息 -->
    <el-drawer v-if="state.windowWidth === 'sm'" v-model="myinfoState" size="50%" :title="$t('bbs.layout.myinfo')">
      <bbs-myinfo />
    </el-drawer>
    <el-card class="basis-1/5 grow" shadow="hover" :header="$t('bbs.layout.myinfo')" v-else>
      <bbs-myinfo />
    </el-card>
  </div>
</template>
