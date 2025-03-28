<script setup lang="ts">
const status = defineModel<boolean>()
import { apiAxios } from '@/utils/axios'
import { getMyInfo } from '@/utils/getMyInfo'
import { ref } from 'vue'
import CryptoJS from 'crypto-js'
import useUserStore from './stores/user'
import useSettingStore from './setting/setting'

const setting = useSettingStore()
const user = useUserStore()

const loginForm = ref({
  account: '',
  password: '',
})

const signupForm = ref({
  username: '',
  password: '',
  email: '',
  emailCode: '',
  captcha: '',
  captchaCode: '',
})

const retrieveForm = ref({
  email: '',
  emailCode: '',
  newPassword: '',
})

const action = ref('login')

async function handleLogin() {
  console.log('aaa')
  apiAxios
    .post<string>('/account/login', {
      account: loginForm.value.account,
      password: CryptoJS.SHA256(loginForm.value.password).toString(),
    })
    .then((res) => {
      localStorage.setItem('token', res.data)
      getMyInfo()
      console.log(user.user)
    })
    .catch((err) => console.log(err))
}
</script>

<template>
  <el-dialog v-model="status" class="max-w-96" :title="$t('login.welcome')" width="var(--dialog-width)">
    <el-tabs v-model="action">
      <!-- 登录表单 -->
      <el-tab-pane :label="$t('login.login')" name="login">
        <el-form :model="loginForm" label-width="auto">
          <el-form-item :label="$t('login.account')">
            <el-input v-model="loginForm.account" />
          </el-form-item>
          <el-form-item :label="$t('login.password')">
            <el-input v-model="loginForm.password" type="password" show-password />
          </el-form-item>
          <el-form-item>
            <el-button :color="setting.themeColor" :dark="setting.darkMode" @click="handleLogin">
              {{ $t('login.login') }}
            </el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>

      <!-- 注册表单 -->
      <el-tab-pane :label="$t('login.signup')" name="signup">
        <el-form :model="signupForm" label-width="auto">
          <el-form-item :label="$t('login.username')">
            <el-input v-model="signupForm.username" />
          </el-form-item>
          <el-form-item :label="$t('login.password')">
            <el-input v-model="signupForm.password" type="password" show-password />
          </el-form-item>
          <el-form-item :label="$t('login.email')">
            <el-input v-model="signupForm.email">
              <template #append>
                <el-button>{{ $t('login.sendEmail') }}</el-button>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item :label="$t('login.emailCode')">
            <el-input v-model="signupForm.emailCode" />
          </el-form-item>
          <el-form-item :label="$t('login.captcha')">
            <el-input v-model="signupForm.captchaCode" />
          </el-form-item>
          <el-form-item>
            <el-button :color="setting.themeColor" :dark="setting.darkMode">
              {{ $t('login.signup') }}
            </el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>

      <!-- 找回密码表单 -->
      <el-tab-pane :label="$t('login.retrieve')" name="retrieve">
        <el-form :model="retrieveForm" label-width="auto">
          <el-form-item :label="$t('login.email')">
            <el-input v-model="retrieveForm.email">
              <template #append>
                <el-button>{{ $t('login.sendEmail') }}</el-button>
              </template>
            </el-input>
          </el-form-item>

          <el-form-item :label="$t('login.emailCode')">
            <el-input v-model="retrieveForm.emailCode" />
          </el-form-item>
          <el-form-item :label="$t('login.newPassword')">
            <el-input v-model="retrieveForm.newPassword" type="password" show-password />
          </el-form-item>

          <el-form-item>
            <el-button :color="setting.themeColor" :dark="setting.darkMode">
              {{ $t('login.retrieve') }}
            </el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </el-dialog>
</template>
