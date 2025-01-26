<script setup lang="ts">
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import VChart from "vue-echarts";
import { ref } from "vue";
import type { EChartsOption } from "echarts";
import {useI18n} from "vue-i18n";
import {useGlobalStore} from "@/stores/global";

const global = useGlobalStore()

const { t } = useI18n()

use([
  CanvasRenderer,
  LineChart,
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

const option = ref<EChartsOption>({
  darkMode: "auto",
  title: {
    text: t('components.historyOnline'),
    left: "center",
    top: 'top',
    textStyle: {
      color: '#28abce',
    },
  },
  tooltip: {
    trigger: "axis",
  },
  legend: {
    top: "bottom",
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
      13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
    ],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "互通服务器",
      type: "line",
      stack: "总量",
      data: [
      1, 3, 2, 4, 1, 3, 2, 4, 1, 3, 2, 4,
      1, 3, 2, 4, 1, 3, 2, 4, 1, 3, 2, 4,
      ],
    },
  ],
});
</script>

<template>
  <v-chart class="chart" :option="option" />
</template>

<style scoped>
.chart {
  height: 400px;
}
</style>
