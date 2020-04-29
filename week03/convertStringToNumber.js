function convertStringToNumber(string,radix){
    string = replaceWhiteSpaceIn(string);
    // string = formatStringByRadix(string,radix);
    var arr = string.split('');
    var number = 0 ;
    let i = 0;
    while(i<arr.length&& arr[i] != '.'){
        number = number*radix;
        number += arr[i].codePointAt(0) - '0'.codePointAt(0);
        i++;
    }
    if(arr[i] == '.'){
        i++;
    }
    var fraction = 0;
    while(i<arr.length ){
        fraction += arr[i].codePointAt(0) - '0'.codePointAt(0);
        fraction = fraction / radix;
        i++;
    }
    return number+fraction;
}

function replaceWhiteSpaceIn(str){
    let resStr = str.replace(/\s*/g,'');  //
    resStr = resStr.replace(/[\r|\n]/g,'');
    return resStr;
}

function formatStringByRadix(str,radix){
    let resStr = '';
    let testReg = null;
    switch (radix){
        case 10:
            testReg = /^((0)|([1-9][0-9]*))?.?([0-9]*)?/;
            break;
        case 2:
            testReg = /^(0|1)+/;
            break;
        case 8:
            testReg = /^[0-7]+/;
            break;
        case 16:
            testReg = /^0(x|X)?([0-9a-fA-F])+/;
            break;
        default :
            return false;
    }
    resStr = (testReg.exec(str) && testReg.exec(str)['0']);
}


var s = convertStringToNumber("100.2",10);
console.log(s);