"use strict";

console.log(`arr` + ` - object`);
console.log(4 + ` - object`);
console.log(4 + +`4`);

console.log(`-----------------------------------`);

let incr = 10,
    decr = 10;

incr++;
console.log(incr);
console.log(incr++);
console.log(incr);

console.log(`-----------------------------------`);

decr--;
console.log(decr);

console.log(`-----------------------------------`);

console.log(5 % 2);
console.log(1 == `1`);
console.log(1 === `1`);

console.log(`-----------------------------------`);

console.log(1 == 1*1 && 2 == 2*2);
console.log(1 == 1*1 || 2 == 2*2);