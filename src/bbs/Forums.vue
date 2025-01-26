<script setup lang="ts">
import {forumGroups} from './ForumGroups';
import ForumMenu from './ForumMenu.vue';

</script>

<template>
  <div class="forums">

    <forum-menu class="forum-menu hidden-xs-only" />

    <div class="forum-main">
      <div v-for="forumGroup in forumGroups" :key="forumGroup.name">
        <h2>{{ $t(forumGroup.name) }}</h2>
        <el-row>
          <el-col :sm="12" :lg="8" v-for="forum in forumGroup.forums" :key="forum.name">
            <el-card>
              <template #header>
                {{ $t(forum.name) }}
              </template>
              <img :src="forum.image" style="width: 100px" alt="">
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="forum-right">

    </div>

  </div>
</template>

<style scoped>
.forums {
  height: calc(100vh - 60px);
  display: flex;
  overflow: hidden;
}
.forum-menu {
  width: 250px;
  overflow-y: auto;
}
.forum-main {
  flex-grow: 2;
  overflow-y: auto;
}
.forum-right {
  flex-grow: 1;
}
</style>
