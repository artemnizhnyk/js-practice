"use strict";

let a = 5,
    b = a;

b = b + 5;
console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

const niceCopy = obj;

niceCopy.a = 10;
console.log(niceCopy);
console.log(obj);

let s1 = `hi`,
    s2 = s1;

s2 = 'new hi'
console.log(s1);
console.log(s2);

function copy(mainObj) {
    let lightCopy = {};

    for (const key in mainObj) {
        lightCopy[key] = mainObj[key];
    }
    return lightCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 999;
console.log(numbers);
console.log(newNumbers);

newNumbers.c.x = 777;
console.log(numbers);
console.log(newNumbers);

const add = {
    d: 17,
    e: 20
};

console.log(`-------------------------`)
console.log(Object.assign(numbers, add));

console.log(`-------------------------`)

const clone = Object.assign({}, newNumbers);

clone.a = 1000;
console.log(newNumbers);
console.log(clone);

console.log(`-------------------------`)

const oldArray = [`a`, `b`, `c`];
const  newArray = oldArray.slice();

newArray[1] = 'rrr';
console.log(newArray);
console.log(oldArray);

console.log(`-------------------------`)

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'live-journal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'instagram'];

console.log(internet);

const array = [`a`, `b`, `c`];

const newOneArray = [...array];

const oldObj = {
    one: 1,
    two: 2,
    three: 3
};

const newObj = {...oldObj};
