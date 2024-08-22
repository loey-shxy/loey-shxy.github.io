# bi-auto-scroll自动滚动组件(虚拟列表)

### 基础使用

<preview path="./index.vue" title="基础用法" description="bi-auto-scroll 组件的基础用法"></preview>

### 2、配置参数（Attributes）

| 参数           | 说明             | 类型          | 是否必填 | 默认值 |
| :------------- | :--------------- | :------------ | :------- | :----- |
| list           | 源数据           | array         | 是       | []     |
| autoPlay       | 自动轮播         | boolean       |          | true   |
| isWatch        | 侦听数据变化重置 | boolean       |          | true   |
| hover          | 鼠标移入暂停     | boolean       |          | true   |
| singleHeight   | 每次滚动的高度   | string,number | 是       |        |
| singleWaitTime | 每次滚动等待时间 | number        |          | 1000   |
| step           | 滚动速度         | number        |          | 1000   |
| activeRoll     | 可以主动滚动？   | boolean       |          | true   |
| minItemSize    | 元素最小高度     | string,number | 是       |        |
| isRem          | 是否使用rem      | boolean       |          | false  |
