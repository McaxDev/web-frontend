<script setup lang="ts">
import useStateStore from '@/stores/state';
import ForumInfo from './ForumInfo.vue';
import {apiAxios} from '@/utils/axios';
import type {Forum, Post} from '@/utils/tables';
import {computed, ref} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {formatDate} from '@/utils/chrono';
import useSettingStore from '@/setting/setting';
import {ElMessage} from 'element-plus';

const state = useStateStore()
const setting = useSettingStore()
const router = useRouter()
const path = useRoute().params.path as string
const forum = ref<Forum|null>(null)
const count = ref(0)
const page = ref(1)
const limit = ref(10)
const url = `/bbs/forum?page=${page.value}&count=${limit.value}&path=${path}`
const headerCover = computed(() => ({
  backgroundImage: `url(${setting.fileAddr}/images/${forum.value?.cover?.filename})`,
}))
apiAxios.get<{
  data: Forum,
  count: number,
}>(url).then(res => {
  forum.value = res.data.data
  count.value = res.data.count
}).catch(err => console.log(err))

</script>

<template>
  <div class="h-full flex gap-2">
    <div class="grow flex flex-col gap-2 overflow-y-auto rounded-xl no-scrollbar">

      <el-card class="shrink-0" shadow="hover" body-class="relative bg-cover bg-center" :body-style="headerCover">
        <div class="absolute inset-0 bg-black/15" />
        <el-page-header class="relative text-white z-10" @back="$router.push('/bbs')">
          <template #content>
            <div class="flex gap-2 flex-wrap">
              <span class="text-white">
                {{ forum?.title||$t('utils.loading') }}
              </span>
              <span class="text-slate-100 text-sm">
                {{ forum?.subTitle }}
              </span>
            </div>
          </template>
          <template #extra>
            <div class="flex gap-2 flex-wrap">
              <el-button>
                {{ $t('bbs.forum.sendPost') }}
              </el-button>
              <el-button v-if="state.windowWidth==='sm'">
                {{ $t('bbs.forum.forumInfo') }}
              </el-button>
            </div>
          </template>
        </el-page-header>
      </el-card>

      <el-card class="h-full shrink-0" shadow="hover">
        <el-table v-if="forum" :data="forum.posts" @row-click="(row:any)=>router.push(`/bbs/post/${row.id}`)">
          <el-table-column prop="updatedAt" :label="$t('bbs.forum.updatedAt')" :formatter="(row:Post)=>formatDate(row.updatedAt)" />
          <el-table-column prop="title" :label="$t('bbs.forum.postTitle')" />
          <el-table-column prop="author.name" :label="$t('bbs.forum.authorName')" />
        </el-table>
        <el-skeleton class="grow" :rows="5" v-else />
      </el-card>

    </div>
    <forum-info v-if="state.windowWidth==='lg'" :forum="forum" />
  </div>
</template>
