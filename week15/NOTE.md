# 本周学习主题
组件化
vue 风格的 SFC 与 React 的 JSX 都可以通过 webpack 的 loader 转译成 JS 代码，甚至可以转成同样的代码
如何编写 webpack 的 loader
https://webpack.js.org/contribute/writing-a-loader/
组件化 | 动画


css 动画无法方便的暂停，将 transition 置为"none"时，不会停止动画，而是直接跳到动画的最后一帧
JS 动画
Timeline
constructor
this.animations = []; // 存放加进来的动画
this.requestId = null; // requestAnimationFrame 产生的 id
this.state = "inited"; // timeline 的状态，包括"inited", "playing", "paused"
tick()
timeline 的每一帧里执行的操作，重复调用即可形成动画
start()
timeline 开始执行
restart()
重置 timeline 的状态和动画的状态，重新开始 timeline
pause()
timeline 暂停执行

