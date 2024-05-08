"use strict";

const str = `test`;
const arr = [1, 2, 4];

console.log(str.length);
console.log(arr.length);

console.log(str[2]);

console.log("-------------------");

console.log(str.toUpperCase());
console.log(str.indexOf(`s`));

console.log("-------------------");

console.log(str.slice(0, 3));

console.log(str.replace(`test`, `Super test`));

console.log("-------------------");

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseFloat(test));