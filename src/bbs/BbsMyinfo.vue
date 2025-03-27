<script setup lang="ts">
import useUserStore from '@/stores/user';


const user = useUserStore()

</script>

<template>
  <el-desctiptions v-if="user.user">

  </el-desctiptions>

  <el-empty :description="$t('bbs.myinfo.empty')" v-else />
</template>
