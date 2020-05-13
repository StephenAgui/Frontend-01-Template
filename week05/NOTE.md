# 每周总结可以写在这里
browser client 与 server的通讯方式有以下几种：
1.地址栏输入；
2.AJAX请求，post，get等；
3.WebSocket；


其中常见的请求method有：GET POST  PUT DELETE OPTIONS  

从浏览器地址栏输入url后，至少发生了以下几件事：
1.浏览器根据url向服务器发起HTTP GET请求；
2.服务器返回HTTP RESPONS；
3.如果发现是html则浏览器进行解析并生成DOM；
4.解析CSS并计算生成带CSS属性的DOM；
5.开始根据CSS进行排版DOM，确定元素的位置；
6.根据CSS的background等属性进行渲染并生成Bitmap；
