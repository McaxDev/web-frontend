<script setup lang="ts">
import NavBar from './navbar/NavBar.vue'
import AppFooter from './AppFooter.vue'
import { computed, onMounted } from 'vue'
import useSettingStore from './setting/setting'
import useStateStore from './stores/state'
import {useRoute} from 'vue-router'

const settings = useSettingStore()
const state = useStateStore()
const route = useRoute()

onMounted(() => {
  //getMyInfo()
  //loadSettings()
})

const marginMap = {
  '': 0,
  'sm': 0,
  'md': 100,
  'lg': 200,
}
const mainMargin = computed(() => {
  return (route.meta.horizontalMargin ? marginMap[state.windowWidth] : 0) + (route.meta.fullScreen ? 0 : 8)
})
</script>

<template>
  <main class="h-dvh flex flex-col">
    <nav class="bg-main pt-2 px-2">
      <nav-bar />
    </nav>
    <div :class="[
      'grow overflow-y-auto no-scrollbar',
      $route.meta.fullScreen ? 'p-2' : 'my-2 rounded-xl',
      ]" :style="{marginLeft: `${mainMargin}px`, marginRight: `${mainMargin}px`}">
      <div :class="$route.meta.fullScreen ? 'h-full' : 'min-h-full'">
        <router-view v-slot="{ Component }">
          <transition :name="settings.transition">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
      <app-footer :class="['mt-2', {'px-32': !$route.meta.horizontalMargin && state.windowWidth === 'lg'}]" v-if="!$route.meta.fullScreen" />
    </div>
  </main>
  <el-backtop />
</template>
