<template>
  <div class="demo-container">
    <a-space>
      <BIImage
        :preview="false"
        src="https://tushen.oss-cn-hangzhou.aliyuncs.com/service/2024-07-02/17199021776060.png"
      >
      </BIImage>
      <BIImage
        width="3rem"
        height="3rem"
        lazy-load
        src="https://img0.baidu.com/it/u=1940647675,1633257489&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1720198800&t=9854af61f6332b5169067c3a8a56f1ad"
      >
      </BIImage>
    </a-space>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.demo-container {
  height: 300px;
  overflow: auto;
}
</style>
