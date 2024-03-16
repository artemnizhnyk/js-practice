"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text)
    num = 10;
}

showFirstMessage(`Hello world`);
console.log(num);

console.log("-------------------");

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(1, 2));

console.log("-------------------");

function ret() {
    return 50;
}

const anotherNum = ret();
console.log(anotherNum);

console.log("-------------------");

const logger = function () {
    console.log(`logger`);
};

logger();

console.log("-------------------");

const calc = (a, b) => a + b;

console.log(calc(1,2));