<!--
  这是自定义主题的颜色拾取器
-->
<script setup lang="ts">
import {useGlobalStore} from '@/stores/global';
import {ref} from 'vue';

const model = defineModel<boolean>()
const colorPicker = ref('#28ABCE')
const global = useGlobalStore()

function setCustomColor() {
  global.toggleTheme(colorPicker.value)
  model.value = false
}
</script>

<template>
  <el-dialog v-model="model" :title="$t('navbar.pickerTitle')" width="200">
    <div class="my-2">
      <el-text class="mr-2">{{ $t('navbar.selectColor') }}</el-text>
      <el-color-picker v-model="colorPicker" />
    </div>
    <div>
      <el-button @click="model=false">{{ $t('cancel') }}</el-button>
      <el-button type="primary" @click="setCustomColor">{{ $t('confirm') }}</el-button>
    </div>
  </el-dialog>
</template>
