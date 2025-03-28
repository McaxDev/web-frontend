<script setup lang="ts">
import {ref} from 'vue';
import useSettingStore from './setting';
import {computed} from 'vue';
import fonts from './FontFamily';

const darkMode = ref('auto')
const setting = useSettingStore()

const fontSizeNum = computed({
  get: () => parseInt(setting.fontSize || '16px', 10),
  set: (val) => {
    setting.fontSize = `${val}px`
  },
})

const themeColors = [
  '#28ABCE',
  '#2563EB', '#0891B2', '#7C3AED',
  '#FF6B6B', '#FBBF24', '#10B981',
  '#EC4899', '#A78BFA', '#6EE7B7',
  '#047857', '#B91C1C', '#1E293B',
]

const transations = [
  ['', '无过渡效果'],
  ['el-fade-in-linear', '线性淡入'],
  ['el-fade-in', '淡入'],
  ['el-zoom-in-left', '左侧缩放'],
  ['el-zoom-in-center', '中央缩放'],
  ['el-zoom-in-top', '顶部缩放'],
  ['el-zoom-in-bottom', '底部缩放'],
].map(([id, label]) => ({id, label}))
</script>

<template>
  <el-card body-class="grid grid-cols-1 md:grid-cols-2 gap-4" shadow="never">
    <template #header>
      <el-page-header @back="$router.back" :content="$t('systemSetting.title')" />
    </template>

    <!-- 个性化设置 -->
    <el-card :header="$t('systemSetting.personalization.title')" shadow="hover">
      <el-form>

        <!-- 主题色 -->
        <el-form-item :label="$t('systemSetting.personalization.themeColor')">
          <el-color-picker v-model="setting.themeColor" :predefine="themeColors" />
        </el-form-item>

        <!-- 字体大小 -->
        <el-form-item :label="$t('systemSetting.personalization.fontSize')">
          <el-slider :min="8" :max="32" class="w-64" v-model="fontSizeNum" />
        </el-form-item>

        <!-- 暗黑模式 -->
        <el-form-item :label="$t('systemSetting.personalization.darkMode')">
          <el-radio-group v-model="darkMode">
            <el-radio-button :label="$t('systemSetting.personalization.dark')" value="dark" />
            <el-radio-button :label="$t('systemSetting.personalization.light')" value="light" />
            <el-radio-button :label="$t('systemSetting.personalization.auto')" value="auto" />
          </el-radio-group>
        </el-form-item>

        <!-- 字体样式 -->
        <el-form-item :label="$t('systemSetting.personalization.fontFamily')">
          <el-cascader :options="fonts" v-model="setting.fontFamily" :show-all-levels="false" :props="{emitPath: false}">
          </el-cascader>
        </el-form-item>

        <!-- 过渡动画 -->
        <el-form-item :label="$t('systemSetting.personalization.transition')">
          <el-select v-model="setting.transition" class="w-48">
            <el-option v-for="trans in transations" :key="trans.id" :label="trans.label" :value="trans.id" />
          </el-select>
        </el-form-item>
      </el-form>
    </el-card>

    <!-- 技术性设置 -->
    <el-card :header="$t('systemSetting.technical.title')" shadow="hover">
      <el-form>

        <el-form-item :label="$t('systemSetting.technical.serverAddr')">
          <el-input class="w-64" v-model="setting.apiAddr" />
        </el-form-item>

        <el-form-item :label="$t('systemSetting.technical.storage')">
          <el-button>{{ $t('systemSetting.technical.clearStorage') }}</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </el-card>
</template>
