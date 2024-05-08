"use strict";

let number = 5;

function logNumber() {
    console.log(number);
}
number = 6;
logNumber();

number = 3;
logNumber();

console.log(`-----------`);

function createCounter() {
    let counter = 0;

    return function () {
        return ++counter;
    };
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log(c1, c2, c3);