"use strict";

const person = {
    name: `Alex`,
    age: 25,

    get getAge() {
        return this.age;
    },
    set setAge(age) {
        this.age = age;
    }
};

console.log(person.setAge = 30);

console.log(person.age);
console.log(person.getAge);
