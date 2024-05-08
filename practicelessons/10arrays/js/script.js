"use strict";

const arr = [13, 288, 3, 65 ,8];
arr.sort(function (a, b) {
    return a - b;
});
console.log(arr);

arr.pop();
console.log(arr);

arr.push(10);
console.log(arr);

for (let number of arr) {
    console.log(number);
}

arr.forEach(function (item, i, array) {
    console.log(`${i}: ${item} inside of array - ${array}`);
});

// const str = prompt(``,``);
// const products = str.split(`, `);
// products.sort();
// console.log(products.join('; '));