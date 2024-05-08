"use strict";

const box = document.querySelector(`.box`),
    block = document.querySelector(`.block`);

console.log(block);

// if (block) {
//     console.log(block.textContent);
// }

// console.log(block?.textContent);

// console.log(1 + 2);

const userData = {
    name: `Artem`,
    age: null,
    say: function () {
        console.log(`hello`);
    }
};

userData.say();
userData.hey?.();

if (userData && userData.skills && userData.skills.js) {
    console.log(userData.skills.js);
}
console.log(userData?.skills?.js);

