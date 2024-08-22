<template>
    <BIMenu
      :menus="menus"
      @menu-item-click="menuItemClick"
      @sub-menu-click="subMenuClick"
    />
</template>
  
<script setup lang='ts'>
import { ref } from 'vue'

const menus = ref([
  {
    value: 1,
    name: 'Menu-1',
    children: [
      {
        value: 11,
        name: 'Menu-1-1'
      }
    ]
  },
  {
    value: 2,
    name: 'Menu-2',
    children: [
      {
        value: 21,
        name: 'Menu-2-1'
      }
    ]
  },
  {
    value: 3,
    name: 'Menu-3'
  }
])


const menuItemClick = (key: string) => {
  console.log(`output->key`,key)
}

const subMenuClick = (key: string, openKeys) => {
  console.log(`output->key`,key)
  console.log(`output->openKeys`,openKeys)
}
</script>
  
<style>
  
</style>