<template>
  <div class="chart-container">
    <div class="chart-item">
      <div class="chart-content">
        <BILineChart
          :data="lineData"
          title="折线图"
        />  
      </div>
    </div>
    <div class="chart-item">
      <div class="chart-content">
        <BILineChart
          :data="stackData"
          :category="category"
          :showLegend="false"
          title="堆叠折线图"
        />  
      </div>
    </div>
  </div>
</template>
  
<script setup lang='ts'>
import { ref } from 'vue'


const lineData = [
  { name: 'Mon', value: 820 },
  { name: 'Tue', value: 932 },
  { name: 'Wed', value: 901 },
  { name: 'Thu', value: 934 },
  { name: 'Fri', value: 1290 },
  { name: 'Sat', value: 1330 },
  { name: 'Sun', value: 1320 },
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