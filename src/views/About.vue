<script setup lang="ts">

const portraits: [
  filename: string,
  title: string,
][] = [

]

interface Group {
  title: string,
  links: Link[],
}

type Link = [
  title: string,
  url: string,
  tooltip: string,
]

const groups: Group[] = [
  {
    title: 'about.server',
    links: [
      ['Paper', 'https://papermc.io', '互通服务器软件'],
      ['BDS', 'https://www.minecraft.net/en-us/download/server/bedrock', '基岩服务器软件'],
      ['Fabric', 'https://fabricmc.net', 'Java生电及模组服务器软件'],
      ['Levilamina', 'https://lamina.levimc.org', '为基岩版提供插件支持'],
    ],
  },
  {
    title: 'about.operate',
    links: [
      ['Ubuntu', 'https://ubuntu.com', 'Axolotland服务器的操作系统'],
      ['Docker', 'https://www.docker.com', '用于托管服务器进程'],
      ['1Panel', 'https://1panel.cn', '用于为服务器后台提供可视化页面'],
      ['Nginx', 'https://nginx.org', '用于对网页和游戏服务器进行反向代理或静态服务'],
    ],
  },
  {
    title: 'about.frontend',
    links: [
      ['Vue.js', 'https://vuejs.org', '用于构建www.mcax.cn'],
      ['Element+', 'https://element-plus.org', '用于提供www.mcax.cn的组件'],
      ['Echarts', 'https://echarts.apache.org', '用于对玩家数据进行可视化展示'],
    ],
  },
  {
    title: 'about.backend',
    links: [
      ['Golang', 'https://go.dev', '用于构建后端'],
      ['Python', 'https://www.python.org', '用于编写论坛自动顶帖等爬虫'],
      ['Java', 'https://www.java.com', '用于编写MCJE插件'],
      ['JavaScript', '#', '用于编写基岩版插件'],
    ],
  },
  {
    title: 'about.database',
    links: [
      ['MySQL', 'https://www.mysql.com', '用于存储用户信息、玩家日志、网站数据等'],
      ['Redis', 'https://redis.io', '用于缓存玩家的排行榜数据'],
    ],
  },
]
</script>

<template>
  <div class="reactive-margin">
    <h2>关于我</h2>
    <div class="portrait">

    </div>
    <h2>{{ $t('about.technologies') }}</h2>
    <div class="quote-block">
      <p>{{ $t('about.newtonword') }}</p>
      <span>{{ $t('about.newton') }}</span>
    </div>
    <div class="group-container">
      <div class="group" v-for="group in groups" :key="group.title">
        <div class="group-title">
          {{ $t(group.title) }}
        </div>
        <el-tooltip v-for="(link, index) in group.links" :key="index" :content="link[2]" placement="top-start">
          <el-link :href="link[1]" style="font-size: 16px;">
            {{ link[0] }}
          </el-link>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<style scoped>
.portrait {
  display: flex;
}
.quote-block {
  border-left: 4px solid var(--primary);
  padding: 10px 20px;
  margin: 20px 0;
  background-color: var(--nav-bg-color);
  font-style: italic;
}

.quote-block p {
  margin: 0;
  font-size: 1.0rem;
  line-height: 1.6;
}

.quote-block span {
  display: block;
  text-align: right;
  margin-top: 10px;
  font-size: 0.8rem;
}
</style>
