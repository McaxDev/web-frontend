<!--
这是一个布局组件，将页面设为左侧导航、中心内容，右侧信息栏布局。
左侧导航通过传入对象数组决定内容。在移动端变为右侧抽屉。
中心内容和右侧信息栏通过传入插槽决定内容。在移动端变为杨上下布局。
-->
<script setup lang="ts">
import {useUserStore} from '@/stores/user';

export interface NavSideItem {
  title: string,
  icon: any,
  path: string,
  login?: boolean, // 为true代表需要登录才显示
}

const user = useUserStore()

defineProps<{
  path: string,
  nav: NavSideItem[],
}>()
</script>

<template>
  <div class="page-template-container">

    <el-menu class="page-template-menu hidden-xs-only" router>
      <el-menu-item v-for="item in nav" :key="item.title" :index="`/${path}/${item.path}`">
        <div v-if="!item.login || user.user">
          <el-icon>
            <component :is="item.icon" />
          </el-icon>
          {{ $t(item.title) }}
        </div>
      </el-menu-item>
    </el-menu>

    <div class="page-template-main">
      <div class="page-template-content">
        <slot name="main"></slot>
      </div>
      <div class="page-template-aside">
        <slot name="aside"></slot>
      </div>
    </div>
  </div>
</template>

<style>
.page-template-container {
  height: calc(100vh - 60px);
  display: flex;
  overflow-y: hidden;
  box-sizing: border-box;
}
.page-template-menu {
  width: 200px;
  flex-shrink: 0.5;
  overflow-y: auto;
}
.page-template-main {
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  overflow-y: auto;
}
.page-template-content {
  flex-basis: 75%;
}
.page-template-aside {
  flex-basis: 25%;
}
@media (max-width: 1200px) {
  .page-template-content {
    flex-basis: auto;
  }
  .page-template-aside {
    flex-basis: auto;
  }
}
.page-template-content::-webkit-scrollbar {
  display: none;
}
</style>
