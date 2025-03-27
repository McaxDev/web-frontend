<!-- RoundedContainer.vue -->
<template>
  {{ $route.params }}
  <div class="h-32 bg-red-100 flex flex-col">
    <div class="h-8">

    </div>
    <div class="grow bg-blue-100">
      <div class="h-full bg-green-100">

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const cards = ref([
  '卡片内容 1',
  '卡片内容 2'
])
</script>

<style scoped>
.outer-container {
  width: 300px;
  height: 400px;
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.inner-content {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

  /* 关键代码：使用 margin 和 padding 创建圆角效果 */
  padding-top: 20px;
  margin-top: -20px;
}

.card {
  width: 250px;
  height: 150px;
  background-color: white;
  margin: 20px auto;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
