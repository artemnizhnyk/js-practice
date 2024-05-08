"use strict";

const arr = [1, 1, 2, 2, 4, 5, 6, 5];

const set = new Set(arr);

set.add(99);

console.log(set);

set.delete(5);
console.log(set);
console.log(set.has(5));
// set.clear();
console.log(set.size);

for (let value of set) console.log(value);
console.log(`--------------------`);
set.forEach((value, value2, set) => {
    console.log(value, value2);
});

console.log(set.values());
console.log(set.keys());
console.log(set.entries());

function unique(arr) {
    return Array.from(new Set(arr));
}

console.log(unique(arr));