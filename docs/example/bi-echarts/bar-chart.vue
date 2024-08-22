<template>
  <div class="chart-container">
    <div class="chart-item">
      <div class="chart-content">
        <BIBarChart
          :data="barData"
          title="基础柱状图"
          :barWidth="25"
        />  
      </div>
    </div>
    <div class="chart-item">
      <div class="chart-content">
        <BIBarChart
          :data="stackData"
          :category="category"
          :barBorderRadius="0"
          :barWidth="25"
          :showLegend="false"
          title="堆叠柱状图"
        />  
      </div>
    </div>
  </div>
</template>
  
<script setup lang='ts'>
import { ref } from 'vue'

const barData = [
  {
    name: '2024-08-16',
    value: 50
  },
  {
    name: '2024-08-15',
    value: 100
  },
  {
    name: '2024-08-16',
    value: 90
  },
  {
    name: '2024-08-17',
    value: 150
  },
  {
    name: '2024-08-18',
    value: 200
  },
  {
    name: '2024-08-19',
    value: 146
  },
  {
    name: '2024-08-20',
    value: 222
  },
]

const category = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const stackData = {
  'Direct': [100, 302, 301, 334, 390, 330, 320],
  'Mail Ad': [320, 132, 101, 134, 90, 230, 210],
  'Affiliate Ad': [220, 182, 191, 234, 290, 330, 310],
  'Video Ad': [150, 212, 201, 154, 190, 330, 410],
  'Search Engine': [820, 832, 901, 934, 1290, 1330, 1320]
}

</script>
  
<style lang="scss" scoped>
.chart-container {
  display: flex;
  flex-wrap: wrap;
}
p {
  margin: 20px 0;
  font-size: 18px;
}
.chart-item {
  width: 50%;
}
.chart-content {
  height: 400px;
  width: 100%;
}
</style>