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