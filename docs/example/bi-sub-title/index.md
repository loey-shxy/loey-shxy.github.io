# bi-sub-title 二级标题组件

### 1、基础使用

<preview path="./index.vue" title="基础用法" description="基础用法"></preview>

### 2、配合筛选

<preview path="./index1.vue" title="筛选用法"></preview>

### 3、配置参数（Attributes）

| 参数          | 说明             | 类型                | 默认值 |
| :------------ | :--------------- | :------------------ | :----- |
| title         | 标题             | string              | ''     |
| hasSelect     | 是否需要选择框   | boolean             | false  |
| selected      | 选中值 可v-model | number,string,array | ''     |
| selectOptions | a-select配置     | 看组件文档          | {}     |
| border        | 边框             | boolean             | false  |

### 4、插槽（Slots）

| 插槽名 | 描述     | 参数 |
| :----- | :------- | :--- |
| title  | 标题插槽 |      |
