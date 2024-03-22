"use strict";

let str = `some`;
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1, 2, 3])

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log("Hello")
    }
};

const john = {
    health: 100
};

// *** Deprecated
john.__proto__ = soldier;
john.sayHello();
console.log(john.armor);
//-------------------------

console.log(`-----------------------`);

const dan = {
    health: 500
};
Object.setPrototypeOf(dan, soldier);
dan.sayHello();

const sam = Object.create(soldier);
sam.sayHello();