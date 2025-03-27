<script setup lang="ts">
import useStateStore from '@/stores/state';
import GuildNavBar from './GuildNavBar.vue';
import MyGuild from './MyGuild.vue';
import {ref} from 'vue';

const state = useStateStore()
const menuState = ref(false)
const myGuildState = ref(false)
</script>

<template>
  <div class="h-full flex flex-row gap-2">

    <!-- 左侧导航栏 -->
    <el-drawer v-if="state.windowWidth === 'sm'" v-model="menuState" body-class="p-0" size="50%">
      <guild-nav-bar />
    </el-drawer>
    <el-card class="basis-1/12 grow" body-class="p-0" shadow="hover" v-else>
      <guild-nav-bar />
    </el-card>

    <!-- 中间内容区域 -->
    <el-card class="basis-3/5 grow" body-class="overflow-y-auto" shadow="hover">
      <template #header>
        <div class="flex flex-row items-center gap-2">
          <div>{{ $t(`guild.layout.${$route.name?.toString()}`) }}</div>
          <el-button v-if="state.windowWidth === 'sm'" class="ms-auto" @click="menuState = true">
            {{ $t('guild.layout.openMenu') }}
          </el-button>
          <el-button v-if="state.windowWidth === 'sm'" @click="myGuildState = true">
            {{ $t('guild.layout.openMyGuild') }}
          </el-button>
        </div>
      </template>
      <router-view />
    </el-card>

    <!-- 右侧个人信息 -->
    <el-drawer v-if="state.windowWidth === 'sm'" v-model="myGuildState" size="50%" :title="$t('guild.layout.myGuild')">
      <my-guild />
    </el-drawer>
    <el-card class="basis-1/5 grow" shadow="hover" :header="$t('guild.layout.myGuild')" v-else>
      <my-guild />
    </el-card>
  </div>
</template>
