<script setup lang="ts">
import {useGlobalStore} from '@/stores/global';
import {ref} from 'vue';

const global = useGlobalStore()

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
</script>

<template>
  <el-row class="login">

    <el-col :span="0" :sm="4" :md="13" :lg="14" />

    <el-col :span="24" :sm="16" :md="10" :lg="8" class="form">

      <h2>
        {{ $t('login.brand') }}
      </h2>

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
              <el-button :color="global.theme" :dark="global.isDark">
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
              <el-button :color="global.theme" :dark="global.isDark">
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
              <el-button :color="global.theme" :dark="global.isDark">
                {{ $t('login.retrieve') }}
              </el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>

      </el-tabs>
    </el-col>

  </el-row>
</template>

<style scoped>
.login {
  height: calc(100vh - 60px);
  padding: 120px 20px;
  background-image: url(/login-bg.jpg);
}
.form {
  padding: 0 30px;
  background-color: var(--el-bg-color);
  border-radius: 10px;
}
</style>
