<script lang="ts" setup>
import {useRoute, useRouter} from 'vue-router';
import {
  Setting, Menu, UserFilled, Sunny, Moon, Location, EditPen,
} from '@element-plus/icons-vue';
import {ref} from 'vue';
import {languages} from '@/locale';
import {useI18n} from 'vue-i18n';
import {useUserStore} from '@/stores/user';
import {useGlobalStore} from '@/stores/global';

const router = useRouter()
const route = useRoute()
const i18n = useI18n()
const user = useUserStore()
const global = useGlobalStore()

const allNavItems = router.getRoutes().filter(item => item.meta.navbar)
const navbarItems = allNavItems.filter(item => !item.meta.others)
const navOthers = allNavItems.filter(item => item.meta.others)

const drawer = ref(false)

const themes = [
  ['axolotl', '#28ABCE'],
  ['primary', '#409EFF'],
  ['success', '#67C23A'],
  ['warning', '#E6A23C'],
  ['danger', '#F56C6C'],
  ['info', '#909399'],
]

function toggleLanguage(language: string) {
  i18n.locale.value = language
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

    <el-sub-menu class="hidden-xs-only hidden-md-and-up" index="others">
      <template #title>{{ $t('navbar.others') }}</template>
      <el-menu-item
        v-for="item in navOthers" :key="item.name" :index="item.path"
      >
      {{ $t(item.meta.title as string) }}
      </el-menu-item>
    </el-sub-menu>

    <el-menu-item class="hidden-sm-and-down" v-for="item in navOthers" :key="item.name" :index="item.path">
      {{ $t(item.meta.title as string) }}
    </el-menu-item>

    <el-menu-item @click="global.toggleDark" class="navitem-less-px ms-auto">
      <el-icon>
        <Moon v-if="global.isDark" />
        <Sunny v-else />
      </el-icon>
    </el-menu-item>

    <el-sub-menu class="navlist-no-arrow nav-list" index="language">
      <template #title>
        <el-icon>
          <Location />
        </el-icon>
      </template>
      <el-menu-item
        v-for="language in languages" :key="language[0]"
        @click="toggleLanguage(language[0])"
      >
        {{language[1]}}
      </el-menu-item>
    </el-sub-menu>

    <el-sub-menu class="navlist-no-arrow nav-list" index="avatar">
      <template #title>
        <el-avatar :icon="UserFilled" id="avatar-icon" />
      </template>

      <el-menu-item v-if="user.user">
        <el-icon>
          <Setting />
        </el-icon>
        个人信息
      </el-menu-item>

      <el-menu-item v-if="!user.user" index="/login">
        <el-icon>
          <Setting />
        </el-icon>
        {{ $t('navbar.login') }}
      </el-menu-item>

      <el-sub-menu v-if="!user.user" index="theme">
        <template #title>
          {{ $t('navbar.theme') }}
        </template>
        <el-menu-item
          v-for="item in themes" :key="item[0]"
          :style="{color:item[1]}"
          @click="global.toggleTheme(item[0], item[1])"
        >
          <el-icon>
            <EditPen />
          </el-icon>
        </el-menu-item>
      </el-sub-menu>

      <el-menu-item>
        <el-icon>
          <Setting />
        </el-icon>
        {{ $t('navbar.setting') }}
      </el-menu-item>
    </el-sub-menu>

  </el-menu>

  <el-drawer
    v-model="drawer"
    direction="ltr"
    :title="$t('navbar.drawer')"
    body-class="p-0"
  >
    <el-menu
      :default-active="route.path"
      mode="vertical"
      router
      :ellipsis="false"
    >

      <el-menu-item
        v-for="item in allNavItems" :key="item.name" :index="item.path"
      >
        {{ $t(item.meta.title as string) }}
      </el-menu-item>

    </el-menu>
  </el-drawer>
</template>

<style>

.nav-brand {
  width: 125px;
  display: flex !important;
  align-items: center;
}

#el-menu {
  --el-menu-bg-color: var(--nav-bg-color);
  padding: 0 10px !important;
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

#avatar-icon .el-icon {
  margin-right: 0;
}

.drawer-body {
	padding: 0 !important;
}
</style>
