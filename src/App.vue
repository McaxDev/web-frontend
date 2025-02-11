<script setup lang="ts">
import NavBar from './navbar/NavBar.vue';
import AxFooter from './components/AxFooter.vue';
import {onMounted} from 'vue';
import {getMyInfo} from './utils/getMyInfo';
import {useGlobalStore} from './stores/global';
import { loadCookies } from './utils/loadCookie';

const global = useGlobalStore()

onMounted(() => {
  getMyInfo()
  loadCookies()
})
</script>

<template>
  <header class="navbar-box">
    <nav-bar />
  </header>
  <main>
    <router-view v-slot="{ Component }">
      <transition :name="global.transition">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <footer>
    <ax-footer />
  </footer>
  <el-backtop />
</template>

<style>
.navbar-box {
  position: fixed;
  z-index: 100;
  width: 100%;
}
main {
  min-height: calc(100vh - 60px);
  padding-top: 60px;
}
</style>
