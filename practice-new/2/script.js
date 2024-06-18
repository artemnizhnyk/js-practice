"use strict";

const calcAge = (birthYear) => {
    const firstName = "Another name";
    console.log(firstName);
    const age = 2024 - birthYear;
    const printAge = () => {
        console.log(`You are ${age}, born in ${birthYear}`);

        if (birthYear >= 1981 && birthYear <= 1996) {
            const millenial = true;
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
        }

        // add(2, 3);
    };
    printAge();
    return age;
};

const firstName = 'Artem';
calcAge(2001);

console.log(`-------------------------`);

console.log(addDecl(2, 2));
// console.log(addExpr(2, 2));
// console.log(addArrow(2, 2));


function addDecl(a, b) {
    return a + b;
}

// const addExpr = function (a, b) {
//     return a + b;
// };
//
// const addArrow = (a, b) => a + b;

function deleteShoppingCart() {
    console.log(`All products deleted!`);
}

console.log(`----------------------`);

console.log(this);

const any123 = function (any) {
    console.log(2037 - any);
    console.log(this);
};
any123(1);

const any1234 = (any) => {
    console.log(2037 - any);
    console.log(this);
};
any1234(1);

const anyObj = {
    firstName: 'Any',
    year: 2001,
    calcAge: function (){
        // Solution 1
        // console.log(this);
        //
        // const self = this;
        // const isMillenial = function () {
        //     console.log(self.year >= 1981 && self.year <=1996);
        // };

        // Solution 2
        const isMillenial = () => console.log(this.year >= 1981 && this.year <=1996);

        isMillenial();
    },
    greet: () => console.log(`Hey ${this.firstName}`)
};
// anyObj.calcAge();

const oneMore = {
    year: 2000,
};

oneMore.calcAge = anyObj.calcAge;
oneMore.calcAge();

console.log(`----------------------`);

anyObj.greet();
anyObj.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
};

// Error
// const addArrow = (a, b) => {
//     console.log(arguments);
//     return a + b;
// };

addExpr(1,1);
// addArrow(1, 1);


console.log(`---------------`);

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);
console.log(`--------------------`);
const me = {
    name: 'Artem',
    age: 23
};
// const friend = me;
// friend.age = 27;
// console.log(me);
// console.log(friend);
const friend = {...me};
friend.age = 27;
console.log(me);
console.log(friend);

console.log(`-----------------`);

