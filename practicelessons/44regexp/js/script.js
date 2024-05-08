"use strict";

// new RegExp(`pattern`, `flags`);
// /pattern/flags

// const ans = prompt(`Enter your name: `);

const reg = /n/ig;
//i - aA
//g - 1->8
//m - _-}

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt(`Password`);

// console.log(pass.replace(/./g, `*`));

console.log(`12-34-56`.replace(/-/g, `:`));

// console.log(reg.test(ans));

// \d - 21313  \D - not
// \w - asdga  \W - not
// \s - spaces \S - not
//

console.log([1, 0, 0].reduce((previousValue, currentValue) => `${previousValue}${currentValue}`));

const str = `My name is R2D2`;
console.log(str.match(/\w\d\w\d/));

