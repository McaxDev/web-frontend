<script setup lang="ts">
import { useRoute } from 'vue-router'
import { forums } from './BBSForumList'

const route = useRoute()
const forum = forums[route.params.forum as string]
</script>

<template>
  <el-page-header @back="$router.push('/bbs/home')">
    <template #content>
      {{ $t(forum.name) }}
    </template>
  </el-page-header>
</template>
