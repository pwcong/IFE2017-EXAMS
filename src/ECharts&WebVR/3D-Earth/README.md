# WebGL & ECharts - 【综合】三维地球

## 任务目的
能够综合使用 ECharts 地图的绘制和 ThreeJS 三维场景的绘制。

## 任务描述
* 用 ECharts 绘制世界地图，然后将绘制的结果作为纹理贴到 WebGL 绘制的地球上。
* 地球能够旋转缩放查看不同国家
* ECharts 地图更新后地球贴图也能相应的更新
* 效果如图
![data-1487211009184-SyY-5KzYx.png](https://ooo.0o0.ooo/2017/04/24/58fd7c34c42a6.png)
* 附加如果能够实现鼠标 hover 区域高亮的效果更好

## 任务注意事项
* 展现尽量美观
* [echarts.init](http://echarts.baidu.com/api.html#echarts.init) 可以使用 Canvas 作为容器，这个 Canvas 可以作为 WebGL 的纹理。