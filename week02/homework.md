# 作业
1.匹配所有Number直接量的正则
    /^-?(0|[1-9][0-9]*|(0|[1-9][0-9]*)|\.[0-9]*|[0-9]\.[0-9]e[-?][1-9]+|^0[bB][01]+|^0[oO][0-7*]|^0[xX][0-9]*[a-fA-F]*)/



2.UTF8编码

function UTF8Encoding(str){
       let arr = str.split('');
       let codes = arr.map(item=>`\\u${item.charCodeAt().toString(16)}`);
       console.log(codes.join(''));
   }
   UTF8Encoding('厉害');
   

    
3.写一个正则表达式匹配所有字符串直接量，单引号和双引号

/(^[\u4E00-\u9FA5A-Za-z0-9]+$ | (?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*/
    
