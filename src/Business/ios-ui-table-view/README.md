# 模拟iOS系统UITableView控件

## 任务描述
1. 使用UIScrollView和UIView两个系统基类，模拟出UITableView的Cell重用机制
2. 使用UIScrollView做外层容器，创建多个小的UIView实例作为cell并添加到容器中
3. 当UIScrollView的内容滚动时，回收移出视图的cell并保存，当需要填充新的cell时，先检查是否有回收的cell，如果没有则创建新cell
4. 界面参考图
![renxq-demo_image_2.png](https://ooo.0o0.ooo/2017/04/24/58fd69af09f6e.png)

## 任务注意事项
* 请注意代码风格的整齐、优雅
* 代码中含有必要的注释
* 有良好流畅度，并能适配不同机型的屏幕分辨率
* 无内存泄露及Crash问题
* 不能使用第三方框架、类库