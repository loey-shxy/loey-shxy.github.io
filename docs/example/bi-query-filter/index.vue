<template>
    <BIQueryFilter
      @search="search"
      @reset="reset"
    >
      <a-form :model="query" layout="inline" auto-label>
        <a-form-item label="关键字">
          <a-input v-model="query.keyword"></a-input>
        </a-form-item>
        <a-form-item label="下拉选择">
          <a-select v-model="query.select">
            <a-option value="1">1</a-option>
          </a-select>
        </a-form-item>
        <a-form-item label="日期">
          <a-date-picker v-model="query.date"></a-date-picker>
        </a-form-item>
      </a-form>
      <template #extra>
        <a-button type="primary">新增</a-button>
      </template>
    </BIQueryFilter>
</template>
  
<script setup lang='ts'>
import { reactive } from 'vue'

const query = reactive({
  keyword: '',
  select: '',
  date: ''
})

const search = () => {
  console.log(`output->query`,query)
}

const reset = () => {
  query.keyword = ''
  query.select = ''
}
</script>
  
<style>
  
</style>