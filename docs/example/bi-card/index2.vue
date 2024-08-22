<template>
  <div class="demo-container">
    <BICard title="更多使用" has-more popup-visble>
      <template #popupContent> 我是弹框内容 </template>
      <template #operation> 操作区域不受loading/empty影响 </template>
    </BICard>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.demo-container {
  padding: 20px;
  height: 300px;
  // background-color: #ccc;
}
</style>
