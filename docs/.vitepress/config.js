import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
// @vitepress-demo-preview/plugin: 支持区块内的方式展示 demo 和示例代码
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "c-smart-pc-ui",
  description: "4.0大屏UI组件库",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/docs/public/c-smart.ico', // 表示docs/public/avartar.png
    nav: [
      { text: 'Home', link: '/' },
      { text: '组件示例', link: '/example/bi-card/index.md' }
    ],

    sidebar: [
      {
        text: '示例',
        items: [
          { text: 'bi-avatar 头像', link: '/example/bi-avatar/index.md' },
          { text: 'bi-card 卡片组件', link: '/example/bi-card/index.md' },
          { text: 'bi-sub-title 二级标题组件', link: '/example/bi-sub-title/index.md' },
          { text: 'bi-image 组件', link: '/example/bi-image/index.md' },
          { text: 'bi-loading 加载组件', link: '/example/bi-loading/index.md' },
          { text: 'bi-empty 空状态组件', link: '/example/bi-empty/index.md' },
          { text: 'bi-echarts 图表组件', link: '/example/bi-echarts/index.md' },
          { text: 'bi-ellipsis-tip 省略提示组件', link: '/example/bi-ellipsis-tip/index.md' },
          { text: 'bi-breadcrumb 面包屑', link: '/example/bi-breadcrumb/index.md' },
          { text: 'bi-tabs 标签页', link: '/example/bi-tabs/index.md' },
          { text: 'bi-icon 额外的图标', link: '/example/bi-icon/index.md' },
          { text: 'bi-tree 树', link: '/example/bi-tree/index.md' },
          { text: 'bi-switch 开关', link: '/example/bi-switch/index.md' },
          { text: 'bi-query-filter 筛选', link: '/example/bi-query-filter/index.md' },
          { text: 'bi-card-title 卡片标题', link: '/example/bi-card-title/index.md' },
          { text: 'bi-pagination 分页', link: '/example/bi-pagination/index.md' },
          { text: 'bi-menu 菜单', link: '/example/bi-menu/index.md' },
          { text: 'bi-grid 页面框架', link: '/example/bi-grid/index.md' },
          { text: 'bi-popover 浮窗', link: '/example/bi-popover/index.md' },
          { text: 'bi-button 按钮', link: '/example/bi-button/index.md' },
          { text: 'bi-auto-scroll 轮播滚动组件', link: '/example/bi-auto-scroll/index.md' },
        ]
      },
      {
        text: '公共方法',
        items: [
          { text: '基本方法', link: '/api/store.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../packages', import.meta.url))
      }
    },
    ssr: { noExternal: ['@arco-design/web-vue', 'vue3-seamless-scroll'] }
  },
  markdown: {
    // @vitepress-demo-preview的配置
    config(md) {
      // 支持区块内的方式展示 demo 和示例代码
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  base: '/bi/c-smart-pc-ui/'
})
