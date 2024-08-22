
## Switch

type: 默认 'round'

```vue
<BISwitch></BISwitch>
```

## Popover  Charts

图表浮窗

#### Props

| 参数名       | 描述         | 类型                     | 默认值           |
| ------------ | ------------ | ------------------------ | ---------------- |
| title        | 标题         | string                   |                  |
| buttonText   | 底部按钮文字 | string                   | 查看详情         |
| borderRadius | 圆角         | number                   | 4                |
| showShadow   | 是否显示阴影 | boolean                  | true             |
| position     | 浮窗弹出位置 | { x: number, y: number } | 默认鼠标所在位置 |

#### events

| 事件名 | 描述             | 参数 |
| ------ | ---------------- | ---- |
| click  | 底部按钮点击事件 | -    |

#### slots

| 插槽名称 | 描述       | 参数 |
| -------- | ---------- | ---- |
| title    | 标题       | -    |
| footer   | 底部操作组 | -    |

```vue
<BIPopoverCharts @click=""></BIPopoverCharts>
```

## Popover Map

#### Props

| 参数名       | 描述         | 类型                                        | 默认值           |
| ------------ | ------------ | ------------------------------------------- | ---------------- |
| title        | 标题         | string                                      |                  |
| status       | 标题右侧状态 | 'success'\| 'primary'\| 'warning'\| 'error' | default          |
| statusText   | 状态文字     | string                                      | ''               |
| buttonText   | 底部按钮文字 | string                                      | 查看详情         |
| borderWidth  | 边框         | number                                      | 1                |
| borderColor  | 边框颜色     | string                                      | #BEDAFF          |
| borderRadius | 圆角         | number                                      | 8                |
| showShadow   | 是否显示阴影 | boolean                                     | true             |
| position     | 浮窗弹出位置 | { x: number, y: number }                    | 默认鼠标所在位置 |

#### events

| 事件名 | 描述             | 参数 |
| ------ | ---------------- | ---- |
| click  | 底部按钮点击事件 |      |

#### slots

| 插槽名称    | 描述       | 参数 |
| ----------- | ---------- | ---- |
| title       | 标题       | -    |
| title-extra | 标题右侧   | -    |
| footer      | 底部操作组 | -    |

## Image

新增

| 参数名     | 描述             | 类型   | 默认值 |
| ---------- | ---------------- | ------ | ------ |
| errorImage | 加载失败图片地址 | string |        |

```vue
<BIImage :errorImage="url"></BIImage>
```

## Icon

额外的图标

#### Props

| 参数名 | 描述     | 类型   | 默认值  |
| ------ | -------- | ------ | ------- |
| name   | 图标名   | string | ''      |
| size   | 图标大小 | number | 1em     |
| color  | 图标颜色 | string | #4E5969 |

```vue
<BIIcon name="angle-double-left"></BIIcon>
```

## Menu

#### Props

新增

| 参数名     | 描述                   | 类型       | 默认值                                                       |
| ---------- | ---------------------- | ---------- | ------------------------------------------------------------ |
| menus      | 菜单列表               | Array      | []                                                           |
| fieldNames | 指定节点数据中的字段名 | FieldNames | {key: 'value',title: 'name',children: 'children',icon: 'icon'} |

```typescript
interface FieldNames {
    key: 'value',
    title: 'label',
    children: 'children',
    icon: 'icon'
}
```

## Empty

修改默认图片

```vue
<BIEmpty></BIEmpty>
```


## Timeline

*其他组件使用arco.design，通过css覆盖默认arco样式，颜色通过改变颜色变量*
