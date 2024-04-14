"use strict";

const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
];

const budget = [5000, 15000, 25000];

const map = new Map();

shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
});

console.log(map);
console.log(`-------------------------`);

console.log(map.get(shops[0]));
console.log(map.has(shops[0]));
// map.delete(key);
// map.clear();
// map.size;

const newMap = new Map(map);
console.log(newMap);
console.log(`-----------------`);

for (const shop of map.keys()) {
    console.log(Object.keys(shop)[0]);
}

console.log(`-------------------------`);

// for (let price of map.values()) {
//     console.log(price);
// }

// for (let price of map.entries()) {
//     console.log(price);
// }

for (let [shop, budget] of map.entries()) {
    console.log(shop, budget);
}

console.log(`-------------------------`);

map.forEach((value, key, map) => {
    console.log(`${key} - ${value} (${map})`);
});

console.log(`-------------------------`);

const user = {
    name: `Alex`,
    surname: `Smith`,
    birthday: `20/04/2021`,
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
};

const userMap = new Map(Object.entries(user));

console.log(user);
console.log(userMap);

const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);