<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import useUserStore from '@/stores/user'
import LangIcon from './LangIcon.vue'
import { ElMessage } from 'element-plus'
import OuterNavBar from './OuterNavBar.vue'
import InnerNavBar from './InnerNavBar.vue'
import { UserFilled } from '@element-plus/icons-vue'
import useStateStore from '@/stores/state'
import LoginSignup from '@/LoginSignup.vue'
import {rightMenuItems} from './MenuItems'
import useSettingStore from '@/setting/setting'

const route = useRoute()
const i18n = useI18n()
const { t } = useI18n()
const user = useUserStore()
const state = useStateStore()
const setting = useSettingStore()
const drawerStatus = ref(false)
const loginStatus = ref(false)

const languages = [
  ['en', 'English'],
  ['zhCN', '简体中文'],
  ['zhTW', '繁體中文'],
  ['ru', 'Русский'],
  ['fr', 'Français'],
  ['ko', '한국어'],
  ['ja', '日本語'],
  ['es', 'Español'],
  ['pt', 'Português'],
  ['ar', 'البرتغالية'],
].map(([id, label]) => ({id, label}))

function toggleLanguage(language: string) {
  i18n.locale.value = language
  localStorage.setItem('language', language)
}

function logout() {
  user.user = null
  localStorage.removeItem('token')
  ElMessage({
    type: 'success',
    message: t('navbar.logoutMsg'),
  })
}
</script>

<template>
  <el-card body-class="py-0 px-1" shadow="hover">
    <el-menu :default-active="`/${route.path.split('/')[1]}`" mode="horizontal" router :ellipsis="false">
      <!-- 打开导航栏抽屉 -->
      <el-menu-item v-if="state.windowWidth==='sm'" @click="drawerStatus=true">
        <el-icon size="2rem">
          <Menu />
        </el-icon>
      </el-menu-item>

      <!-- LOGO -->
      <el-menu-item>
        <div class="logo" />
      </el-menu-item>

      <!-- 导航栏外层 -->
      <outer-nav-bar v-if="state.windowWidth!=='sm'" />

      <!-- 导航栏内层 -->
      <el-sub-menu v-if="state.windowWidth==='md'" index="inner">
        <template #title>
          {{ $t('navbar.others') }}
        </template>
        <inner-nav-bar />
      </el-sub-menu>
      <inner-nav-bar v-if="state.windowWidth==='lg'" />

      <!-- 多语言切换 -->
      <el-sub-menu class="navlist-no-arrow nav-list ms-auto" index="language">
        <template #title>
          &nbsp;
          <el-icon>
            <lang-icon />
          </el-icon>
          &nbsp;
        </template>
        <el-menu-item
          v-for="language in languages"
          :key="language.id"
          @click="toggleLanguage(language.id)"
        >
          {{ language.label }}
        </el-menu-item>
      </el-sub-menu>

      <!-- 头像按钮 -->
      <el-sub-menu class="navlist-no-arrow nav-list" index="avatar">
        <template #title>
          <el-avatar v-if="user.user" :src="`${setting.fileAddr}/images/${user.user.avatar}`" />
          <el-avatar v-else :icon="UserFilled" class="avatar-icon" />
        </template>

        <!-- 扫描二维码 -->
        <el-menu-item>
          <el-icon>
            <FullScreen />
          </el-icon>
          {{ $t('navbar.scan') }}
        </el-menu-item>

        <!-- 下载客户端 -->
        <el-menu-item>
          <el-icon>
            <Download />
          </el-icon>
          {{ $t('navbar.download') }}
        </el-menu-item>

        <!-- 登录 -->
        <el-menu-item v-if="!user.user" @click="loginStatus=true">
          <el-icon>
            <User />
          </el-icon>
          {{ $t('navbar.login') }}
        </el-menu-item>

        <!-- 用户设置按钮 -->
        <el-menu-item v-if="user.user" index="/user-setting">
          <el-icon>
            <Setting />
          </el-icon>
          {{ $t('navbar.userSetting.title') }}
        </el-menu-item>

        <!-- 其余的页面导航 -->
        <el-menu-item v-for="item in rightMenuItems" :key="item.label" :index="item.path">
          <el-icon>
            <component :is="item.icon" />
          </el-icon>
          {{ $t(item.label) }}
        </el-menu-item>

        <!-- 退出登录按钮 -->
        <el-menu-item v-if="user.user" @click="logout">
          <el-icon>
            <SwitchButton />
          </el-icon>
          {{ $t('navbar.logout') }}
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-card>

  <!-- 移动端侧边栏菜单 -->
  <el-drawer
    v-model="drawerStatus"
    direction="ltr"
    :title="$t('navbar.drawer')"
    body-class="p-0"
    size="50%"
  >
    <el-menu :default-active="route.path" mode="vertical" router :ellipsis="false">
      <outer-nav-bar />
      <inner-nav-bar />
    </el-menu>
  </el-drawer>

  <login-signup v-model="loginStatus" />
</template>

<style>
.nav-brand {
  width: 125px;
  display: flex !important;
  align-items: center;
}

#el-menu {
  --el-menu-bg-color: var(--nav-bg-color);
}

.navlist-no-arrow .el-sub-menu__icon-arrow {
  display: none;
}

.avatar-icon .el-icon {
  margin-right: 0 !important;
}

.logo {
  width: 140px;
  height: 30px;
  background-color: var(--primary);
  -webkit-mask-image: url(/logo.png);
  mask-image: url(/logo.png);
  mask-size: contain;
  mask-repeat: no-repeat;
}
</style>
