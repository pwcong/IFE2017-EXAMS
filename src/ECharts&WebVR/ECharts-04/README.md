# ECharts NO.4 - 可视化前的数据预处理

[Demo预览](http://pwcong.me/IFE2017-EXAMS/src/ECharts&WebVR/ECharts-04/)

## 任务目的
* 学会使用 `Node.js` 将获取的 `csv` 格式的数据转换成能够用 echarts 展现的格式。

* 为什么要『数据预处理』？

    * 我们拿到数据，或者自己整理数据，常使用『电子表格』（例如微软的 `Excel`、苹果的 `Numbers`）。`csv` 是这些电子表格软件都能识别的文件格式，这种格式很简单（只用逗号和换行符分隔数据）。而图表库一般都有自己的数据格式要求。例如 JavaScript 图表库要求数据的输入是 `JSON` 或者 `JavaScript Array` 格式：
        ```
        [
            [20090821, A, 25.6, 25.61, 25.22, 25.55, 34758],
            [20090824, A, 25.64, 25.74, 25.33, 25.5, 22247],
            [20090825, A, 25.5, 25.7, 25.225, 25.34, 30891]
        ]
        ```
        于是我们在使用 `echarts` 前，需要把 `Excel` 中的数据转换为 `JSON` 格式，从而图表库能够读取。

    * 除了格式转换外，假如原始数据的结构可能不适合与图表展现，也可以在转换中按需做一些处理。

## 任务描述
* [这里](https://github.com/100pah/ife/blob/master/2017Q1/echarts_data_preprocess/sp500hst.txt) 有一份从 [http://pages.swcp.com/stocks/](http://pages.swcp.com/stocks/) 获取的 `csv` 格式的股票数据。数据大体长成这样：
    ```
    20090821,A,25.6,25.61,25.22,25.55,34758
    20090824,A,25.64,25.74,25.33,25.5,22247
    20090825,A,25.5,25.7,25.225,25.34,30891
    ...
    ```
    其中，各个列依次分别表示每天的：`Date`, `Ticker`, `Open`, `High`, `Low`, `Close`, `Volume`

* 用 `Node.js` 处理数据成 `echarts` 可接受的 `JSON` 或者 `JavaScript Array` 格式
* 用 [K 线图](http://echarts.baidu.com/option.html#series-candlestick) 结合 [折线图](http://echarts.baidu.com/option.html#series-line) 和 [柱状图](http://echarts.baidu.com/option.html#series-bar) 展现这些数据。

## 任务注意事项
* 展现样式没有强制的规定，但是须（1）正确（2）清晰（3）尽量美观。
* 可以参考 [http://echarts.baidu.com/examples.html#chart-type-candlestick](http://echarts.baidu.com/examples.html#chart-type-candlestick)
* 须能够用 [dataZoom](http://echarts.baidu.com/option.html#dataZoom) 组件进行数据的筛选。