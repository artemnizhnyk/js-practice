"use strict";

let user = {name: `Ivan`};

let map = new WeakMap();
map.set(user, `data`);

user = null;

console.log(map.has(user));
console.log(map);

console.log(`--------------------`);

let cache = new WeakMap;

function cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now());
    }

    return cache.get(user);
}

let lena = {name: `Elena`},
    alex = {name: `Alex`};

cacheUser(lena);
cacheUser(alex);

lena = null;

console.log(cache.has(lena));
console.log(cache.has(alex));

console.log(`----------------------------`);
console.log(`WeakSet`);

let messages = [
    {text: `Hello`, from: `John`},
    {text: `World`, from: `Alex`},
    {text: `!!!!!`, from: `Artem`}
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);

readMessages.add(messages[0]);

console.log(readMessages.has(messages[0]));
console.log(readMessages.has(messages[1]));
messages.shift();
console.log(readMessages.has(messages[0]));
console.log(readMessages.has(messages[1]));