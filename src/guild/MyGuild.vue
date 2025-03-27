<script setup lang="ts">
import useUserStore from '@/stores/user';


const user = useUserStore()

</script>

<template>
  <el-desctiptions v-if="user.user?.guild">

  </el-desctiptions>

  <el-empty v-else-if="user.user" :description="$t('guild.myGuild.noGuild')" />
  <el-empty v-else :description="$t('guild.myGuild.logout')" />
</template>
