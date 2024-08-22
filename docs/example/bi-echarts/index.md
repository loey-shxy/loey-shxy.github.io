# ecahrts组件

### 1、bi-bar-chart组件

<preview path="./bar-chart.vue" title="bi-bar-chart 组件的基础用法"></preview>

### 配置参数（Attributes）

| 参数名          | 描述                                                | 类型                                                         | 默认值                                                       |
| --------------- | --------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| title           | 图表标题                                            | string                                                       | ''                                                           |
| data            | 数据。单柱状图data 为数组，堆叠柱状图data为对象类型 | Array<{ name: string, value: number }>  \|  {\[key: string\]: number[] } | []                                                           |
| showLegend      | 是否显示图例                                        | boolean                                                      | true                                                         |
| legendPosition  | 图例位置(showLegend为true时有效)                    | 'top' \| 'left' \| 'right' \| 'bottom'                       | bottom                                                       |
| xAxisName       | x轴名称                                             | string                                                       | ''                                                           |
| xAxisType       | x轴类型                                             | 'value' \| 'category' \| 'time' \| 'log'                     | category                                                     |
| yAxisName       | y轴名称                                             | string                                                       | ''                                                           |
| yAxisType       | y轴类型                                             | 'value' \|'category' \| 'time' \| 'log'                      | value                                                        |
| category        | 类目数据                                            | string[] \| null                                             | null                                                         |
| showBackground  | 是否显示背景                                        | boolean                                                      | true                                                         |
| backgroundColor | 背景颜色(showBackground为true时有效)                | string                                                       | \#E5E6EB                                                     |
| color           | 柱条颜色                                            | string                                                       | \#165DFF                                                     |
| barWidth        | 柱条宽度                                            | number \| string                                             | 32                                                           |
| size            | 图表尺寸                                            | 'small' \| 'medium' \| 'large'                               | medium                                                       |
| barBorderRadius | 柱条圆角                                            | number                                                       | 2                                                            |
| stackColors     | 堆叠柱状图颜色组                                    | string                                                       | ['#0E42D2', '#3491FA', '#57A9FB', '#9FD4FD', '#C3E7FE', '#E8F7FF'] |
| gradient        | 是否显示渐变色                                      | boolean                                                      | false                                                        |
| gradientColors  | 渐变颜色数组(gradient为true时有效)                  | string                                                       | ['rgba(22, 93, 255, 1)', 'rgba(22, 93, 255, 0.6)']           |
| width           | 图表宽度(百分比或 xxxpx)                            | string                                                       | 100%                                                         |
| height          | 图表高度(百分比或 xxxpx)                            | string                                                       | 100%                                                         |
| markLine        | 图表标线(同echart markLine)                  | -                                                            | -                                                            |
| dataZoomOpt | 滑动初始配置 | object     | {}      |
| grid | grid,具体看echart | object     | {}      |
| xAxisConfig | xAxisConfig,具体看echart | object     | {}      |
| xAxisConfig | xAxisConfig,具体看echart | object     | {}      |
| seriesConfig | seriesConfig,具体看echart | object     | {}      |
| tooltipConfig | tooltipConfig,具体看echart | object     | {}      |

### 插槽 slots

| 插槽名称    | 描述               | 参数 |
| ----------- | ------------------ | ---- |
| title       | 标题               | -    |
| prefix-icon | 标题前置图标       | -    |
| suffix-icon | 标题后置图标       | -    |
| extra       | 标题右侧 | -    |

### 2、bi-line-chart 组件

<preview path="./line-chart.vue" title="bi-line-chart 组件的基础用法"></preview>

### 配置参数（Attributes）

