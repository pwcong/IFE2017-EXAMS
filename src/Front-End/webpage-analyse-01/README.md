# 网页抓取分析服务系列之一（基础分析）

## 任务目的
* 体会数据的封装
* 快速学习新工具的的能力
* 熟悉phantomjs的基础用法

## 任务描述
* 安装phantomjs2.0，并查看webpage相关的API [http://phantomjs.org/api/webpage/](http://phantomjs.org/api/webpage/)
* 编写一个task.js脚本，参考官网的includeJs方法，实现根据传入的参数（关键字），抓取百度第一页对应该关键字的搜索结果。
* 将结果输出为json string回显。
* 回显的格式为
    ```
    {
        code: 1, //返回状态码，1为成功，0为失败
        msg: '抓取成功', //返回的信息
        word: '示例关键字', //抓取的关键字
        time: 2000, //任务的时间
        dataList:[   //抓取结果列表
            {
                title: 'xx',  //结果条目的标题
                info: ‘’, //摘要
                link: ‘’, //链接            
                pic: '' //缩略图地址
                }
        ]
    }
    ```

## 任务注意事项
* 多查API，学以致用
* 对于抓取的异常情况及时捕获并处理
* 结果中非自然结果的部分抛弃掉（广告、阿拉丁等），提前人工查看一下搜索结果，大多信息格式一致的都是自然结果，观察自然结果的class和相关结构特征。

## 在线学习资料
* [phantomjs下载与安装](http://phantomjs.org/download.html)
* [phantomjs使用说明](http://phantomjs.org/quick-start.html)
* [更多API文档](http://phantomjs.org/api/webpage/)