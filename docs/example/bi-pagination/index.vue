<template>
  <div class="demo-container">
    <BIPagination
      v-model:current="pageState.current"
      :page-size="pageState.pageSize"
      :total="pageState.total"
      @change="pageChange"
    ></BIPagination>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const pageState = ref({
  current: 1,
  pageSize: 10,
  total: 20
})

const pageChange = () => {
  console.log('改变了')
  // 重新拉取数据
  // getData();
}
</script>

<style lang="scss" scoped>
:deep(.vp-doc ul),
:deep(.vp-doc ol) {
  margin: 0;
  padding: 0;
}
.demo-container {
  :deep(ul),
  :deep(ol) {
    margin: 0;
    padding: 0;
  }
  :deep(li + li) {
    margin: 0;
    padding: 0;
  }
}
</style>
