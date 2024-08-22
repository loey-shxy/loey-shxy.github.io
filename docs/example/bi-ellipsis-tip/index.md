# bi-ellipsis-tip 组件

### 1、基础使用

默认单行省略
<preview path="./index.vue" title="基础用法" description="bi-ellipsis-tip 组件的基础用法"></preview>

### 2、多行省略

可配置多行
<preview path="./index1.vue" title="基础用法" description="bi-ellipsis-tip 组件的多行用法"></preview>

### 3、配置参数（Attributes）

| 参数         | 说明         | 类型    | 默认值 |
| :----------- | :----------- | :------ | :----- |
| ellipsisLine | 多少行省略   | number  | 1      |
| tooltip      | 是否需要气泡 | boolean | true   |
| position     | 气泡位置     | string  | 'br'   |

### 4、插槽（Slots）

| 插槽名         | 描述     | 参数 |
| :------------- | :------- | :--- |
| tooltipContent | 气泡内容 |      |
