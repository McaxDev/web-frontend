<script setup lang="ts">

</script>

<template>
  <el-sub-menu index="toolbox">
    <template #title>
      {{ $t('navbar.toolbox') }}
    </template>
    <el-menu-item index="/about">
      {{ $t('navbar.about') }}
    </el-menu-item>
  </el-sub-menu>
</template>
