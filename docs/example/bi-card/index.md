# bi-card组件

### 1、基础使用

通用卡片容器
<preview path="./index.vue" title="基础用法" description="bi-card组件的基础用法"></preview>

### 2、使用状态

<preview path="./index1.vue" title="loading、empty用法" description="bi-card组件的基础用法,loading优先级高"></preview>

### 3、更多拓展

<preview path="./index2.vue" title="更多用法" description="bi-card组件的基础用法"></preview>

### 4、下拉选择框

<preview path="./index3.vue" title="下拉选择框" description="bi-card组件的下拉选择框"></preview>

### 5、配置参数（Attributes）

| 参数          | 说明             | 类型                | 默认值 |
| :------------ | :--------------- | :------------------ | :----- |
| title         | 标题             | String              |        |
| bordered      | 卡片边框         | Boolean             | false  |
| maxWidth      | 组件最大宽度     | Number              |        |
| maxHeight     | 组件最大高度     | Number              |        |
| hasMore       | 展示moreIcon     | Boolean             | false  |
| popupVisble   | 展示气泡卡片     | Boolean             | false  |
| popupPos      | 弹框位置         | positionType        | 'rt'   |
| loading       | 加载中状态       | Boolean             | false  |
| isEmpty       | 空状态           | Boolean             | false  |
| emptyText     | 空状态文字       | String              |        |
| hasSelect     | 是否需要选择框   | boolean             | false  |
| selected      | 选中值 可v-model | number,string,array | ''     |
| selectOptions | a-select配置     | 看组件文档          | {}     |
| border        | 边框             | boolean             | false  |

### 6、插槽（Slots）

| 插槽名       | 描述                           | 参数 |
| :----------- | :----------------------------- | :--- |
| default      | 内容                           |      |
| title        | 标题                           |      |
| extra        | 标题右侧内容                   |      |
| popupContent | 弹窗内容，需要配合 hasMore使用 |      |
| operation    | 功能区域                       |      |
