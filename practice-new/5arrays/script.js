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
        '2020-07-12T10:51:36.790Z',
    ],
    currency: 'EUR',
    locale: 'pt-PT', // de-DE
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
        '2020-07-26T12:01:20.894Z',
    ],
    currency: 'USD',
    locale: 'en-US',
};

const accounts = [account1, account2];


console.log(`-----------------------------`);
console.log(`-----------------------------`);
console.log(`-----------------------------`);

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling']
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(1, -1));
console.log(arr.slice());

console.log(`----------------`);
console.log(arr.splice(0, 3));
console.log(arr);
console.log(`-----------------`);
console.log(arr.splice(1));
console.log(arr);

console.log(`-------------------`);
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

console.log(`----------------`);
console.log(arr.concat(arr2));
console.log(arr);
console.log(arr2);

console.log(`----------------`);
console.log(arr.join('-'));
console.log(arr);

console.log(`-----------------`);
arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

console.log(arr[arr.length - 1]);
console.log(arr.at(-1));

console.log(`-----------------`);
movements.forEach(movement => movement > 0
    ? console.log(`You deposited ${movement}`)
    : console.log(`You withdrew ${Math.abs(movement)}`)
);

console.log(`--------------------`);
currencies.forEach((value, key) => console.log(`${key} - ${value}`));

console.log(`-------------------`);
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(value => console.log(value));

console.log(`-----------------------------`);
const eurToUsd = 1.1;
console.log(movements.map(value => value * eurToUsd));

const movementsDescription = movements.map((mov, i, arr) => {
    if (mov > 0) {
        return `Movement ${i + 1}: You deposited ${mov}`;
    } else {
        return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
    }
});

console.log(movementsDescription);

console.log(`---------------------`);
const deposits = movements.filter((mov, i, arr) => mov > 0);
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

console.log(`-----------------------`);
const balance = movements.reduce((acc, currentValue) => acc + currentValue, 0);
console.log(balance);

console.log(`--------------------`);
const total = movements
    .filter(mov => mov > 0)
    .map(mov => mov * eurToUsd)
    .reduce((acc, currentValue) => acc + currentValue);
console.log(total);

console.log(`-------------------`);
const firstWithdrawal = movements.find(value => value < 0);
console.log(firstWithdrawal);
console.log(movements.find(value => value === 3000));
console.log(movements.find(value => value === 2999));

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

console.log(`-----------`);
console.log(movements);
console.log(movements.includes(-130));

console.log(movements.some(move => move > 0));
console.log(movements.every(move => move > 0));

console.log(`---------------------------`);
arr = [[1, 2, 3], [4, 5, 6], 7, 8, 9];
console.log(arr.flat());

const arrDeep = [[1, [2, [3]]], [4, [5, 6]], 7, [8, 9]];
console.log(arrDeep.flat(4));

const accountAllMovements = accounts.map(acc => acc.movements).flat();
console.log(accountAllMovements);

console.log(accounts.flatMap(acc => acc.movements));

const owners = ['Artem', 'Vlad', 'Daniel', 'Valik'];
console.log(owners.sort());
console.log(owners);

console.log(movements);
movements.sort((move1, move2) => move1 - move2);
console.log(movements);

const any123 = [1, 1, 2];
any123.sort((any1, any2) => any1 - any2);
console.log(any123);

console.log(`------------`);
const x = new Array(7);
console.log(x);
// x.fill(7);
x.fill(7, 3, 5);
console.log(x);

const y = Array.from({length: 7}, () => 1);
console.log(y);

arr = [1, 2, 3, 4, 5, 6, 7];
const z = Array.from({length: 7}, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', () => {
    const movementsUI = Array.from(document.querySelectorAll('.movements__value'),
            el => +el.textContent.replace('€', ''));
    console.log(movementsUI);
});

console.log(`-----------------------`);
const bankDepositSum = accounts
    .flatMap(acc => acc.movements)
    .filter(move => move > 0)
    .reduce((move1, move2) => move1 + move2, 0);
console.log(bankDepositSum);

console.log(`-----------------------`);
const numAccDepositMore1000 = accounts.filter(acc=>
    acc.movements.reduce(
        (move1,move2) => move1 + move2, 0) > 1000
).length;
console.log(numAccDepositMore1000);

console.log(`-----------------`);
const sums = accounts
    .flatMap(acc => acc.movements)
    .reduce((acc, cur) => {
        cur > 0 ? acc.deposits += cur : acc.withdrawals += cur;
        return acc;
    }, {deposits: 0, withdrawals: 0});
console.log(sums);

labelBalance.addEventListener('click', function () {
    [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
        // 0, 2, 4, 6
        if (i % 2 === 0) row.style.backgroundColor = 'orangered';
        // 0, 3, 6, 9
        if (i % 3 === 0) row.style.backgroundColor = 'blue';
    });
});