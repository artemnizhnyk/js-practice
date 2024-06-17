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

const addExpr = function (a, b) {
    return a + b;
};

const addArrow = (a, b) => a + b;

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
    year: 2001,
    calcAge: function () {
        console.log(this);
    }
};
anyObj.calcAge();

const oneMore = {
    year: 2000,
};

oneMore.calcAge = anyObj.calcAge;
oneMore.calcAge();