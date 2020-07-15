import { promises } from "dns";

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


new Promise(resolve=>{console.log(1); resolve()}).then(()=>{console.log("##2"); this.a = 3;}),function() {return this.a}

async function after(){
    console.log("-2");
    await new Promise(resolve=>resolve()).then((console.log("-11"),()=>{console.log("-12")}));
    console.log("-1");
}

new Promise(resolve=>(console.log("0"),resolve())).then(()=>{
    console.log("1"),new Promise(resolve=>resolve()).then(()=>{
        console.log("1.5");
    })
})

setTimeout(() => {
    console.log("2");
    new Promise(resolve=>resolve()).then(console.log("3"));
}, 0);




console.log("4");
console.log("5");
after();


async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
    console.log('async2');
}

console.log("script start")

setTimeout(() => {
    console.log("setTimeOut");
}, 0);

async1();
new Promise(function (resolve) {
    console.log('promise1');
    resolve();
}).then(function () {
    console.log('promise2');
});

console.log("script end");

