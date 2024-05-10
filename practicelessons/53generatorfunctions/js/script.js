'use strict';

function* generator() {
    yield 'H';
    yield 'e';
    yield 'l';
    yield 'l';
    yield 'o';
    yield '!';
}

const str = generator();

console.log(str.next().value);
console.log(str.next().value);
console.log(str.next().value);
console.log(str.next().value);
console.log(str.next().value);
console.log(str.next().value);

console.log(`---------------------`);

function* count(n) {
    let y = 1;
    for (let i = 0; i < n; i++) {
        y++;
        yield i+y;
    }
}

const counter = count(7);

console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(`-----------------`);

for (let k of count(10)) {
    console.log(k);
}