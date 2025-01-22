<script setup lang="ts">
import AxWikiMenu from '@/components/AxWikiMenu.vue';
import type {Wiki} from '@/types';
import {apiAxios} from '@/utils/axios';
import {watch} from 'vue';
import {ref} from 'vue';
import {useRoute} from 'vue-router';

const route = useRoute()
const wikis = ref<Record<string, Wiki>>({})
const wikiMenu = ref<Record<string, Wiki[]>>({})

const current = ref<Wiki | null>(null)
const drawer = ref(false)

// 获取目录列表
apiAxios.get<Wiki[]>('/wiki/list').then(res => {

  res.data.forEach(item => {
    wikis.value[item.path] = item
    if (!wikiMenu.value[item.category]) {
      wikiMenu.value[item.category] = []
    }
    wikiMenu.value[item.category].push(item)
  })

  handleRouteChange(route.params.page as string)
}).catch(err => console.log(err))

watch(() => route.params.page as string, handleRouteChange)

async function handleRouteChange(path: string) {
  if (!wikis.value[path].html) {
    const res = await apiAxios.get<Wiki>(`/wiki/get?path=${path}`)
    wikis.value[path] = res.data
  }
  current.value = wikis.value[path]
}
</script>

<template>
  <div class="wiki reactive-px">

    <div class="flex">
      <ax-wiki-menu class="hidden-xs-only" :data="wikiMenu" />
      <div>
        <span>{{ current?.title }}</span>
        <el-button>{{ $t('wiki.edit') }}</el-button>
        <div>
          {{ current?.html }}
        </div>
      </div>
    </div>

    <el-affix position="bottom" offset="100" class="affix-right hidden-sm-and-up">
      <el-button @click="drawer = !drawer">
        {{ $t('wiki.drawer') }}
      </el-button>
    </el-affix>

    <el-drawer v-model="drawer" body-class="p-0" :title="$t('wiki.drawer')">
      <ax-wiki-menu :data="wikiMenu" />
    </el-drawer>

  </div>
</template>

<style scoped>
.wiki {
  padding-top:20px;
  padding-bottom: 20px;
  border-radius: 10px;
}
.wiki-menu {
  width: 300px;
}
.wiki-title {
  font-weight: bold;
  font-size: 1.5em;
}
.affix-right {
  text-align: end;
}
</style>
