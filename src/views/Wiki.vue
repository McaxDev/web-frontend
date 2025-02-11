<script setup lang="ts">
import AxWikiMenu from '@/components/AxWikiMenu.vue';
import type {Wiki} from '@/types';
import {apiAxios} from '@/utils/axios';
import {watch} from 'vue';
import {ref} from 'vue';
import {useRoute} from 'vue-router';
import { Delete, Edit } from '@element-plus/icons-vue';
import {useGlobalStore} from '@/stores/global';

const route = useRoute()
const global = useGlobalStore()

// 当前wiki的锚点类型
interface Anchor {
  id: string,
  subAnchors: Anchor[],
}
// 键是wiki路径，值是wiki对象
const wikiByPath = ref<Record<string, Wiki>>({})
// 键是wiki分类，值是对应类型的wiki列表
const wikiListByCategory = ref<Record<string, Wiki[]>>({})
// 移动端菜单抽屉开关状态
const drawerStatus = ref(false)
// 编辑/新增内容对话框开关状态
const dialogStatus = ref(false)
// 编辑/新增内容对话框的内容
const dialogContent = ref({
  // 为true代表修改操作，为false代表新增操作
  isEdit: false,
  path: '',
  title: '',
  markdown: '',
})
// 当前wiki的锚点列表
const anchors = ref<Anchor[]>([])
// 位置页面
const unknownWiki: Wiki = {
  id: 0,
  createdAt: '',
  updatedAt: '',
  path: '',
  title: '未知页面',
  category: 'unknown',
  markdown: '## 未知页面',
  html: '<h2>未知页面</h2>',
}

// 获取目录列表
apiAxios.get<Wiki[]>('/wiki/list').then(res => {

  // 将获取的目录添加到两个对象
  res.data.forEach(item => {
    wikiByPath.value[item.path] = item;
    (wikiListByCategory.value[item.category] ??= []).push(item);
  })

  // 监听路由变化，获取wiki内容和锚点列表
  watch(() => route.params.path as string, (path: string) => {
    if (!wikiByPath.value[path]?.html && path) {
      apiAxios.get<{
        anchors: Anchor[],
        wiki: Wiki,
      }>(`/wiki/get?path=${path}`).then(res => {
        wikiByPath.value[path] = res.data.wiki
        anchors.value = res.data.anchors
      }).catch(err => {
        if (err.response?.status === 404) {
          wikiByPath.value[path] = unknownWiki
        } else {
          console.log(err)
        }
      })
    }
  }, {immediate: true})
}).catch(err => console.log(err))

// 打开编辑wiki对话框
function openDialog(isEdit: boolean) {
  dialogContent.value.isEdit = isEdit
  const current = wikiByPath.value[route.params.path as string]
  if (current) {
    dialogContent.value.path = isEdit ? current.path : ''
    dialogContent.value.title =  isEdit ? current.title : ''
    dialogContent.value.markdown = isEdit ? current.markdown : ''
  }
  dialogStatus.value = true
}

// 执行新增或编辑wiki
async function doSetWiki() {
  // 编辑wiki
  if (dialogContent.value.isEdit) {
  await apiAxios.post('/wiki/edit', {
    id: wikiByPath.value[route.params.path as string].id,
    path: dialogContent.value.path,
    title: dialogContent.value.title,
    markdown: dialogContent.value.markdown,
  })
  // 新增wiki
  } else {

  }
}

async function doDeleteWiki() {}

</script>

<template>
  <div class="wiki-container">

    <!-- 桌面端目录 -->
    <ax-wiki-menu class="hidden-xs-only wiki-menu" :data="wikiListByCategory" @open-dialog="openDialog(false)" />

    <!-- 正文 -->
    <section class="wiki-main">
      <header class="wiki-title">
        <div>{{ wikiByPath[$route.params.path as string]?.title }}</div>
        <el-button @click="openDialog(true)" class="ms-auto" circle :icon="Edit" />
        <el-button @click="doDeleteWiki" circle :icon="Delete" />
      </header>
      <article class="wiki-content" v-html="wikiByPath[$route.params.path as string]?.html" />

      <!-- 移动端目录按钮 -->
      <el-button @click="drawerStatus = !drawerStatus" class="affix-right hidden-sm-and-up">
      </el-button>

    </section>

    <!-- 锚点列表 -->
    <section class="wiki-anchor hidden-md-and-down">
      <el-anchor>
        <el-anchor-link v-for="anchor in anchors" :key="anchor.id" :href="`#${anchor.id}`">
          {{ anchor.id }}
          <template v-if="anchor.subAnchors" #sub-link>
            <el-anchor-link v-for="subAnchor in anchor.subAnchors" :key="subAnchor.id" :href="`#${subAnchor.id}`">
              {{ subAnchor.id }}
            </el-anchor-link>
          </template>
        </el-anchor-link>
      </el-anchor>
    </section>

    <!-- 移动端目录 -->
    <el-drawer v-model="drawerStatus" body-class="p-0" :title="$t('wiki.drawer')" size="60%">
      <ax-wiki-menu :data="wikiListByCategory" @open-dialog="openDialog(false)" />
    </el-drawer>

    <!-- 添加/修改文档对话框 -->
    <el-dialog width="var(--dialog-width)" v-model="dialogStatus" :title="$t('wiki.edit')">
      <el-form :model="dialogContent">
        <el-form-item :label="$t('wiki.path')">
          <el-input v-model="dialogContent.path" />
        </el-form-item>
        <el-form-item :label="$t('wiki.title')">
          <el-input v-model="dialogContent.title" />
        </el-form-item>
        <el-form-item :label="$t('wiki.content')">
          <el-input type="textarea" v-model="dialogContent.markdown" />
        </el-form-item>
      </el-form>

      <template #footer>
        <el-button @click="dialogStatus = false">{{ $t('cancel') }}</el-button>
        <el-button :color="global.theme" @click="doSetWiki">{{ $t('confirm') }}</el-button>
      </template>
    </el-dialog>

  </div>
</template>

<style scoped>
.wiki-container {
  height: calc(100vh - 60px);
  display: flex;
  overflow: hidden;
}
.wiki-menu {
  width: 200px;
  overflow-y: auto;
}
.wiki-main {
  flex-grow: 2;
  overflow-y: auto;
}
.wiki-title {
  display: flex;
  font-weight: bold;
  font-size: 1.5em;
  margin: 20px;
  color: var(--primary);
}
.wiki-content {
  margin: 15px;
}
.wiki-anchor {
  flex-grow: 1;
  padding: 20px;
}
.affix-right {
  text-align: end;
}
</style>
