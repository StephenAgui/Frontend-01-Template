# 每周总结可以写在这里
1.js只识别Unicode编码，其余编码一概不识别；
2.UTF8，UTF16是Unicode的一种编码方式；
3.nbsp是连接两个词的，跟着词来走，在一行摆不下的时候两个词会跟着一起换行；
4.空格一般只用sp，不要用其他的编码的空格；
5.换行只用\n，也就是U+000A<Line Feed>，不要用\r（U+000D）<CR>;
6.因为浮点数经度问题，0.1+0.2!=0.3,  需要这样判断Math.abs(0.1+0.2-0.3)<=Number.EPSILON;
7.**幂运算是右结合2**2**3 =256，其他都是左递归的正则；









BNF
10进制四则运算外加括号和|| &&

<Number>:="0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"

<DecimalNumber>: = "0" | (("1"|....|"9")<Number>*)

<PrimaryExperssion>:= <DecimalNumber> | "(" <LogicalExpression> ")"

<MultipleExpression>:=<PrimaryExperssion> | <MultipleExpression> "*"<PrimaryExperssion>  | <MultipleExpression> "/"<PrimaryExperssion>

<AddtionExpression>:= <MultipleExpression> | <AddtionExpresson> "+"<MultipleExpression> | <AddtionExpresson> "-"<MultipleExpression>

<LogicalExpresson>:=<DecimalNumber>| <LogicalExpresson> "||" <DecimalNumber> | <LogicalExpresson> "&&" <DecimalNumber>    //我的写法

<LogicalExpresson>:=<AdditionExpression>| <LogicalExpresson> "||" <AdditionExpression> | <LogicalExpresson> "&&" <AdditionExpression>     //老师的写法

