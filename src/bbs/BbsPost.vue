<script setup lang="ts">
import useStateStore from '@/stores/state';
import {apiAxios} from '@/utils/axios';
import {formatDate} from '@/utils/chrono';
import {type Post} from '@/utils/tables';
import {ref} from 'vue';
import {useRoute} from 'vue-router';

const state = useStateStore()
const id = useRoute().params.path
const post = ref<Post|null>(null)
const count = ref(0)
apiAxios.get<{
  count: number,
  data: Post,
}>(`/bbs/post?id=${id}`).then(res => {
  post.value = res.data.data
  count.value = res.data.count
}).catch(err => console.log(err))

</script>

<template>
  <div class="h-full flex gap-2">

    <el-card v-if="post" class="grow" shadow="hover">
      <template #header>
        <el-page-header @back="$router.back">
          <template #content>
            <div class="flex gap-2 flex-wrap items-center">
              <div>{{post.title}}</div>
              <div class="text-sm text-black text-opacity-60">{{post.author.name}}</div>
            </div>
          </template>
          <template #extra>
            <div class="flex flex-col gap-1 text-sm text-black text-opacity-60">
              <div>{{$t('bbs.post.createdAt')}}: {{formatDate(post.createdAt)}}</div>
              <div>{{$t('bbs.post.updatedAt')}}: {{formatDate(post.updatedAt)}}</div>
            </div>
          </template>
        </el-page-header>
      </template>
    </el-card>

    <el-card v-if="state.windowWidth!=='sm'" :header="$t('bbs.post.reviewTitle')" shadow="hover">
    </el-card>
  </div>
</template>
