# 实现一个页面转场动画

## 任务描述
1. 首先，APP中某一页面使用了tableView组织了页面信息
2. 其次，页面中tableView的每一行信息均可点击，变切换到一个全新的页面，且切换的新页面关闭后会返回到tableView组织的页面
3. 最后，基于以上场景，实现一个页面转场动画
    * 在tableView中点击某一行信息
    * 以所点击的TableViewCell作为作画的基础，扩展到全屏展现的效果，页面并切换到最新的Cell最新的跳转页
    * 转场动画效果可参考以下图例：
    ![lvwy-animationtask-one.png](https://ooo.0o0.ooo/2017/04/24/58fd6b94bcd3c.png)
    * 当关闭当前的跳转落地页时，通过页面收缩的效果动画，恢复到所点击Cell的区域，并切换到当前Cell所在页面
    * 转场动画效果可参考以下图例:
    ![lvwy-animationtask-two.png](https://ooo.0o0.ooo/2017/04/24/58fd6bbb565f2.png)

## 任务注意事项
* 请注意代码风格的整齐、优雅
* 代码中含有必要的注释
* 无内存泄露及Crash问题
* 有良好流畅度，并能适配不同机型的屏幕分辨率
* 不能使用第三方框架、类库

## 参考资料
[iOS Animations](https://developer.apple.com/library/content/documentation/WindowsViews/Conceptual/ViewPG_iPhoneOS/AnimatingViews/AnimatingViews.html)