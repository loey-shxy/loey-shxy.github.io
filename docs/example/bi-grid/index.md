# bi-grid 页面框架

### 基础用法

<preview path="./index.vue" title="基础用法" description="bi-grid 组件的基础用法"></preview>

### 配置参数 (Attributes)

| 参数名   | 描述   | 类型   | 默认值 |
| -------- | ------ | ------ | ------ |
| data    | 当前菜单   | MenuOption | ''     |
| showMenu | 是否显示菜单 | boolean | true     |
| showLogo | 是否显示logo | boolean | true     |
| getComponent | 获取组件 | Function | () => {}   |
| menuExpansion | 是否默认展开菜单 | boolean | false   |
| autoToggleOrg | 是否自动切换组织 | boolean | true   |
| logoutFn | 退出方法 | Function | true   |  -   |

```
MenuOption {
  name: string // 名称
  icon: string // icon地址
  path: string // 路由
  itemList: any // 后台组件配置列表
  // ... 其他字段
}
```
