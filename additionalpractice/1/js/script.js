"use strict";

// let x = 5;
// alert(x++);

console.log(`-----------------------------------`);

console.log([] + false - null + true);

let y = 1;
let x = y = 2;
console.log(x);

console.log(`-----------------------------------`);

console.log(2 + 1 + []);
console.log(`1`[0]);

console.log(2 && 1  && 0 && null && undefined);

console.log(`-----------------------------------`);

console.log(null || 2 && 3 || 4);

const a = [1, 2, 3],
    b = [1, 2, 3];
console.log(a == b);

console.log(`-----------------------------------`);

console.log(+`Infinity`);

console.log(`A` > 'b');

console.log(0 || `` || 2 || undefined || true || false);