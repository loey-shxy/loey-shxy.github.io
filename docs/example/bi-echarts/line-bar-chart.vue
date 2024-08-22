<template>
  <div class="chart-container">
    <div class="chart-item">
      <div class="chart-content">
        <BILineBarChart
          :line-data="lineData"
          :bar-data="barData"
          :category="category"
          :borderRadius="0"
          :barWidth="25"
          :showLegend="false"
          title="堆叠柱状图 + 折线图"
        />  
      </div>
    </div>
  </div>
</template>
  
<script setup lang='ts'>
import { ref } from 'vue'

const category = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const lineData = [
  { name: 'Mon', value: 200, },
  { name: 'Tue', value: 800, },
  { name: 'Wed', value: 2501, },
  { name: 'Thu', value: 120, },
  { name: 'Fri', value: 652, },
  { name: 'Sat', value: 415, },
  { name: 'Sun', value: 1520, },
]
const barData = {
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