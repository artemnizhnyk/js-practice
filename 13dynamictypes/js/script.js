"use strict";

console.log(typeof (String(null)));
console.log(String(null));

console.log(typeof (5 + ''));
console.log(5 + '');

const num = 5;
console.log(`https://vk.com/catalog/` + num);

const fontSize = 26 + `px`;
console.log(fontSize);

console.log(`-------------------------------`);

console.log(typeof (Number(`4`)));
console.log(typeof (+`4`));

console.log(parseInt(`15px`, 10));

console.log(`-------------------------------`);

let switcher = null;
if (switcher) {
    console.log(`Working...`);
}
console.log(`---`);
switcher = 1;
if (switcher) {
    console.log(`Working...`);
}

console.log(typeof (Boolean(`4`)));
console.log(Boolean(`4`));

console.log(typeof (!!`5`));
