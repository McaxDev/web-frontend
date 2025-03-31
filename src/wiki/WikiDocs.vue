<script setup lang="ts">
import {apiAxios} from '@/utils/axios';
import {type Docs} from '@/utils/tables';
import {Delete, Edit, View} from '@element-plus/icons-vue';
import {ref} from 'vue';
import {useRoute} from 'vue-router';

const path = useRoute().params.path
const isEdit = ref(false)
const docs = ref<Docs|null>(null)
const editing = ref('')
apiAxios.get<Docs>(`/wiki/document?path=${path}`).then(res => {
  docs.value = res.data
  editing.value = res.data.content.text
}).catch(err => console.log(err))
</script>

<template>
  <el-card v-if="docs" shadow="hover">
    <template #header>
      <el-page-header :content="docs.title" @back="$router.push('/wiki')">
        <template #extra>
          <el-switch v-model="isEdit" inline-prompt :active-icon="View" :inactive-icon="Edit" size="large" />
          <el-button class="ml-2" :icon="Delete" circle />
        </template>
      </el-page-header>
    </template>
    <div v-if="isEdit" class="flex flex-col gap-2">
      <el-input v-model="editing" type="textarea" autosize />
      <div class="flex">
        <el-button @click="editing=docs.content.text">
          {{$t('wiki.docs.recall')}}
        </el-button>
        <el-button>
          {{$t('wiki.docs.submit')}}
        </el-button>
      </div>
    </div>
    <div v-else v-html="docs.content.html" />
  </el-card>
</template>
