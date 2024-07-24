"use strict";

const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,

    movementsDates: [
        '2019-11-18T21:31:17.178Z',
        '2019-12-23T07:42:02.383Z',
        '2020-01-28T09:15:04.904Z',
        '2020-04-01T10:17:24.185Z',
        '2020-05-08T14:11:59.604Z',
        '2020-05-27T17:01:17.194Z',
        '2020-07-11T23:36:17.929Z',
        '2020-07-12T10:51:36.790Z'
    ],
    currency: 'EUR',
    locale: 'pt-PT' // de-DE
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,

    movementsDates: [
        '2019-11-01T13:15:33.035Z',
        '2019-11-30T09:48:16.867Z',
        '2019-12-25T06:04:23.907Z',
        '2020-01-25T14:18:46.235Z',
        '2020-02-05T16:33:06.386Z',
        '2020-04-10T14:43:26.374Z',
        '2020-06-25T18:49:59.371Z',
        '2020-07-26T12:01:20.894Z'
    ],
    currency: 'USD',
    locale: 'en-US'
};

const accounts = [account1, account2];

console.log(`----------------------------`);
console.log(0.1 + 0.2);


console.log(`------------------`);
console.log(Number(23));
console.log(+'23');
console.log(Number.parseInt('23pxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', 10));
console.log(Number.parseInt('-11111111', 2));

console.log(Number.isNaN(23 / 0));
console.log(Number.isNaN(23));
console.log(Number.isNaN(+'23df'));

console.log(`-----------------------`);
console.log(Number.isFinite(20));
console.log(Number.isFinite(20.2));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20s'));
console.log(Number.isFinite(20 / 0));

console.log(`-------------------`);
console.log(Math.sqrt(25));
console.log(5 ** 2);
console.log(27 ** (1 / 3));

console.log(`------------------`);
console.log(Math.max(5, 3, 17, 19, '23', 16));
console.log(Math.PI * Number.parseFloat('10px') ** 2);
console.log(Math.floor(Math.random() * 6) + 1);
console.log(Math.trunc(Math.random() * 6) + 1);

console.log(Math.floor(-4.1));
console.log(Math.floor(-4.9));
console.log(Math.floor(4.1));
console.log(Math.floor(4.9));

console.log(`------------`);
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt(1, 6));

console.log(`-----------------`);
console.log(Math.ceil(2.1));
console.log(Math.ceil(2.0));
console.log(Math.ceil(0.9));

console.log(`----------------`);
console.log(Math.round(5.5));
console.log(Math.round(5.4));

console.log(`----------------------`);
console.log((2.7777777777777).toFixed(0));
console.log((2.7777777777777).toFixed(1));
console.log((2.7777777777777).toFixed(2));
console.log((2.7777777777777).toFixed(3));
console.log((2.7777777777777).toFixed(4));

console.log(`-----------------`);
console.log(5 % 2);
console.log(4 % 2);

console.log(8 % 3);
console.log(8 / 3); // 8 = 2 * 3 + 2

console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

console.log(`----------------`);
const diameter = 297_460_000_000;
const priceCents = 345_99;
console.log(priceCents);

const PI = 3.14_15;

console.log(`------------------`);
console.log(+'23_333');
console.log(+'23333');

console.log(`-------------------`);
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);

console.log(`--------------------`);
console.log(1848721398479128748921739718238912731278312837n);
console.log(BigInt(184872139847));//only small number

console.log(10_000n + 10_000n);

console.log(`------------------`);
const huge = 5431287468712361887162837123n;
console.log(20n > 15);
console.log(20n === 20);
console.log(20n == 20);
console.log(typeof 20n);
console.log(huge + ' is REALLY big!!!');

console.log(`-----------------`);
// const now = new Date();
// console.log(now);
console.log(new Date('Apr/18/2001'));
console.log(account1.movementsDates[0]);

console.log(new Date(2001, 4 - 1, 18, 0, 0, 0));
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

const dayInMillis = 24 * 60 * 60 * 1000;
console.log(dayInMillis);

// const future = new Date(2025, 4 - 1, 18, 0, 0);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth() + 1);
// console.log(future.getDate());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
//
// console.log(future.toISOString());
//
// console.log(future.getDay());

console.log(`------------------`);
console.log(new Date().toISOString());
// console.log((new Date(0).getMilliseconds()));
console.log(+new Date() / 1000 / 60 / 60 / 24 / 365 - 54.5);
console.log(Date.now());

console.log(`------------------`);
const now = new Date();
const future = new Date(2025, 4 - 1, 18, 0, 0);

console.log(+now);
console.log(+future);

console.log((future - now) / 86_400_000);

console.log(`--------------`);
console.log(100 / 10 / 10);
console.log(100 / (10 * 10));

console.log(`------------------`);
console.log(3_600_000 / 1000 / 60 / 60);
console.log(3_600_000 / (1000 * 60 * 60));

console.log(`------------------`);
console.log(86_400_000 * 365);

console.log(`------------------`);
console.log(new Date().toLocaleDateString());
const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
};
const dateTimeFormat = new Intl.DateTimeFormat('en-PL', options);
console.log(dateTimeFormat.format(new Date()));

console.log(`------------------`);
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
    (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
    3000,
    ...ingredients
);
console.log('Waiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval
setInterval(function () {
    const now = new Date();
    console.log(now);
}, 1000);