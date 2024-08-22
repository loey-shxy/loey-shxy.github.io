# bi-menu 菜单

### 基础用法

<preview path="./index.vue" title="基础用法" description="bi-menu 组件的基础用法"></preview>

#### 配置参数
同acro.design  
新增

| 参数名     | 描述                   | 类型       | 默认值                                                       |
| ---------- | ---------------------- | ---------- | ------------------------------------------------------------ |
| menus      | 菜单列表               | Array      | []                                                           |
| fieldNames | 指定节点数据中的字段名 | FieldNames | \{key: 'value',title: 'name',children: 'children',icon: 'icon'\} |

```
interface FieldNames {
    key: 'value',
    title: 'label',
    children: 'children',
    icon: 'icon'
}
```


#### events

| 事件名     | 描述                   | 参数       |
| ---------- | ---------------------- | ---------- |
| collapse      | 折叠状态改变时触发     | collapsed: boolean; type: 'clickTrigger'\|'responsive'      |
| menu-item-click      | 点击菜单项时触发     | 菜单项对象      |
| sub-menu-click | 点击子菜单时触发 | key: string; openKeys: string[] |