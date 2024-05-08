"use strict";

let id = Symbol(`id`);

const obj = {
    name: `Test`,
    [id]: 1,
    getId: function () {
        return this[id];
    }
};

console.log(obj[id]);
console.log(obj.getId());
console.log(`-------------------`);
console.log(obj);

for (const value in obj) {
    console.log(obj[value]);
}

console.log(`-------------------`);

const myDB = {
    movies: [],
    actors: [],
    // id: 123
    [Symbol.for(`id`)]: 123
}

console.log(myDB[Symbol.for(`id`)]);


