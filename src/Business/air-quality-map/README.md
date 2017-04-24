# 全国空气质量地图

## 任务描述
**欢迎加入商业平台学院QQ群38234781，获得与导师一对一的沟通机会**

* 利用ECharts和第三方API，实现以地图形式查看全国主要城市空气质量的功能
* 效果可参考 [Demo1](http://echarts.baidu.com/gallery/editor.html?c=doc-example/scatter-visualMap-piecewise) [Demo2](http://echarts.baidu.com/gallery/editor.html?c=effectScatter-bmap) ，要实现的主要功能点有：
    * 在地图中以不同颜色的圆点标注出各城市所在地位置，圆点的颜色代表该城市的空气质量等级，色值和空气质量等级的对应关系如下：
        | 空气质量等级 | AQI | 色值 |
        | 优 | 0 ~ 50 | #00E400 |
        | 良 | 51 ~ 100 | #FFFF00 |
        | 轻度污染 | 101 ~ 150 | #FF7E00 |
        | 中度污染 | 151 ~ 200 | #FF0000 |
        | 重度污染 | 201 ~ 300 | #99004C |
        | 严重污染 | 300+ | #7E0023 |

    * 地图的图例部分需要增加城市图标颜色与空气质量等级的对应关系说明

    * 当鼠标hover至城市所在圆点时，出现浮层，浮层中需显示城市名称、空气质量等级、AQI数值等内容，可参考下图：
    ![f49ccc0c84bd24729c1b73ebb9dba685.png](https://ooo.0o0.ooo/2017/04/24/58fd6fab4a2e6.png)

    * 当城市的空气质量等级达到严重污染时，用来标识城市的圆点需要增加向外扩散的雷达波效果，参考上面Demo1和Demo2中的示例

    * 其他可以增强界面交互和丰富应用功能的点，请尽情发挥！

## 任务注意事项
* 上面描述中的Demo仅作为需求描述参考，不作为实现的设计参考
* 请注意代码风格的整齐、优雅
* 代码中需含有必要的注释
* 可以合理使用第三方框架、类库，图表库建议使用 [ECharts](http://echarts.baidu.com/)， 第三方空气质量数据建议采用 [PM25.in](http://www.pm25.in/api_doc)
* 所有数据均要求真实，可能需要创造一个服务端的环境及代码