<script setup lang="ts">
import { ref } from 'vue'
import { apiAxios } from '@/utils/axios'

const location = ref('')
const clientIp = ref('')

interface Group {
  title: string
  links: Link[]
}

type Link = [title: string, url: string]

const groups: Group[] = [
  {
    title: 'footer.friendLinks',
    links: [
      ['苦力怕论坛', 'https://klpbbs.com'],
      ['MineBBS', 'https://www.minebbs.com'],
      ['TATyRealms', 'https://www.tatysmp.love'],
    ],
  },
  {
    title: 'footer.wikis',
    links: [
      ['我的世界Wiki', 'https://zh.minecraft.wiki'],
      ['饥荒Wiki', 'https://dontstarve.huijiwiki.com'],
      ['泰拉瑞亚Wiki', 'https://terraria.wiki.gg/zh'],
      ['星露谷物语Wiki', 'https://zh.stardewvalleywiki.com'],
    ],
  },
  {
    title: 'footer.resources',
    links: [
      ['CurseForge', 'https://www.curseforge.com/minecraft'],
      ['Modrinth', 'https://modrinth.com'],
      ['MCPEDL', 'https://mcpedl.com'],
      ['MCMOD', 'https://www.mcmod.cn'],
    ],
  },
  {
    title: 'footer.contacts',
    links: [
      [
        'QQ群: 514928673',
        'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=U6L_LJSXXAA4GKbdA3C4dsWYi3L0iAPE&authKey=yWN2Vp2lymU9xrjU%2B4ajk78JZsW2Zh4nwiTga0DvXf7B4ISNhn5isSmd0Qajj%2B1E&noverify=0&group_code=514928673',
      ],
      ['哔哩哔哩', 'https://b23.tv/yMqpypq'],
      ['GitHub', 'https://github.com/McaxDev'],
    ],
  },
]

apiAxios.get('/geo/get').then((res) => {
  clientIp.value = res.data.ip
  location.value = `${res.data.country} ${res.data.province} ${res.data.city}`
})
</script>

<template>
  <el-card class="bg-subtle" body-class="footer" shadow="hover">
    <div class="flex justify-between flex-wrap gap-5">
      <div
        class="flex flex-col items-start gap-1 p-2"
        v-for="(group, index) in groups"
        :key="index"
      >
        <div class="text-primary font-bold text-lg">{{ $t(group.title) }}</div>
        <el-link v-for="link in group.links" :key="link[0]" :href="link[1]">
          {{ link[0] }}
        </el-link>
      </div>
    </div>

    <div class="text-center">
      <el-link class="beian" href="https://beian.miit.gov.cn/" target="_blank">
        备案号: 豫ICP备2023025148号
      </el-link>
    </div>
  </el-card>
</template>

<style>
.footer {
  background-color: var(--nav-bg-color);
}
</style>
