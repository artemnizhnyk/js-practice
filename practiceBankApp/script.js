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
                <div class="movements__value">${movement.toFixed(2)}€</div>
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
    labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = (account) => {
    const totalIncome = account.movements.filter(mov => mov > 0)
        .reduce((acc, cur) => acc + cur, 0);
    labelSumIn.textContent = `${totalIncome.toFixed(2)}€`;

    const totalOut = account.movements.filter(mov => mov < 0)
        .reduce((acc, cur) => acc + cur, 0);
    labelSumOut.textContent = `${Math.abs(totalOut).toFixed(2)}€`;

    const interest = account.movements.filter(mov => mov > 0)
        .map(deposit => deposit * account.interestRate / 100)
        .filter(interest => interest >= 1)
        .reduce((acc, cur) => acc + cur, 0);
    labelSumInterest.textContent = `${interest.toFixed(2)}€`;
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

    const amount = inputTransferAmount.value;
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

    const loanAmount = Math.floor(inputLoanAmount.value);
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

    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
};
btnSort.addEventListener('click', (e) => sortMovements(e));