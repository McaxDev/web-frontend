<script setup lang="ts">
import {useGlobalStore} from '@/stores/global';
import {reactive, ref, watch} from 'vue';
import Cookies from 'js-cookie';
import {ElMessageBox} from 'element-plus';
import {useI18n} from 'vue-i18n';
import { addr } from '@/config';
import {apiAxios} from '@/utils/axios';
import {useUserStore} from '@/stores/user';
import PrivacySetting from './PrivacySetting.vue';

const { t } = useI18n()
const model = defineModel<boolean>()
const global = useGlobalStore()
const user = useUserStore()

const systemForm = reactive({
  apiAddr: addr.api,
})

const userForm = reactive({

})

const isPrivacyOpen = ref(false)

watch(() => global.transition, (value) => {
  Cookies.set('transition', value, { sameSite: 'Lax' })
})

const activeTab = ref('system')

watch(() => global.fontSize, (value) => {
  document.documentElement.style.setProperty('--font-size', value+'px')
  Cookies.set('font-size', value.toString(), { sameSite: 'Lax' })
})

const transations: [
  id: string,
  title: string,
][] = [
  ['', '无过渡效果'],
  ['el-fade-in-linear', '线性淡入'],
  ['el-fade-in', '淡入'],
  ['el-zoom-in-left', '左侧缩放'],
  ['el-zoom-in-center', '中央缩放'],
  ['el-zoom-in-top', '顶部缩放'],
  ['el-zoom-in-bottom', '底部缩放'],
]


function getCookie() {
  const all = Cookies.get()
  ElMessageBox.alert(JSON.stringify(all), t('navbar.setting.system.getCookie'), {
    confirmButtonText: t('confirm'),
  })
}

function delCookie() {
  const cookies = document.cookie.split(';')
  cookies.forEach(cookie => {
    const cookieName = cookie.split('=')[0].trim()
    Cookies.remove(cookieName)
  });
}

function confirm() {
  addr.api = systemForm.apiAddr
  apiAxios.defaults.baseURL = systemForm.apiAddr
  model.value = false
}
</script>

<template>
  <el-dialog v-model="model" width="var(--dialog-width)" :title="$t('navbar.setting.title')">
    <el-tabs v-model="activeTab">

      <!-- 系统设置 -->
      <el-tab-pane :label="$t('navbar.setting.system.tab')" name="system">
        <el-form :model="systemForm">
          <div class="text-title">
            {{ $t('navbar.setting.system.personalization') }}
          </div>
          <el-form-item :label="$t('navbar.setting.system.fontSize')">
            <el-slider v-model="global.fontSize" :min="8" :max="32" />
          </el-form-item>
          <el-form-item :label="$t('navbar.setting.system.transition')">
            <el-select v-model="global.transition">
              <el-option
                v-for="item in transations" :key="item[0]"
                :label="item[1]" :value="item[0]"
              />
            </el-select>
          </el-form-item>
          <div class="text-title">
            {{ $t('navbar.setting.system.technical') }}
          </div>
          <el-form-item :label="$t('navbar.setting.system.apiAddr')">
            <el-input v-model="systemForm.apiAddr" />
          </el-form-item>
          <el-form-item>
            <el-button @click="delCookie" :color="global.theme">
              {{ $t('navbar.setting.system.delCookie') }}
            </el-button>
            <el-button @click="getCookie">
              {{ $t('navbar.setting.system.getCookie') }}
            </el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>

      <!-- 用户设置 -->
      <el-tab-pane :label="$t('navbar.setting.user.tab')" name="user" v-if="user.user">
        <el-form :model="userForm">
          <el-form-item>
            <el-button @click="isPrivacyOpen = true">
              {{ $t('navbar.setting.user.privacy') }}
            </el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
    <template #footer>
      <el-button @click="model = false">{{ $t('cancel') }}</el-button>
      <el-button :color="global.theme" @click="confirm">{{ $t('confirm') }}</el-button>
    </template>
  </el-dialog>

  <privacy-setting v-model="isPrivacyOpen" />
</template>
