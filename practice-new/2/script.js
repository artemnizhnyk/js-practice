"use strict";

const calcAge = (birthYear) => {
    const firstName = "Another name";
    console.log(firstName);
    const age = 2024 - birthYear;
    const printAge = () => {
        console.log(`You are ${age}, born in ${birthYear}`);

        if(birthYear >= 1981 && birthYear <= 1996) {
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