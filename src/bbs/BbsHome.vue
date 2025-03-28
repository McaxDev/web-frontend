<script setup lang="ts">
import { forumGroups } from './BBSForumList';
//const forumGroups = ref<ForumGroup[]|null>(null)
//apiAxios.get<ForumGroup[]>('/bbs/forums').then(res => {
//  forumGroups.value = res.data
//}).catch(err => console.log(err))
</script>

<template>
  <div v-if="forumGroups" class="flex flex-col gap-2">
    <div v-for="group in forumGroups" :key="group.name">
      <div>{{ group.name }}</div>
      <div class="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <el-card v-for="forum in group.forums" :key="forum.name"
          class="hover:translate-x-1"
          body-class="aspect-video bg-cover flex flex-col justify-end text-white"
          :body-style="{backgroundImage: `url(${forum.image})`}"
          shadow="hover"
        >
          <h3 class="text-xl transition-transform">论坛名称</h3>
          <div class="flex justify-between">
            <p class="line-clamp-2">这里是论坛的介绍</p>
            <el-icon class="transition-transform">
              <ArrowRightBold />
            </el-icon>
          </div>
        </el-card>
      </div>
    </div>
  </div>
  <el-empty v-else :description="$t('bbs.home.empty')" />
</template>
