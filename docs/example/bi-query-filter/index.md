# bi-query-filter 筛选

### 基础使用

<preview path="./index.vue" title="基础用法" description="bi-query-filter 组件的基础用法"></preview>

### 配置参数 (Attributes)

| 参数名       | 描述                           | 类型                       | 默认值     |
| ------------ | ------------------------------ | -------------------------- | ---------- |
| okText       | 查询按钮文字                   | string                     | 查询       |
| resetText    | 重置按钮文字                   | string                     | 重置       |
| showShadow   | 是否显示阴影                   | boolean                    | true       |
| borderRadius | 圆角                           | number                     | 4          |
| border       | 是否显示边框                   | boolean                    | false      |
| borderWidth  | 边框大小(border 为true时有效)  | number                     | 1          |
| borderColor  | 边框颜色(border 为true时有效)  | string                     | #E5E6EB    |
| direction    | 查询项排列方式                 | 'horizontal' \| 'vertical' | horizontal |
| buttonSize   | 查询/重置按钮尺寸 (值同Button) | string                     | medium     |

### 插槽

| 插槽名称 | 描述             | 参数 |
| -------- | ---------------- | ---- |
| extra    | 额外的操作按钮组 | -    |

### 事件 events

| 插槽名称 | 描述     | 参数 |
| -------- | -------- | ---- |
| search   | 查询事件 | -    |
| reset    | 重置事件 | -    |