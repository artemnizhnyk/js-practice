"use strict";

if (4 == 9) {
    console.log(`Ok!`);
} else {
    console.log(`Not Ok`)
}

console.log(`-------------------------`);

const num = 50;

if (num < 49) {
    console.log(`Error`);
} else if (num > 100) {
    console.log(`To much`)
} else {
    console.log(num);
}

console.log(`-------------------------`);

(num === 50) ? console.log(`Ok`) : console.log(`Not Ok`);

console.log(`-------------------------`);

switch (num) {
    case 49:
        console.log(49);
        break;
    case 50:
        console.log(50);
        break;
    default:
        console.log(-999);
}