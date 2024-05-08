"use strict";

//filter
const names = [`Artem`, `Daniel`, `Valik`, `Verybigname`];
const shortNames = names.filter(value => value.length <= 6);
console.log(shortNames);

//map
const nameLengths = names.map(value => value.length);
console.log(nameLengths);

//every/some
const some = [3, `qwe`, `asdasfaf`];
console.log(some.some(value => typeof value === `number`));
console.log(some.every(value => typeof value === `number`));

//reduce
const arr = [4, 5, 1, 3, 2, 6];
console.log(arr.reduce((previousValue, currentValue) => previousValue+currentValue));


//----------------------------------------------------------------
const obj = {
    ivan: `person`,
    ann: `person`,
    dog: `animal`,
    cat: `animal`
};

const newArr = Object.entries(obj)
    .filter(value => value[1] === `person`)
    .map(value => value[0]);
console.log(newArr);