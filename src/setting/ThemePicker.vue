<script setup lang="ts">
import useSettingStore from './setting'
import { ref } from 'vue'

const model = defineModel<boolean>()
const colorPicker = ref('#28ABCE')
const setting = useSettingStore()

const preDefineThemes = [
  '#28ABCE', // 青色
  '#409EFF', // 蓝色
  '#67C23A', // 绿色
  '#E6A23C', // 黄色
  '#F56C6C', // 红色
  '#909399', // 灰色
]

function setCustomColor() {
  model.value = false
}
</script>

<template>
  <el-dialog v-model="model" :title="$t('navbar.pickerTitle')" width="200">
    <div class="my-2">
      <el-text class="mr-2">{{ $t('navbar.selectColor') }}</el-text>
      <el-color-picker v-model="colorPicker" :predefine="preDefineThemes" />
    </div>
    <div>
      <el-button @click="model = false">{{ $t('cancel') }}</el-button>
      <el-button type="primary" @click="setCustomColor">{{ $t('confirm') }}</el-button>
    </div>
  </el-dialog>
</template>
