"use strict";

const user = {
    name: `Alex`,
    surname: `Smith`,
    birthday: `20/04/2021`,
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
};
for (let key in user) {
    console.log(user[key]);
}
console.log(`-----------------------`);

const arr = [`b`, `a`, `c`];
Array.prototype.someMethod = function () {
};
// for (let key in arr) {
//     console.log(arr[key]);
// }
for (let key of arr) {
    console.log(key);
}
console.log(`-----------------------`);

const str = `string`;
// for (let key in str) {
//     console.log(str[key]);
// }
for (let key of str) {
    console.log(key);
}
console.log(`-----------------------`);

const salaries = {
    john: 500,
    ivan: 1000,
    ann: 5000,
    sayHello: function () {
        console.log(`Hello`);
    }
}

salaries[Symbol.iterator] = function () {
    return {
        current: this.john,
        last: this.ann,

        next() {
            if (this.current < this.last) {
                this.current += 500;
                return {done: false, value: this.current}
            } else {
                return {done: true}
            }
            // {done: true, value: 123}
        }
    }
}

for (let salary of salaries) {
    console.log(salary);
}


const iterator = salaries[Symbol.iterator]();
console.log(iterator.next())