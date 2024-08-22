<template>
  <div>
    <BISubTitle
      v-model:selected="selected"
      title="我是二级标题"
      has-select
      border
      :select-options="{
        onChange: change
      }"
    >
      <template #extra> 我是extra插槽 </template>

      <template #options>
        <a-option :value="-6">近7天</a-option>
        <a-option :value="-14">近15天</a-option>
        <a-option :value="-29">近30天</a-option>
      </template>
    </BISubTitle>

    <div>当前选中：{{ selected }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selected = ref(-6)

const change = (e) => {
  console.log('e', e)
}
</script>

<style></style>
