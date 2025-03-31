<script setup lang="ts">
import {apiAxios} from '@/utils/axios';
import type {Wiki} from '@/utils/tables';
import {Close, Delete, Edit, Plus} from '@element-plus/icons-vue';
import {ref} from 'vue';

const wikis = ref<Wiki[]>([])
apiAxios.get<Wiki[]>('/wiki/wikis').then(res => {
  wikis.value = res.data
}).catch(err => console.log(err))

const editing = ref('')
const editStatus = ref(0)
function edit(wiki: Wiki) {
  editStatus.value = editStatus.value===0 ? wiki.id : 0
  editing.value = wiki.label
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <el-card v-for="wiki in wikis" :key="wiki.id" shadow="hover" body-class="flex flex-wrap gap-2">
      <template #header>
        <div class="flex gap-2 items-center">
          <div v-if="editStatus!==wiki.id">{{ wiki.label }}</div>
          <div v-else class="flex gap-2">
            <el-input v-model="editing" class="max-w-64" />
            <el-button>
              {{$t('wiki.list.submit')}}
            </el-button>
          </div>
          <el-button class="ms-auto" :icon="editStatus===wiki.id?Close:Edit" circle @click="edit(wiki)" />
          <el-button :icon="Delete" circle />
        </div>
      </template>
      <el-card v-for="document in wiki.documents" :key="document.id" shadow="hover" @click="$router.push(`/wiki/${document.path}`)">
        {{ document.title }}
      </el-card>
      <el-card shadow="hover">
        <el-icon>
          <Plus />
        </el-icon>
      </el-card>
    </el-card>
  </div>
</template>
