"use strict";

console.log(Number.MAX_VALUE);

const bigint = 12323114234572395873298578923748927348n;
const sameBigint = BigInt(12323114234572395873298578923748927348);

console.log(typeof bigint);
console.log(bigint);

// console.log(5n + 5); //error
// console.log(Math.round(3n)); //error

console.log(1n + 2n);

console.log(`---------------------------`);
console.log(5n / 2n); // 2

console.log(2n > 5); // no error

console.log(`---------------------------`);

let bigInt = 1n;
let number = 2;

console.log(bigInt + BigInt(number));
console.log(Number(bigInt) + number);