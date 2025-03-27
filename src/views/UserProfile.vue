<script setup lang="ts"></script>

<template>
  <div class="profile-layout reactive-margin pt-4">
    <el-card class="user-info" body-class="p-0">
      <el-image src="/login-bg.jpg" />
    </el-card>
    <div class="profile-sidebar">
      <el-card class="title-text fs-3">
        {{ $t('user.guild') }}
      </el-card>
      <el-card>
        <div class="title-text fs-3">
          {{ $t('user.userData') }}
        </div>
      </el-card>
    </div>
  </div>
</template>

<style scoped>
.profile-layout {
  display: flex;
  gap: 1rem;
}
.user-info {
  flex-basis: 60%;
}
.profile-sidebar {
  flex-grow: 1;
}
</style>