| 参数名          | 描述                                                | 类型                                                         | 默认值                                                       |
| --------------- | --------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| itle            | 图表标题                                            | string                                                       | ''                                                           |
| data            | 数据。单柱状图data 为数组，堆叠柱状图data为对象类型 | Array<{ name: string, value: number }>  \| {\[key: string\]: number[] } | []                                                           |
| showLegend      | 是否显示图例                                        | boolean                                                      | true                                                         |
| legendPosition  | 图例位置(showLegend为true时有效)                    | 'top' \| 'left' \| 'right' \| 'bottom'                       | bottom                                                       |
| xAxisName       | x轴名称                                             | string                                                       | ''                                                           |
| xAxisType       | x轴类型                                             | 'value' \| 'category' \| 'time' \| 'log'                     | category                                                     |
| yAxisName       | y轴名称                                             | string                                                       | ''                                                           |
| yAxisType       | y轴类型                                             | 'value' \|'category' \| 'time' \| 'log'                      | value                                                        |
| category        | 类目数据                                            | string[] \| null                                             | null                                                         |
| showBackground  | 是否显示背景                                        | boolean                                                      | true                                                         |
| backgroundColor | 背景颜色(showBackground为true时有效)                | string                                                       | \#E5E6EB                                                     |
| color           | 折线颜色                                            | string                                                       | \#165DFF                                                     |
| size            | 图表尺寸                                            | 'small' \| 'medium' \| 'large'                               | medium                                                       |
| stackColors     | 堆叠折线图颜色组                                    | string                                                       | ['#0E42D2', '#3491FA', '#57A9FB', '#9FD4FD', '#C3E7FE', '#E8F7FF'] |
| width           | 图表宽度(百分比或 xxxpx)                            | string                                                       | 100%                                                         |
| height          | 图表高度(百分比或 xxxpx)                            | string                                                       | 100%                                                         |
| showTooltip     | 是否显示提示框组件                                  | boolean                                                      | true                                                         |
| tooltipTrigger  | 提示框组件触发类型                                  | 'item' \| 'axis' \| 'none'                                   | item                                                         |
| smooth          | 是否平滑曲线显示                                    | boolean                                                      | true                                                         |
| markLine        | 图表标线(同echart markLine)                         | -                                                            | -                                                            |
| dataZoomOpt | 滑动初始配置 | object     | {}      |
| grid | grid,具体看echart | object     | {}      |
| xAxisConfig | xAxisConfig,具体看echart | object     | {}      |
| xAxisConfig | xAxisConfig,具体看echart | object     | {}      |
| seriesConfig | seriesConfig,具体看echart | object     | {}      |
| tooltipConfig | tooltipConfig,具体看echart | object     | {}      |

### 插槽 slots

| 插槽名称    | 描述               | 参数 |
| ----------- | ------------------ | ---- |
| title       | 标题               | -    |
| prefix-icon | 标题前置图标       | -    |
| suffix-icon | 标题后置图标       | -    |
| extra       | 标题右侧 | -    |


### 3、bi-pie-chart组件

<preview path="./pie-chart.vue" title="bi-pie-chart 组件的基础用法"></preview>

### 配置参数（Attributes）
| 参数名         | 描述                                                | 类型                                                         | 默认值                            |
| -------------- | --------------------------------------------------- | ------------------------------------------------------------ | --------------------------------- |
| itle           | 图表标题                                            | string                                                       | ''                                |
| data           | 数据。单柱状图data 为数组，堆叠柱状图data为对象类型 | Array<{ name: string, value: number }>  \| { \[key: string\]: number[] } | []                                |
| showLegend     | 是否显示图例                                        | boolean                                                      | true                              |
| legendPosition | 图例位置(showLegend为true时有效)                    | 'top' \| 'left' \| 'right' \| 'bottom'                       | bottom                            |
| colors         | 颜色组                                              | string[]                                                     | ['#3491FA', '#00B42A', '#D91AD9'] |
| size           | 图表尺寸                                            | 'small' \| 'medium' \| 'large'                               | medium                            |
| borderRadius   | 圆角                                                | number                                                       | 2                                 |
| showBorder     | 是否显示每项的边框                                  | boolean                                                      | false                             |
| borderColors   | 边框颜色组(showBorder为true时有效)                  | string[]                                                     | []                                |
| width          | 图表宽度(百分比或 xxxpx)                            | string                                                       | 100%                              |
| height         | 图表高度(百分比或 xxxpx)                            | string                                                       | 100%                              |
| radius         | 饼图半径                                            | string[]                                                     | ['40%', '70%']                    |
| showTooltip    | 是否显示提示框组件                                  | boolean                                                      | true                              |
| tooltipTrigger | 提示框组件触发类型                                  | 'item' \| 'axis' \| 'none'                                   | item                              |
| markLine       | 图表标线(同echart markLine)                         | -                                                            | -                                 |
| dataZoomOpt | 滑动初始配置 | object     | {}      |
| grid | grid,具体看echart | object     | {}      |
| xAxisConfig | xAxisConfig,具体看echart | object     | {}      |
| xAxisConfig | xAxisConfig,具体看echart | object     | {}      |
| seriesConfig | seriesConfig,具体看echart | object     | {}      |
| tooltipConfig | tooltipConfig,具体看echart | object     | {}      |

