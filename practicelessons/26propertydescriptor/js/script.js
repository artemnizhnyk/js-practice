"use strict";

const user = {
    name: `Alex`,
    surname: `Smith`,
    [Symbol(`birthday`)]: `20/0402021`,
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
};

// Object.defineProperty(user, `birthday`, {value: prompt(`Date`), writable: false});
console.log(`---------------------------------------`);

console.log(Object.getOwnPropertyDescriptor(user, `name`));
Object.defineProperty(user, `name`, {writable: false});
// user.name = `newName`;
console.log(`---------------------------------------`);

Object.defineProperty(user, `gender`, {value: `male`});
console.log(Object.getOwnPropertyDescriptor(user, `gender`));
console.log(`---------------------------------------`);

Object.defineProperty(user, `showMyPublicData`, {enumerable: false});
for (const key in user) console.log(key);
console.log(`---------------------------------------`);

Object.defineProperties(user, {
    name: {writable: false},
    surname: {configurable: false}
});
