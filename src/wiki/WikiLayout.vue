<script setup lang="ts">
import useStateStore from '@/stores/state';
import WikiNavBar from './WikiNavBar.vue';
import WikiAnchor from './WikiAnchor.vue';

const state = useStateStore()

</script>

<template>
  <div class="h-full flex flex-row gap-2">

    <!-- 左侧导航栏 -->
    <el-drawer v-if="state.windowWidth === 'sm'">
      <wiki-nav-bar />
    </el-drawer>
    <el-card class="grow" body-class="p-0" shadow="hover" v-else>
      <wiki-nav-bar />
    </el-card>

    <!-- 中间内容区域 -->
    <el-card class="basis-3/5 grow" shadow="hover">

    </el-card>

    <!-- 右侧个人信息 -->
    <el-drawer v-if="state.windowWidth === 'sm'">
      <wiki-anchor />
    </el-drawer>
    <el-card class="basis-1/5 grow" shadow="hover" :header="$t('bbs.layout.myinfo')" v-else>
      <wiki-anchor />
    </el-card>
  </div>
</template>
