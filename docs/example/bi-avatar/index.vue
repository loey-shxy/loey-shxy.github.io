<template>
  <h1>头像尺寸</h1>
  <div class="flex">
    <div class="item">
      <p>xs</p>  
      <BIAvatar
        size="xs"
        :image-url="avatarImg"
      />
    </div>
    <div class="item">
      <p>small</p>  
      <BIAvatar
        size="small"
        :image-url="avatarImg"
      />
    </div>
    <div class="item">
      <p>Medium</p>  
      <BIAvatar
        :image-url="avatarImg"
      />
    </div>
    <div class="item">
      <p>Large</p>  
      <BIAvatar
        size="large"
        :image-url="avatarImg"
      />
    </div>
  </div>
  <h1>头像类型</h1>
  <div class="flex">
    <div class="item">
      <p>默认</p>
      <BIAvatar
        :image-url="avatarImg"
      />
    </div>
    <div class="item">
      <p>带框</p>
      <BIAvatar
        type="border"
        :image-url="avatarImg"
      />
    </div>
    <div class="item">
      <p>图标</p>
      <BIAvatar
        type="icon"
      />
    </div>
  </div>
</template>
  
<script setup lang='ts'>
import avatarImg from '../images/avatar.jpg'
</script>
  
<style lang="scss" scoped>
.item {
  margin-right: 20px;
  text-align: center;
  p {
    padding: 10px 0;
  }
}
</style>