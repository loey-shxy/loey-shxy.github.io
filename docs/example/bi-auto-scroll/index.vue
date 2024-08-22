<template>
  <div class="demo-container list-scroll">
    <a-button type="primary" style="margin-bottom: 10px" @click="autoPlay = !autoPlay"
      >{{ autoPlay ? '关闭' : '开启' }}自动滚动</a-button
    >
    <BIAutoScroll
      :list="list"
      :auto-play="autoPlay"
      :is-rem="true"
      min-item-size="0.6122"
      :single-height="0.6122 * 2"
      :single-wait-time="1000"
      :step="1000"
    >
      <template #default="{ data: item, index }">
        <div class="list-item">item:{{ item }},index: {{ index }}</div>
      </template>
    </BIAutoScroll>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const list = ref(Array.from({ length: 1000 }, (item, index) => index + 1))
const autoPlay = ref(false)
</script>

<style lang="scss" scoped>
.demo-container {
  height: 300px;
  .list-item {
    height: 0.6122rem;
  }
}

// 无关样式
:deep(.vp-doc ul),
:deep(.vp-doc ol) {
  padding-left: 0;
}
</style>
