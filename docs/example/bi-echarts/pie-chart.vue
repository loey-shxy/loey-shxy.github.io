<template>
  <div class="chart-container">
    <div class="chart-item">
      <div class="chart-content">
        <BIPieChart
          :data="pieData"
          title="饼图"
        />  
      </div>
    </div>
  </div>
</template>
  
<script setup lang='ts'>
import { ref } from 'vue'

const pieData = [
  { name: '批核中', value: 10 },
  { name: '有效期', value: 30 },
  { name: '過期未註銷', value: 50 },
]
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