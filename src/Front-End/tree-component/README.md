# 实现树形组件

## 任务目的
* 练习综合运用HTML、CSS排版
* 练习 JavaSript 递归使用
* 练习 css 控制 html 隐藏和显示

## 任务描述
![1487843670948671f49317f95debe1c90dfd86167bc30.png](https://ooo.0o0.ooo/2017/04/24/58fd80d9b009b.png)
* 类似window 资源管理器
* 支持无限层级展示
* 支持文件夹展开和隐藏
* 不必支持显示文件夹图片
* 支持数据格式如下：
```
var nodes = [ 
    {
        name: "父节点1", 
        children: [ 
            { name: "子节点1" }, 
            { name: "子节点2" } 
        ]
    }, 
    {
        name: "父节点2", 
        children: [ 
            { name: "子节点3" }, 
            { 
                name: "子节点4", 
                children:[ 
                    {name:"子节点5"}
                ]
            } 
        ]
    } 
];
```

## 任务注意事项
* 不可以使用 Jquery 等类似库
* 代码关键处必须要有注释

在线学习参考资料
[http://www.programgo.com/article/1773206948/;jsessionid=B79D72FB09013DA7FDC804E9E34D4C4E](http://www.programgo.com/article/1773206948/;jsessionid=B79D72FB09013DA7FDC804E9E34D4C4E)
[https://www.jstree.com/](https://www.jstree.com/)