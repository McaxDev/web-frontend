<script setup lang="ts">
import { ElRow, ElCol, ElCard, ElMenu, ElMenuItem } from 'element-plus'
import {ref} from 'vue';

const activeIndex = ref('1')

</script>

<template>
  <div id="app">
    <div class="container">
      <el-row class="main-layout">
        <!-- Sidebar -->
        <el-col :span="5" class="sidebar">
          <el-menu :default-active="activeIndex" class="menu">
            <el-menu-item index="1">侧边栏</el-menu-item>
            <el-menu-item index="2">导航</el-menu-item>
            <el-menu-item index="3">更多</el-menu-item>
          </el-menu>
        </el-col>

        <!-- Main Content -->
        <el-col :span="19" class="content">
          <el-card class="card" >
            <p>欢迎你加入论坛！</p>
          </el-card>

          <el-row class="forum-list">
            <el-col :span="12">
              <el-card class="forum-item">
                <p>论坛1</p>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card class="forum-item">
                <p>论坛2</p>
              </el-card>
            </el-col>
          </el-row>

          <el-row class="forum-list">
            <el-col :span="12">
              <el-card class="forum-item">
                <p>论坛3</p>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card class="forum-item">
                <p>论坛4</p>
              </el-card>
            </el-col>
          </el-row>

          <!-- Forum Status -->
          <el-card class="forum-status">
            <p>论坛状态</p>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
}

.main-layout {
  display: flex;
  justify-content: space-between;
}

.sidebar {
  background-color: #f0f0f0;
  padding: 20px;
}

.content {
  background-color: #fff;
  padding: 20px;
}

.forum-list {
  margin-bottom: 20px;
}

.forum-item {
  margin-bottom: 10px;
  background-color: #f9f9f9;
}

.forum-status {
  margin-top: 20px;
  background-color: #e0f7fa;
}
</style>
