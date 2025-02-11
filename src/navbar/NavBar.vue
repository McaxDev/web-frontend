<script lang="ts" setup>
import {useRoute, useRouter} from 'vue-router';
import {
  Setting, Menu, UserFilled, Sunny, Moon, BrushFilled, Brush, User, EditPen, Search, FullScreen, SwitchButton,
} from '@element-plus/icons-vue';
import {ref,watch} from 'vue';
import {languages} from '@/config';
import {useI18n} from 'vue-i18n';
import {useUserStore} from '@/stores/user';
import {useGlobalStore} from '@/stores/global';
import AxLangIcon from './AxLangIcon.vue';
import NavOthers from './NavOthers.vue';
import {themes, fontGroups} from '@/config';
import AppSetting from './AppSetting.vue';
import AxThemePicker from './AxThemePicker.vue';
import Cookies from 'js-cookie'
import { addr } from '@/config';
import {ElMessage} from 'element-plus';

const router = useRouter()
const route = useRoute()
const i18n = useI18n()
const { t } = useI18n()
const user = useUserStore()
const global = useGlobalStore()

const allNavItems = router.getRoutes().filter(item => item.meta.navbar)
const navbarItems = allNavItems.filter(item => !item.meta.others)
const navOthers = allNavItems.filter(item => item.meta.others)

const drawer = ref(false)
const pickerDialog = ref(false)
const search = ref('')
const isSettingOpen = ref(false)

function toggleLanguage(language: string) {
  i18n.locale.value = language
  Cookies.set('language', language, { sameSite: 'Lax' })
}

watch(() => global.isDark, (value) => {
  if (value) {
    document.documentElement.setAttribute('class', 'dark')
  } else {
    document.documentElement.removeAttribute('class')
  }
})

function setFontFamily(font: string) {
  document.documentElement.style.setProperty('--font-family', font)
  Cookies.set('font-family', font, { sameSite: 'Lax' })
}

function logout() {
  user.user = null
  localStorage.removeItem('token')
  ElMessage({
    type: 'success',
    message: t('navbar.logoutMsg')
  })
}

</script>

<template>
  <el-menu
    :default-active="route.path"
    mode="horizontal"
    router
    :ellipsis="false"
    id="el-menu"
  >

    <el-menu-item
      class="hidden-sm-and-up navitem-less-px"
      @click="drawer=true"
    >
      <el-icon>
        <Menu />
      </el-icon>
    </el-menu-item>

    <el-menu-item>
      <el-image src="/logo.png" class="nav-brand" />
    </el-menu-item>

    <el-menu-item class="hidden-xs-only"
      v-for="item in navbarItems" :key="item.name" :index="item.path"
    >
      {{ $t(item.meta.title as string) }}
    </el-menu-item>

    <el-sub-menu class="hidden-xs-only hidden-lg-and-up" index="others">
      <template #title>{{ $t('navbar.others') }}</template>
      <el-menu-item v-for="item in navOthers" :key="item.name" :index="item.path">
      {{ $t(item.meta.title as string) }}
      </el-menu-item>
      <nav-others index="others-nav-others" />
    </el-sub-menu>

    <el-menu-item class="hidden-md-and-down" v-for="item in navOthers" :key="item.name" :index="item.path">
      {{ $t(item.meta.title as string) }}
    </el-menu-item>

    <nav-others class="hidden-md-and-down" index="wide-nav-others" />

    <el-menu-item class="hidden-xs-only">
      <el-input :suffix-icon="Search" v-model="search" />
    </el-menu-item>

    <el-menu-item class="navitem-less-px ms-auto">

      <el-switch v-model="global.isDark" :active-icon="Moon" :inactive-icon="Sunny" inline-prompt />
    </el-menu-item>

    <el-sub-menu class="navlist-no-arrow nav-list" index="language">
      <template #title>
        <el-icon>
          <ax-lang-icon />
        </el-icon>
      </template>
      <el-menu-item v-for="language in languages" :key="language[0]" @click="toggleLanguage(language[0])">
        {{language[1]}}
      </el-menu-item>
    </el-sub-menu>

    <el-sub-menu class="navlist-no-arrow nav-list" index="avatar">
      <template #title>
        <el-avatar v-if="user.user" :src="`${addr.api}/file/images/${user.user.avatar}`" />
        <el-avatar v-else :icon="UserFilled" class="avatar-icon" />
      </template>

      <el-menu-item v-if="user.user">
        <el-icon>
          <Setting />
        </el-icon>
        个人信息
      </el-menu-item>

      <el-menu-item>
        <el-icon>
          <FullScreen />
        </el-icon>
        {{ $t('navbar.scan') }}
      </el-menu-item>

      <el-menu-item v-if="!user.user" index="/login">
        <el-icon>
          <User />
        </el-icon>
        {{ $t('navbar.login') }}
      </el-menu-item>

      <el-sub-menu index="theme">
        <template #title>
          <el-icon>
            <brush />
          </el-icon>
          {{ $t('navbar.theme') }}
        </template>
        <el-menu-item
          v-for="item in themes" :key="item"
          :style="{color:item}"
          @click="global.toggleTheme(item)"
        >
          <el-icon>
            <brush-filled />
          </el-icon>
        </el-menu-item>
        <el-menu-item @click="pickerDialog=true">
          {{ $t('navbar.custom') }}
        </el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="fonts">
        <template #title>
          <el-icon>
            <edit-pen />
          </el-icon>
          {{ $t('navbar.fonts') }}
        </template>
        <el-sub-menu v-for="group in fontGroups" :key="group.name" :index="group.name">
          <template #title>
            {{ $t(group.name) }}
          </template>
          <el-menu-item v-for="font in group.fonts" :key="font" @click="setFontFamily(`${font}, ${group.rollback}`)">
            {{ font }}
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item>
          {{ $t('navbar.moreFonts') }}
        </el-menu-item>
      </el-sub-menu>

      <el-menu-item @click="isSettingOpen = true">
        <el-icon>
          <Setting />
        </el-icon>
        {{ $t('navbar.setting.title') }}
      </el-menu-item>

      <el-menu-item v-if="user.user" @click="logout">
        <el-icon>
          <SwitchButton />
        </el-icon>
        {{ $t('navbar.logout') }}
      </el-menu-item>
    </el-sub-menu>

  </el-menu>

  <el-drawer
    v-model="drawer"
    direction="ltr"
    :title="$t('navbar.drawer')"
    body-class="p-0"
    size="50%"
  >
    <el-menu :default-active="route.path" mode="vertical" router :ellipsis="false">

      <el-menu-item v-for="item in allNavItems" :key="item.name" :index="item.path">
        {{ $t(item.meta.title as string) }}
      </el-menu-item>

      <nav-others index="drawer-nav-others" />

      <el-menu-item>
        <el-input :suffix-icon="Search" v-model="search" />
      </el-menu-item>

    </el-menu>
  </el-drawer>

  <ax-theme-picker v-model="pickerDialog" />

  <app-setting v-model="isSettingOpen" />
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
  padding: 0 1% !important;
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

.drawer-body {
	padding: 0 !important;
}
</style>
