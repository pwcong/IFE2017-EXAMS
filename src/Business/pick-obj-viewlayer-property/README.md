# 采集窗体点击对象的页面所在view层级及对象属性

## 任务描述
**欢迎加入商业平台学院QQ群38234781，获得与导师一对一的沟通机会**

1. 首先，APP窗体有多个展示控件，展示控件且存在层级关系，如一个button控件，在一个TableViewCell的子View中
2. 其次，提取点击对象的所在窗体的页面层级关系，如：
当点击该Button控件（不限于button）时，能够获取到该button所在窗体的状体层级：
    * 层级的最高级可截止到window层级
    * 每一层级可通过点击对象的类型名进行标识
    * 层级信息可通过字符串，通过“/”分隔进行连接
    * 层级输出结果例如：UIWindow/UINavigationController/DemoViewController/Custom* View/UIButton
3. 最后，提取点击对象的相关扩展属性，如tag、action、title、对象内Label内容等信息（根据对象尝试可提取的内容)

## 任务注意事项
* 请注意代码风格的整齐、优雅
* 代码中含有必要的注释
* 无内存泄露及Crash问题
* 页面操作流畅，无明显卡顿
* 不能使用第三方框架、类库

## 参考资料
[Objective-C Runtime](https://developer.apple.com/library/content/documentation/Cocoa/Conceptual/ObjCRuntimeGuide/Articles/ocrtInteracting.html)