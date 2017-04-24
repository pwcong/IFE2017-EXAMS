# ECharts NO.6 - 绘制人物关系图

## 任务目的
学习一些常见的关系数据（网络数据）可视化手段

## 任务描述
* 从 [http://www-personal.umich.edu/~mejn/netdata/](http://www-personal.umich.edu/~mejn/netdata/) 选择一份关系数据下载
* 用 [gephi](https://gephi.org/) 对数据进行处理，布局，分类后导出成 [gexf](https://gephi.org/gexf/format/) 格式。
* 解析 [gexf](https://gephi.org/gexf/format/) 格式后用 ECharts 的 [graph](http://echarts.baidu.com/examples.html#chart-type-graph) 类型图表展现。

## 任务注意事项
* 这个是 graph 图的 [配置项手册](http://echarts.baidu.com/option.html#series-graph)。
* echarts 中目前默认提供了两种『自动布局』方式：[径向布局](http://echarts.baidu.com/demo.html#graph-circular-layout) 和 [力引导布局](http://echarts.baidu.com/demo.html#graph-force)。另外，echarts 也支持展示『预先布局』好的数据（如[例子](http://echarts.baidu.com/demo.html#graph)）。
* 小数据集可以直接在 echarts 中用 [力引导布局](http://echarts.baidu.com/demo.html#graph-force) 布局。
* 但是大数据集建议用 [gephi](https://gephi.org/) 『预先布局』好，再输入 echarts。
* 要求展现美观（包括但不限于：展现清晰、空间利用合理、视觉样式舒适）。