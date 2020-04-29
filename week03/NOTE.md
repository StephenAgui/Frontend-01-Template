# 每周总结可以写在这里
对象三要素:唯一性，状态和行为；
封装，复用，解耦，聚合是架构层面的描述；
继承是面向对象的一个子集；
基于类的面向对象有两个派别：归类和分类，归类有多继承，比如C++；分类是有一个基类Object，比如Java，通过依赖注入（mixins）解决多继承；
基于原型的面向对象是通过”相似“性来描述，是通过一个基本对象Object，来做扩展；
JavaScript有多个属性property，一个原型ProperType；
属性有key和value，这个跟C++不一样，C++没有Key，通过偏移量来取value；
key分为string和syble；value分为data和acessor；

按照 ECMAScript 标准，一些特定语句（statement) 必须以分号结尾。分号代表这段语句的终止。但是有时候为了方便，这些分号是有可以省略的。这种情况下解释器会自己判断语句该在哪里终止。这种行为被叫做 “自动插入分号”，简称 ASI (Automatic Semicolon Insertion) 。实际上分号并没有真的被插入，这只是个便于解释的形象说法。
var 最好写在函数内最前面或变量第一次出现的地方


无法用js实现的对象如下：
基本类型：Boolean String Number Symbol Object;
基础功能和数据结构： Array  Date RegExp Promise Proxy Map WeekMap Set WeakSet Function;
错误类型：Error EvalError RangeError ReferenceError SyntaxError TypeError URIError;
二进制操作 ArrayBuffer SharedArrayBuffer DataView;
带类型的数组：Float32Array Float64Array Int8Array Int16Array Int32Array Uint8Array Uint16Array Uint32Array Uint8ClampedArray



