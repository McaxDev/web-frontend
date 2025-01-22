<script setup lang="ts">
import AxNavbar from './components/AxNavbar.vue';
import AxFooter from './components/AxFooter.vue';
import {onMounted} from 'vue';
import { useUserStore } from './stores/user';
import {apiAxios} from './utils/axios';
import type {User} from './types';
const user = useUserStore()

onMounted(() => {
  const token = localStorage.getItem('token')
  if (token) {
    apiAxios.get<User>('/account/get/myinfo').then(res => {
      user.user = res.data
    })
  }
})
</script>

<template>
  <header>
    <ax-navbar class="navbar-box" />
  </header>
  <main>
    <router-view />
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
}
</style>
