"use strict";

const person = {
    name: `Alex`,
    tel: `+4888888888`,
    parents: {
        mom: `Anna`,
        dad: `Mike`
    }
};

console.log(JSON.stringify(person));
console.log(JSON.parse(JSON.stringify(person)));

console.log(`-----------------------------------`);

const clone = JSON.parse(JSON.stringify(person));

console.log(clone === person);
clone.name = `NewName`;
clone.parents.mom = `NewMom`;
console.log(clone);
console.log(person);