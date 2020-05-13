var set = new Set();
var queue = [
    eval, isFinite, isNaN, parseFloat, parseInt, decodeURI, decodeURIComponent, encodeURI, encodeURIComponent, Array, Date, RegExp, Promise, Proxy, Map, WeakMap, Set, WeakSet, Function, Boolean, String, Number, Symbol, Object, Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError, ArrayBuffer, SharedArrayBuffer, DataView, Float32Array, Float64Array, Int8Array, Int16Array, Int32Array, Uint8Array, Uint16Array, Uint32Array, Uint8ClampedArray, Atomics, JSON, Math, Reflect
];
let current;
while(queue.length){
    current = queue.shift();
    if(set.has(current)){
        continue;
    }
    set.add(current);
    debugger;
    for(let p of Object.getOwnPropertyNames(current)){
        console.log(p);
        var property = Object.getOwnPropertyDescriptor(current,p);
        // if(current[p] instanceof Object){
        //     queue.push(current[p]);
        // }
        if(property.hasOwnProperty("value")  && property.value instanceof Object){
            queue.push(property.value);
        }
        if(property.hasOwnProperty("getter") && property.getter instanceof Object){
            debugger;
            queue.push(property.getter);
        }

        if(property.hasOwnProperty("setter")){
            debugger;
            queue.push(property.setter);
        }
    }
}
