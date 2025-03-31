<script setup lang="ts">
import useStateStore from '@/stores/state';
import BbsMyinfo from './BbsMyinfo.vue';
import useSettingStore from '@/setting/setting';
import {apiAxios} from '@/utils/axios';
import type {BBS} from '@/utils/tables';
import {ref} from 'vue';
const myinfoState = ref(false)
const BBSs = ref<BBS[]|null>(null)
const setting = useSettingStore()
const state = useStateStore()
apiAxios.get<BBS[]>('/bbs/bbs').then(res => {
  BBSs.value = res.data
}).catch(err => console.log(err))
</script>

<template>
  <div class="h-full flex gap-2">
    <el-card class="grow flex flex-col" body-class="grow overflow-y-auto" shadow="hover">
      <template #header>
        <div class="flex flex-row justify-between mx-2 items-center">
          <div>{{ $t(`bbs.list.title`) }}</div>
          <el-button v-if="state.windowWidth === 'sm'" @click="myinfoState = true">
            {{ $t('bbs.layout.openMyinfo') }}
        </el-button>
        </div>
      </template>
      <div v-if="BBSs" class="flex flex-col gap-2">
        <div v-for="group in BBSs" :key="group.id">
          <div>{{ group.label }}</div>
          <div class="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <el-card v-for="forum in group.forums" :key="forum.title"
              class="hover:translate-x-1 group"
              body-class="aspect-video bg-cover bg-center flex flex-col justify-end text-white relative"
              :body-style="{backgroundImage: `url(${setting.fileAddr}/images/${forum.cover?.filename})`}"
              shadow="hover"
              @click="$router.push(`/bbs/forum/${forum.path}`)"
            >
              <div class="z-10">
                <h3 class="text-xl font-bold mb-2">{{forum.title}}</h3>
                <div class="flex justify-between items-center">
                  <p class="line-clamp-2">{{forum.subTitle}}</p>
                  <el-icon :size="20" class="transition-transform group-hover:translate-x-1">
                    <ArrowRightBold />
                  </el-icon>
                </div>
              </div>
              <div class="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-black/40 to-transparent z-0 transition-opacity duration-300 group-hover:opacity-30" />
            </el-card>
          </div>
        </div>
      </div>
      <el-empty v-else :description="$t('bbs.home.empty')" />
    </el-card>
    <bbs-myinfo v-if="state.windowWidth==='lg'" />
  </div>
  <el-drawer v-model="myinfoState" size="50%" :title="$t('bbs.layout.myinfo')">
    <bbs-myinfo />
  </el-drawer>
</template>
