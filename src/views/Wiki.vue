<script setup lang="ts">
import AxWikiMenu from '@/components/AxWikiMenu.vue';
import type {Wiki} from '@/types';
import {apiAxios} from '@/utils/axios';
import {watch} from 'vue';
import {ref} from 'vue';
import {useRoute} from 'vue-router';
import { Delete, Edit } from '@element-plus/icons-vue';

const route = useRoute()
const wikis = ref<Record<string, Wiki>>({})
const wikiMenu = ref<Record<string, Wiki[]>>({})

const current = ref<Wiki | null>(null)
const drawer = ref(false)
const dialog = ref(false)

const editing = ref({})

// 获取目录列表
apiAxios.get<Wiki[]>('/wiki/list').then(res => {

  res.data.forEach(item => {
    wikis.value[item.path] = item
    if (!wikiMenu.value[item.category]) {
      wikiMenu.value[item.category] = []
    }
    wikiMenu.value[item.category].push(item)
  })

  watch(() => route.params.page as string, async (path: string) => {
    if (!wikis.value[path].html) {
      const res = await apiAxios.get<Wiki>(`/wiki/get?path=${path}`)
      wikis.value[path] = res.data
    }
    current.value = wikis.value[path]
  }, {immediate: true})
}).catch(err => console.log(err))

</script>

<template>
  <div class="wiki reactive-margin">

    <div class="flex">

      <ax-wiki-menu class="hidden-xs-only wiki-menu" :data="wikiMenu" />

      <div class="wiki-content">
        <div class="wiki-title flex">
          <div>{{ current?.title }}</div>
          <el-button @click="dialog=true" class="ms-auto" circle :icon="Edit" />
          <el-button @click="dialog=true" circle :icon="Delete" />
        </div>
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

    <el-drawer v-model="drawer" body-class="p-0" :title="$t('wiki.drawer')" size="60%">
      <ax-wiki-menu :data="wikiMenu" />
    </el-drawer>

    <el-dialog v-model="dialog" title="编辑内容">
      <el-form :model="editing">
        <el-form-item :label="$t('wiki.path')">
          <el-input>

          </el-input>
        </el-form-item>
        <el-form-item :label="$t('wiki.title')">
          <el-input>

          </el-input>
        </el-form-item>

        <el-form-item :label="$t('wiki.content')">
          <el-input type="textarea">

          </el-input>
        </el-form-item>
      </el-form>
    </el-dialog>

  </div>
</template>

<style scoped>
.wiki {
  padding-top:20px;
  padding-bottom: 20px;
  border-radius: 10px;
}
.wiki-menu {
  flex-grow: 1;
}
.wiki-content {
  flex-grow: 5;
}
.wiki-title {
  font-weight: bold;
  font-size: 1.5em;
}
.affix-right {
  text-align: end;
}
</style>
