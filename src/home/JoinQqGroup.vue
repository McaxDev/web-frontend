<script setup lang="ts">
type QqGroup = [iconPath: string, qqNumber: string, comment: string]

const qqGroups: QqGroup[] = [
  ['qq-main-icon.png', '514928673', '主QQ群'],
  ['qq-bedrock-icon.png', '825805175', '我的世界基岩版QQ群'],
  ['qq-java-icon.png', '433267459', '我的世界Java版QQ群'],
  ['qq-dst-icon.png', 'placeholder', '饥荒联机版QQ群'],
]
</script>

<template>
  <el-card>
    <el-row>
      <el-col class="text-title qq-brand" :span="24" :sm="12">
        {{ $t('home.joinQq.text') }}
      </el-col>
      <el-col :span="24" :sm="12">
        <div v-for="item in qqGroups" :key="item[0]">
          <div class="qq-item">
            <el-avatar />
            <div>
              <div>{{ item[1] }}</div>
              <div>{{ item[2] }}</div>
            </div>
            <el-button>{{ $t('home.joinQq.join') }}</el-button>
          </div>
          <hr />
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<style scoped>
.qq-brand {
  display: flex;
  justify-content: center;
  align-items: center;
}
.qq-item {
  display: flex;
  justify-content: space-between;
}
</style>
