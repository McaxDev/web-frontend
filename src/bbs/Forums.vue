<script setup lang="ts">
import {forumGroups} from './ForumGroups';
import AxForumMenu from './AxForumMenu.vue';
import { DArrowRight } from '@element-plus/icons-vue';

</script>

<template>
  <div class="forums-container">

    <ax-forum-menu class="forum-menu hidden-xs-only" />

    <section class="forums-main">
      <section class="forums-groups">
        <section v-for="forumGroup in forumGroups" :key="forumGroup.name">
          <header class="forums-title text-title">
            {{ $t(forumGroup.name) }}
          </header>
          <el-row>
            <el-col class="p-1" :sm="12" :lg="8" v-for="forum in forumGroup.forums" :key="forum.name">
              <el-card body-class="forums-card" :body-style="{ backgroundImage: `url(${forum.image})`}">
                <div class="card-content">
                  <div class="card-title">
                    {{ $t(forum.name) }}
                  </div>
                  <div class="flex">
                    {{ $t(forum.subtitle) }}
                    <el-icon class="ms-auto">
                      <d-arrow-right />
                    </el-icon>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>

        </section>
      </section>

      <section class="forums-info">
        <el-card>
          <el-descriptions direction="vertical">
            <template #title>
              <div class="text-title">
                统计信息
              </div>
            </template>
            <el-descriptions-item label="注册用户">0</el-descriptions-item>
            <el-descriptions-item label="帖子总数">0</el-descriptions-item>

          </el-descriptions>
        </el-card>
      </section>
    </section>

  </div>
</template>

<style>

.forums-container {
  height: calc(100vh - 60px);
  display: flex;
  overflow: hidden;
}
.forum-menu {
  width: 200px;
  flex-shrink: 0.5;
  overflow-y: auto;
}
.forums-main {
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  flex-grow: 1;
  padding: 10px;
}
.forums-groups {
  box-sizing: border-box;
  padding: 10px;
}
.forums-info {
  box-sizing: border-box;
  padding: 10px;
  flex-grow: 1;
}
.forums-title {
  padding-left: 20px;
  line-height: 40px;
}
.card-title {
  font-size: 20px;
}
.forums-card {
  color: white;
  height: 200px;
  background-size: cover;
  display: flex;
  flex-direction: column-reverse;
  box-sizing: border-box;
  position: relative;
}

.forums-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  z-index: 1;  /* 确保遮罩层在背景图上方 */
}

.card-content {
  z-index: 2;
  display: flex;
  flex-direction: column;
}

@media (min-width: 1200px) {
  .forums-groups {
    flex-basis: 75%;
  }
  .forums-info {
    flex-basis: 25%;
  }
}
.forum-groups::-webkit-scrollbar {
  display: none;
}
</style>
