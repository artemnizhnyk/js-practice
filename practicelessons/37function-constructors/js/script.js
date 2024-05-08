"use strict";

function User(id, name) {
    this.id = id;
    this.name = name;
    this.human = true;
    console.log(`user with id: ${id}, was created`);
    this.hello = function () {
        console.log(`Hello from ${this.name}`);
    }
}

User.prototype.exit = function () {
    console.log(`User ${this.name} has exit`);
};

const artem = new User(1, `Artem`);
const daniel = new User(2, `Daniel`);

console.log(artem);
console.log(daniel);

artem.hello();
daniel.exit();