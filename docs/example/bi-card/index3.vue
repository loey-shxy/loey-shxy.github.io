<template>
  <div class="demo-container">
    <BICard
      v-model:selected="selected"
      title="更多使用"
      has-select
      :select-options="{
        onChange: change
      }"
    >
      <template #options>
        <a-option :value="-6">近7天</a-option>
        <a-option :value="-14">近15天</a-option>
        <a-option :value="-29">近30天</a-option>
      </template>

      <div>当前选中：{{ selected }}</div>
    </BICard>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selected = ref(-6)

const change = (e) => {
  console.log('e', e)
}
</script>

<style lang="scss" scoped>
.demo-container {
  padding: 20px;
  height: 300px;
  // background-color: #ccc;
}
</style>