### 插槽 slots

| 插槽名称    | 描述               | 参数 |
| ----------- | ------------------ | ---- |
| title       | 标题               | -    |
| prefix-icon | 标题前置图标       | -    |
| suffix-icon | 标题后置图标       | -    |
| extra       | 标题右侧额外操作组 | -    |


### 3、bi-line-bar-chart组件

<preview path="./line-bar-chart.vue" title="bi-line-bar-chart 组件的基础用法"></preview>

### 配置参数（Attributes）

| 参数名          | 描述                                         | 类型                                                         | 默认值                                                       |
| --------------- | -------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| title           | 图表标题                                     | string                                                       | ''                                                           |
| barData         | 单柱状图data 为数组 堆叠柱状图data为对象类型 | Array<{ name: string, value: number }>  \| { \[key: string\]: number[] } | []                                                           |
| lineData        | 单折线图data 为数组 堆叠折线图data为对象类型 | Array<{ name: string, value: number }>  \| { \[key: string\]: number[] } | []                                                           |
| showLegend      | 是否显示图例                                 | boolean                                                      | true                                                         |
| legendPosition  | 图例位置(showLegend为true时有效)             | 'top' \| 'left' \| 'right' \| 'bottom'                       | bottom                                                       |
| xAxisName       | x轴名称                                      | string                                                       | ''                                                           |
| xAxisType       | x轴类型                                      | 'value' \| 'category' \| 'time' \| 'log'                     | category                                                     |
| yAxisName       | y轴名称                                      | string                                                       | ''                                                           |
| yAxisType       | y轴类型                                      | 'value' \|'category' \| 'time' \| 'log'                      | value                                                        |
| category        | 类目数据                                     | string[] \| null                                             | null                                                         |
| showBackground  | 是否显示背景                                 | boolean                                                      | true                                                         |
| backgroundColor | 背景颜色(showBackground为true时有效)         | string                                                       | \#E5E6EB                                                     |
| color           | 柱条颜色                                     | string                                                       | \#165DFF                                                     |
| barWidth        | 柱条宽度                                     | number \| string                                             | 32                                                           |
| size            | 图表尺寸                                     | 'small' \| 'medium' \| 'large'                               | medium                                                       |
| barBorderRadius | 柱条圆角                                     | number                                                       | 2                                                            |
| stackColors     | 堆叠柱状图颜色组                             | string                                                       | ['#0E42D2', '#3491FA', '#57A9FB', '#9FD4FD', '#C3E7FE', '#E8F7FF'] |
| gradient        | 柱状图是否为渐变色                           | boolean                                                      | false                                                        |
| gradientColors  | 渐变颜色数组(gradient为true时有效)           | string                                                       | ['rgba(22, 93, 255, 1)', 'rgba(22, 93, 255, 0.6)']           |
| width           | 图表宽度(百分比或 xxxpx)                     | string                                                       | 100%                                                         |
| height          | 图表高度(百分比或 xxxpx)                     | string                                                       | 100%                                                         |
| showTooltip     | 是否显示提示框组件                           | boolean                                                      | true                                                         |
| tooltipTrigger  | 提示框组件触发类型                           | 'item' \| 'axis' \| 'none'                                   | item                                                         |
| smooth          | 是否平滑曲线显示                             | boolean                                                      | true                                                         |
| markLine        | 图表标线(同echart markLine)                  | -                                                            | -                                                            |
| dataZoomOpt | 滑动初始配置 | object     | {}      |
| grid | grid,具体看echart | object     | {}      |
| xAxisConfig | xAxisConfig,具体看echart | object     | {}      |
| xAxisConfig | xAxisConfig,具体看echart | object     | {}      |
| seriesConfig | seriesConfig,具体看echart | object     | {}      |
| tooltipConfig | tooltipConfig,具体看echart | object     | {}      |

### 插槽 slots

| 插槽名称    | 描述               | 参数 |
| ----------- | ------------------ | ---- |
| title       | 标题               | -    |
| prefix-icon | 标题前置图标       | -    |
| suffix-icon | 标题后置图标       | -    |
| extra       | 标题右侧 | -    |
