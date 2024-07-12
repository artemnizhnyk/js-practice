"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = (movements, sort = false) => {
    containerMovements.innerHTML = '';

    const movesProcessed = sort ? movements.slice().sort((move1, move2) => move1 - move2) : movements;
    movesProcessed.forEach((movement, i) => {
        const type = movement > 0 ? 'deposit' : 'withdrawal';

        const html = ` 
            <div class="movements__row">
                <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
<!--            <div class="movements__date">3 days ago</div>-->
                <div class="movements__value">${movement}€</div>
            </div>
        `;

        containerMovements.insertAdjacentHTML("afterbegin", html);
    });
};

const createUsernames = (accounts) => {
    return accounts.forEach(account => {
            account.username = account.owner
                .toLowerCase()
                .split(' ')
                .map(name => name.at(0))
                .join('');
        }
    );
};
createUsernames(accounts);

const calcPrintBalance = (acc) => {
    acc.balance = acc.movements.reduce((acc, curMove) => acc + curMove, 0);
    labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = (account) => {
    const totalIncome = account.movements.filter(mov => mov > 0)
        .reduce((acc, cur) => acc + cur, 0);
    labelSumIn.textContent = `${totalIncome}€`;

    const totalOut = account.movements.filter(mov => mov < 0)
        .reduce((acc, cur) => acc + cur, 0);
    labelSumOut.textContent = `${Math.abs(totalOut)}€`;

    const interest = account.movements.filter(mov => mov > 0)
        .map(deposit => deposit * account.interestRate / 100)
        .filter(interest => interest >= 1)
        .reduce((acc, cur) => acc + cur, 0);
    labelSumInterest.textContent = `${interest}€`;
};

const updateUI = (acc) => {
    displayMovements(acc.movements);

    calcPrintBalance(acc);

    calcDisplaySummary(acc);
};

let currentAccount;
const login = (e) => {
    e.preventDefault();

    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value && acc.pin === +inputLoginPin.value);

    if (currentAccount) {

        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ').at(0)}`;

        containerApp.style.opacity = 100;
        inputLoginUsername.value = inputLoginPin.value = '';
        containerApp.style.display = 'grid';
        inputLoginPin.blur();

        updateUI(currentAccount);
    }
};

btnLogin.addEventListener('click', (e) => login(e));

const transfer = (e) => {
    e.preventDefault();

    const amount = +inputTransferAmount.value;
    const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
    inputTransferAmount.value = inputTransferTo.value = '';

    if (amount > 0 && currentAccount.balance >= amount && receiverAcc && receiverAcc !== currentAccount) {
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);

        updateUI(currentAccount);
    }
};
btnTransfer.addEventListener('click', (e) => transfer(e));

const takeLoan = (e) => {
    e.preventDefault();

    const loanAmount = +inputLoanAmount.value;
    inputLoanAmount.value = '';
    if (loanAmount > 0 && currentAccount.movements.some(move => move >= loanAmount * 0.1)) {
        currentAccount.movements.push(loanAmount);
        updateUI(currentAccount);
    }
};
btnLoan.addEventListener('click', (e) => takeLoan(e));

const logout = () => {
    containerApp.style.opacity = 0;
    containerApp.style.display = 'none';
    labelWelcome.textContent = 'Log in to get started';
    currentAccount = null;
};

const closeAccount = (e) => {
    e.preventDefault();
    const username = inputCloseUsername.value;
    const pin = inputClosePin.value;
    inputCloseUsername.value = inputClosePin.value = '';
    if (currentAccount.username === username && currentAccount.pin === +pin) {
        const accountIndex = accounts.findIndex(acc => acc === currentAccount);
        accounts.splice(accountIndex, 1);
        logout();
    }

};
btnClose.addEventListener('click', (e) => closeAccount(e));

let sorted = false;

const sortMovements = (e) => {
    e.preventDefault();

    displayMovements(currentAccount.movements,  !sorted);
    sorted = !sorted;
};
btnSort.addEventListener('click', (e) => sortMovements(e));
console.log(`-----------------------------`);
console.log(`-----------------------------`);
console.log(`-----------------------------`);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

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