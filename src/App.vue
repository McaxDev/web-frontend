<script setup lang="ts">
import AxNavbar from './navbar/AxNavbar.vue';
import AxFooter from './components/AxFooter.vue';
import {onMounted} from 'vue';
import {getMyInfo} from './utils/getMyInfo';

onMounted(() => {
  getMyInfo()
})
</script>

<template>
  <header class="navbar-box">
    <ax-navbar />
  </header>
  <main>
    <router-view v-slot="{ Component }">
      <transition class="el-fade-in-linear">
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
