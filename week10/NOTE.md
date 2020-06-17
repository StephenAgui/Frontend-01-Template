# 棋盘游戏总结
1.当display为inline-block时，固定宽高，有的里面有内容，有的没有内容，则会出现诡异的不对齐问题，需要用vertical-align: middle解决

2.绑定过多事件不耗性能，多个事件同时触发才会耗性能；
3.用let解决作用域问题；
4.代码抽象能力，用代码表示赢的抽象；
5.蒙特卡洛剪枝，如果已经赢了，就不需要继续遍历了；


cssom api 总结

document.styleSheets
document.styleSheets[0].cssRules
document.styleSheets[0].insertRule('p{color: pink}', 0)
document.styleSheets[0].removeRule(0)

window.getComputedStyle(element, pseudoElement)
