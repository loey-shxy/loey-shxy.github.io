# bi-popover-map 地图浮窗

### 基础用法

<preview path="./popover-map.vue" title="bi-popover-map 组件的基础用法"></preview>

#### 配置参数(Attributes)

| 参数名       | 描述         | 类型                                        | 默认值           |
| ------------ | ------------ | ------------------------------------------- | ---------------- |
| title        | 标题         | string                                      |                  |
| buttonText   | 底部按钮文字 | string                                      | 查看详情         |
| borderWidth  | 边框         | number                                      | 1                |
| borderColor  | 边框颜色     | string                                      | #BEDAFF          |
| borderRadius | 圆角         | number                                      | 8                |
| showShadow   | 是否显示阴影 | boolean                                     | true             |
| footer   | 是否显示底部操作按钮 | boolean                  | true             |
| position     | 浮窗弹出位置 | \{ x: number, y: number }                    | 默认鼠标所在位置 |

#### events

| 事件名 | 描述             | 参数 |
| ------ | ---------------- | ---- |
| click  | 底部按钮点击事件 |      |

#### slots

| 插槽名称    | 描述       | 参数 |
| ----------- | ---------- | ---- |
| title       | 标题       | -    |
| extra | 标题右侧   | -    |
| footer      | 底部操作组 | -    |

# bi-popover-charts 图表浮窗

### 基础用法

<preview path="./popover-charts.vue" title="bi-popover-charts 组件的基础用法"></preview>

#### 配置参数(Attributes)

| 参数名       | 描述         | 类型                     | 默认值           |
| ------------ | ------------ | ------------------------ | ---------------- |
| title        | 标题         | string                   |                  |
| buttonText   | 底部按钮文字 | string                   | 查看详情         |
| borderRadius | 圆角         | number                   | 4                |
| showShadow   | 是否显示阴影 | boolean                  | true             |
| footer   | 是否显示底部操作按钮 | boolean                  | true             |
| position     | 浮窗弹出位置 | \{ x: number, y: number } | 默认鼠标所在位置 |

#### events

| 事件名 | 描述             | 参数 |
| ------ | ---------------- | ---- |
| click  | 底部按钮点击事件 | -    |

#### slots

| 插槽名称 | 描述       | 参数 |
| -------- | ---------- | ---- |
| title    | 标题       | -    |
| extra | 标题右侧   | -    |
| footer   | 底部操作组 | -    |