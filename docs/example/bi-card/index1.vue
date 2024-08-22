<template>
  <div class="demo-container">
    <a-space>
      <div>
        <a-button type="primary" @click="loading = !loading">
          {{ loading ? '取消加载' : '加载中' }}
        </a-button>
      </div>
      <div>
        <a-button @click="isEmpty = !isEmpty">空状态</a-button>
      </div>
    </a-space>
    <BICard
      title="卡片基础使用"
      :loading="loading"
      :is-empty="isEmpty"
      empty-text="空状态的描述"
      style="margin-top: 10px"
    ></BICard>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(false)

const isEmpty = ref(false)
</script>

<style lang="scss" scoped>
.demo-container {
  padding: 20px;
  height: 300px;
}
</style>
