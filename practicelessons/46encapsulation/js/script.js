"use strict";

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    #surname = `Nizhnyk`;

    say = () => {
        console.log(`User name: ${this.name} ${this.#surname}, age: ${this._age}`);
    };

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === `number` && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log(`Unavailable value`);
        }
    }

}

const artem = new User(`Artem`, 23);
console.log(artem.name);
console.log(artem.age);
artem.age = 99;
// console.log(artem.getAge());
//
// artem.setAge(123);
// artem.say();
// artem.setAge(25);
artem.say();
// console.log(artem.surname);