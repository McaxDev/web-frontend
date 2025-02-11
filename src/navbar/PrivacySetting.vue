<script setup lang="ts">
import {apiAxios} from '@/utils/axios';
import {ref, watch} from 'vue';

const isOpen = defineModel<boolean>()
interface Setting {
  id: string,
  name: string,
  value: boolean,
}
const settings = ref<Setting[]>([])

watch(isOpen, (value) => {
  if (value) {
    apiAxios.get<Setting[]>('/account/get/settings').then(res => {
      settings.value = res.data
      console.log(res.data)
    }).catch(err => console.log(err))
  }
})

function submitSetting(item: Setting) {
  apiAxios.post('/account/set/setting', {
    id: item.id,
    value: item.value,
  }).catch(err => console.log(err))
}
</script>

<template>
  <el-dialog
    v-model="isOpen"
    width="var(--dialog-width)"
    :title="$t('navbar.setting.user.privacy')">
    <el-form :model="settings">
      <el-form-item v-for="item in settings" :key="item.id" :label="item.name">
        <el-switch v-model="item.value" @click="submitSetting(item)" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="isOpen = false">
        {{ $t('cancel') }}
      </el-button>
    </template>
  </el-dialog>
</template>
