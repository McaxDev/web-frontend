<script setup lang="ts">
import { forumParts } from './BBSForumList'
import { DArrowRight } from '@element-plus/icons-vue'
</script>

<template>
  <div class="forums-slot">
    <div v-for="forumPart in forumParts" :key="forumPart.name">
      <header class="forums-title text-title">
        {{ $t(forumPart.name) }}
      </header>
      <el-row>
        <el-col class="p-1" :sm="12" :lg="8" v-for="forum in forumPart.forums" :key="forum.name">
          <el-card
            body-class="forums-card"
            :body-style="{ backgroundImage: `url(${forum.image})` }"
            @click="$router.push(`/bbs/${forum.path}`)"
          >
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
    </div>
  </div>
</template>
