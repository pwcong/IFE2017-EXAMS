# WebGL No.4 - 照相机和交互控制

[Demo预览](http://pwcong.me/IFE2017-EXAMS/src/ECharts&WebVR/WebGL-04/)

## 任务目的
在这一题中，你将了解如何为场景设置合适的照相机位置，并且配合鼠标实现交互控制照相机位置。

## 任务描述
* 学习[《Three.js 入门指南》](http://www.ituring.com.cn/article/47975)第 2 章照相机；
* 为场景添加合适的照相机位置；
* 实现交互控制照相机位置；
    * 场景可以使用前两题的，也可以随意添加一些物体；
    * 使用 `TrackballControls` 实现 [Three.js 例子](https://threejs.org/examples/?q=control#misc_controls_trackball) 的效果；
        * 左键旋转、中键缩放、右键平移；
        * Three.js 提供了一类辅助类的代码，比如用于交互控制的 [TrackballControls](https://github.com/mrdoob/three.js/blob/master/examples/js/controls/TrackballControls.js) ，这些代码不包括在 `three.js` 文件中，需要使用的话要额外引入，在这题中，可以使用这个文件快速实现效果；
        * 可以参考其[实现代码](https://github.com/mrdoob/three.js/blob/master/examples/misc_controls_trackball.html)，但是要理解每行代码做了什么事；
    * 有能力的同学可以看一下 [TrackballControls](https://github.com/mrdoob/three.js/blob/master/examples/js/controls/TrackballControls.js) 的源码做了那些事；

如果觉得看不懂也没关系，这的确需要比较深入的图形学知识，这里我们不想展开叙述，让我们的课程显得太过枯燥。

其实，理解照相机的最直观的类比就是在真实的世界中我们是如何用照相机拍照的：
* 首先，我们会摆放好照相机的位置（即 `camera.position.set(...)`；
* 其次，在这个位置瞄准我们要拍摄的物体（即 `camera.lookAt(...)`）；
* 最后，确认照相机放水平了（即设定向上矩阵 `camera.up.set(...)`）。

对照相机的操作都可以归结到这三种操作中，而实际代码之所以看起来难以理解，是因为有时候直接使用了向量、矩阵操作，不要被它们吓到了！

`TrackballControls` 这个名字来源于[轨迹球](https://zh.wikipedia.org/wiki/%E8%BD%A8%E8%BF%B9%E7%90%83)的隐喻，这是一种类似老式鼠标的机械装置，通过球体的旋转控制场景的旋转。我们可以想象，用鼠标拖曳屏幕的操作，等同于滚动这个轨迹球。因此，这就是通过二维屏幕的一个向量，映射到三维空间球体旋转向量的过程。具体的映射算法有很多变种，[这里](http://www.diku.dk/~kash/papers/DSAGM2002_henriksen.pdf) 有更详细的说明，感兴趣的同学可以作为扩展阅读。