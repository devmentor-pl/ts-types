"use strict";
// unknown.ts
let x;
x = '22';
x = 99;
let num = 22;
// num = x; // błąd
// Type 'unknown' is not assignable to type 'number'
// x.doSomething(); // błąd
// 'x' is of type 'unknown'
if (typeof x === 'number') {
    console.log(x.toFixed(2)); // 99.00
    num = x;
}
//# sourceMappingURL=unknown.js.map