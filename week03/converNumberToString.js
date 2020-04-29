function convertNumberToString(num,radix = 10){
    let integer = Math.floor(num);
    let fraction = String(num).match(/\.\d+$/);
    if(fraction){
        fraction = fraction[0].replace('.','');
    }
    let string = '';
    while(integer > 0){
        string = String(integer%radix) + string;
        integer = Math.floor(integer/radix);
    }
    return fraction ? `${string}.${fraction}` : string;
}

console.log(convertNumberToString(12.33,10));