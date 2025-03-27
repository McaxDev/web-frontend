<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { addr } from '@/config'
import { useI18n } from 'vue-i18n'
import useUserStore from '@/stores/user'
import LangIcon from './LangIcon.vue'
import { ElMessage } from 'element-plus'
import { outerMenuItems } from './MenuItems'
import InnerNavBar from './InnerNavBar.vue'
import { UserFilled } from '@element-plus/icons-vue'
import useStateStore from '@/stores/state'

const route = useRoute()
const i18n = useI18n()
const { t } = useI18n()
const user = useUserStore()
const state = useStateStore()
const drawerStatus = ref(false)

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
  <el-card body-class="p-0" shadow="hover">
    <el-menu :default-active="`/${route.path.split('/')[1]}`" mode="horizontal" router :ellipsis="false">
      <!-- 打开导航栏抽屉 -->
      <el-menu-item class="hidden-sm-and-up navitem-less-px" @click="drawerStatus = true">
        <el-icon>
          <Menu />
        </el-icon>
      </el-menu-item>

      <!-- LOGO -->
      <el-menu-item>
        <div class="logo" />
      </el-menu-item>

      <!-- 导航栏外层 -->
      <el-menu-item
        v-if="state.windowWidth === 'md' || state.windowWidth === 'lg'"
        v-for="item in outerMenuItems"
        :key="item.label"
        class="hidden-xs-only"
        :index="item.path"
      >
        {{ $t(item.label) }}
      </el-menu-item>

      <!-- 导航栏内层 -->
      <el-sub-menu v-if="state.windowWidth === 'md'">
        <template #title>
          {{ $t('navbar.others') }}
        </template>
        <inner-nav-bar />
      </el-sub-menu>
      <inner-nav-bar v-if="state.windowWidth === 'lg'" />

      <!-- 多语言切换 -->
      <el-sub-menu class="navlist-no-arrow nav-list ms-auto" index="language">
        <template #title>
          <el-icon>
            <lang-icon />
          </el-icon>
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
          <el-avatar v-if="user.user" :src="`${addr.api}/file/images/${user.user.avatar}`" />
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
        <el-menu-item v-if="!user.user" index="/login">
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

        <!-- 系统设置按钮 -->
        <el-menu-item index="/system-setting">
          <el-icon>
            <Setting />
          </el-icon>
          {{ $t('navbar.systemSetting') }}
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
      <el-menu-item v-for="item in outerMenuItems" :key="item.label" :index="item.path">
        {{ $t(item.label) }}
      </el-menu-item>
      <inner-nav-bar />
    </el-menu>
  </el-drawer>
</template>

<style>
.nav-brand {
  width: 125px;
  display: flex !important;
  align-items: center;
}

.ms-auto {
  margin-left: auto !important;
}

#el-menu {
  --el-menu-bg-color: var(--nav-bg-color);
}

.navlist-no-arrow .el-sub-menu__icon-arrow {
  display: none;
}

.nav-list .el-sub-menu__title {
  padding-left: 5px !important;
  padding-right: 5px !important;
}

.navitem-less-px {
  padding-left: 5px !important;
  padding-right: 5px !important;
}

.avatar-icon .el-icon {
  margin-right: 0 !important;
}

.logo {
  width: 150px;
  height: 30px;
  background-color: var(--primary);
  -webkit-mask-image: url(/logo.png);
  mask-image: url(/logo.png);
  mask-size: contain;
  mask-repeat: no-repeat;
}
</style>
