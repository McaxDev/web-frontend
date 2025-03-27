<script setup lang="ts">
import { ref } from 'vue'
import { apiAxios, fileAxios } from '@/utils/axios'

interface SettingItem {
  id: string
  title: string
  type: string
  default: any
}

interface SettingGroup {
  name: string
  items: SettingItem[]
}

const settingGroups = ref<SettingGroup[]>([])
const settingValue = ref<Record<string, any>>({})
const currentGroup = ref<SettingGroup | null>(null)

fileAxios
  .get<SettingGroup[]>('/setting.json')
  .then((res) => {
    settingGroups.value = res.data
  })
  .catch((err) => console.log(err))

apiAxios
  .get<Record<string, any>>('/get/settings')
  .then((res) => {
    settingValue.value = res.data
  })
  .catch((err) => console.log(err))
</script>

<template>
  <!-- 桌面端视图 -->
  <section class="hide-xs-only">
    <el-card>
      <el-tabs tab-position="left">
        <el-tab-pane v-for="group in settingGroups" :key="group.name" :label="group.name">
          <div class="setting-item" v-for="item in group.items" :key="item.id">
            <div>
              {{ item.title }}
            </div>
            <setting-item :type="item.type" :value="settingValue[item.id] || item.default" />
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </section>

  <!-- 移动端视图 -->
  <section class="hide-sm-and-up">
    <!-- 分组内的设置项 -->
    <el-card v-if="currentGroup">
      <div v-for="item in currentGroup.items" :key="item.id">
        <div>
          {{ item.title }}
        </div>
        <div
          class="flex justify-between items-center"
          :type="item.type"
          :value="settingValue[item.id] || item.default"
        />
      </div>
    </el-card>

    <!-- 分组列表 -->
    <el-card v-else>
      <div v-for="group in settingGroups" :key="group.name" @click="currentGroup = group">
        {{ group.name }}
      </div>
    </el-card>
  </section>
</template>
