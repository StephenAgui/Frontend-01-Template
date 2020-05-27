# 每周总结可以写在这里
字体渲染用freetype

CSS @规则的研究
at-rules--MDN
• @charset ：
• https://www.w3.org/TR/css-syntax-3/#charset-rule
• @import ：
• https://www.w3.org/TR/css-cascade-4/#at-ruledef-import
• @media ：
• https://www.w3.org/TR/css3-conditional/#at-media
• @page ：
• https://www.w3.org/TR/css-page-3/#at-ruledef-page
• @counter-style ：
• https://www.w3.org/TR/css-counter-styles-3/#the-counter-style-rule
• @keyframes ：
• https://www.w3.org/TR/css-animations-1/#at-ruledef-keyframes
• @fontface ：
• https://www.w3.org/TR/css-fonts-3/#at-font-face-rule
• @supports ：
• https://www.w3.org/TR/css3-conditional/#at-supports
• @namespace ：
• https://www.w3.org/TR/css-namespaces-3/#declaration
这里的每一种 @规则背后，都是一组 CSS 的知识。
兼容性问题
1. postCSS   不是解决兼容问题的万灵药
2. 主要解决兼容性问题不是技术，因为技术与浏览器或手机的更新换代是很快的。  因此，主要是需要快速发现兼容性问题并快速解决
3. rem方案(引入一些运行时的JS代码进行处理)是业界提出较早的方案，目前winter老师建议使用  VW方案(百分比宽度)来解决兼容性问题
4. 所有的兼容性处理并不是 挨个的所有元素都使用，不同的元素有不同的语义。比如：
a. 文字
不可能所有的文字都进行缩放，文字是有点阵的位置的.
不同的字体采用的文字大小可能都是不一样的.
文字的兼容性解决方案  应该是 让文字按照正常流去排， 而不是让文字随着屏幕的缩放而保持在一排
5. 真正去解决兼容性问题是 一个规则，  而不是一个单位，单位只是去解决一些关键问题
6. 兼容性问题推荐文章-http://www.html-js.com/article/2402
7. winter老师推荐的 兼容性最佳实践:  将rem替换为vw
8. 还原设计图的时候，可以先写成px,然后处理成vw
三. CSS普通规则的结构
CSS规则
• Selector
• https://www.w3.org/TR/selectors-3/
• https://www.w3.org/TR/selectors-3/#grammar
• https://www.w3.org/TR/selectors-4/
• Key
• Properties
• Variables-https://www.w3.org/TR/css-variables/
• Value
• https://www.w3.org/TR/css-values-4/

