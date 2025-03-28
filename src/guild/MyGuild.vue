<script setup lang="ts">
import useUserStore from '@/stores/user';


const user = useUserStore()

</script>

<template>
  <el-descriptions v-if="user.user?.guild">

  </el-descriptions>

  <el-empty v-else-if="user.user" :description="$t('guild.myGuild.noGuild')" />
  <el-empty v-else :description="$t('guild.myGuild.logout')" />
</template>
