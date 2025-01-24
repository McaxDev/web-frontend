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

const editing = ref({
  path: '',
  title: '',
  content: '',
})

// 获取目录列表
apiAxios.get<Wiki[]>('/wiki/list').then(res => {

  res.data.forEach(item => {
    wikis.value[item.path] = item;
    (wikiMenu.value[item.category] ??= []).push(item);
  })

  watch(() => route.params.page as string, async (path: string) => {
    if (!wikis.value[path].html) {
      const res = await apiAxios.get<Wiki>(`/wiki/get?path=${path}`)
      wikis.value[path] = res.data
    }
    current.value = wikis.value[path]
  }, {immediate: true})
}).catch(err => console.log(err))

function handleWikiEdit() {
  if (current.value) {
    editing.value.path = current.value.path
    editing.value.title = current.value.title
    editing.value.content = current.value.content
  }
  dialog.value = true
}

function handleWikiAdd() {
  editing.value = {
    path: '',
    title: '',
    content: '',
  }
  dialog.value = true
}

</script>

<template>
  <div class="wiki">

    <ax-wiki-menu class="hidden-xs-only wiki-menu" :data="wikiMenu" @open-dialog="handleWikiAdd" />

    <div class="wiki-content">
      <div class="wiki-title">
        <div>{{ current?.title }}</div>
        <el-button @click="handleWikiEdit" class="ms-auto" circle :icon="Edit" />
        <el-button @click="dialog=true" circle :icon="Delete" />
      </div>
      <div>
        {{ current?.html }}
      </div>

    </div>

    <el-affix position="bottom" offset="100" class="affix-right hidden-sm-and-up">
      <el-button @click="drawer = !drawer">
        {{ $t('wiki.drawer') }}
      </el-button>
    </el-affix>

    <el-drawer v-model="drawer" body-class="p-0" :title="$t('wiki.drawer')" size="60%">
      <ax-wiki-menu :data="wikiMenu" @open-dialog="handleWikiAdd" />
    </el-drawer>

    <el-dialog v-model="dialog" :title="$t('wiki.edit')">
      <el-form :model="editing">
        <el-form-item :label="$t('wiki.path')">
          <el-input v-model="editing.path">

          </el-input>
        </el-form-item>
        <el-form-item :label="$t('wiki.title')">
          <el-input v-model="editing.title">

          </el-input>
        </el-form-item>

        <el-form-item :label="$t('wiki.content')">
          <el-input type="textarea" v-model="editing.content">

          </el-input>
        </el-form-item>
      </el-form>
    </el-dialog>

  </div>
</template>

<style scoped>
.wiki {
  height: calc(100vh - 60px);
  display: flex;
  overflow: hidden;
}
.wiki-menu {
  width: 300px;
  overflow-y: auto;
}
.wiki-content {
  flex-grow: 1;
  overflow-y: auto;
}
.wiki-title {
  display: flex;
  font-weight: bold;
  font-size: 1.5em;
}
.affix-right {
  text-align: end;
}
</style>
