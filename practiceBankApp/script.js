"use strict";

const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,

    movementsDates: [
        '2023-11-01T13:15:33.035Z',
        '2023-11-30T09:48:16.867Z',
        '2023-12-25T06:04:23.907Z',
        '2024-07-19T14:18:46.235Z',
        '2024-07-20T16:33:06.386Z',
        '2024-07-21T14:43:26.374Z',
        '2024-07-22T18:49:59.371Z',
        '2024-07-23T12:01:20.894Z'
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
        '2019-11-18T21:31:17.178Z',
        '2019-12-23T07:42:02.383Z',
        '2020-01-28T09:15:04.904Z',
        '2020-04-01T10:17:24.185Z',
        '2020-05-08T14:11:59.604Z',
        '2020-05-27T17:01:17.194Z',
        '2020-07-11T23:36:17.929Z',
        '2020-07-12T10:51:36.790Z'
    ],
    currency: 'USD',
    locale: 'en-US'
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

function createFormattedDate(date, locale) {
    const calcDaysPassed = (date1, date2) => Math.round(Math.abs(date2 - date1) / 86_400_000);

    const daysPassed = calcDaysPassed(new Date(), date);

    switch (daysPassed) {
        case 0:
            return 'Today';

        case 1:
            return 'Yesterday';

        case 2:
            return '2 days ago';

        case 3:
            return '3 days ago';
    }

    return new Intl.DateTimeFormat(locale).format(date);
}

function formatCur(value, locale, currency) {
    return new Intl.NumberFormat(locale,
        {
            style: `currency`,
            currency: currency
        })
        .format(value);
}

const displayMovements = (account, sort = false) => {
    containerMovements.innerHTML = '';

    const sortingValues = [];

    const movesProcessed = sort ? account.movements.slice().sort((move1, move2) => {
        const sortingValue = move1 - move2;
        sortingValues.push(sortingValue);
        return sortingValue;
    }) : account.movements;

    let counter = 0;
    const movesDatesProcessed = account.movementsDates.slice().sort((move1, move2) => sortingValues[counter++]);

    movesProcessed.forEach((movement, i) => {
        const type = movement > 0 ? 'deposit' : 'withdrawal';


        const date = new Date(movesDatesProcessed.at(i));
        const displayDate = createFormattedDate(date, account.locale);

        const formattedMov = formatCur(movement, account.locale, account.currency);

        const html = ` 
            <div class="movements__row">
                <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
            <div class="movements__date">${displayDate}</div>
                <div class="movements__value">${formattedMov}</div>
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
    labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = (account) => {
    const totalIncome = account.movements.filter(mov => mov > 0)
        .reduce((acc, cur) => acc + cur, 0);
    labelSumIn.textContent = formatCur(totalIncome, account.locale, account.currency);

    const totalOut = account.movements.filter(mov => mov < 0)
        .reduce((acc, cur) => acc + cur, 0);
    labelSumOut.textContent = formatCur(totalOut, account.locale, account.currency);

    const interest = account.movements.filter(mov => mov > 0)
        .map(deposit => deposit * account.interestRate / 100)
        .filter(interest => interest >= 1)
        .reduce((acc, cur) => acc + cur, 0);
    labelSumInterest.textContent = formatCur(interest, account.locale, account.currency);
};

const updateUI = (acc) => {
    displayMovements(acc);

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

        const options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
        };

        labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(new Date());

        inputLoginUsername.value = inputLoginPin.value = '';
        containerApp.style.display = 'grid';
        inputLoginPin.blur();

        updateUI(currentAccount);
    }
};

const transfer = (e) => {
    e.preventDefault();

    const amount = inputTransferAmount.value;
    const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
    inputTransferAmount.value = inputTransferTo.value = '';

    if (amount > 0 && currentAccount.balance >= amount && receiverAcc && receiverAcc !== currentAccount) {
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);

        currentAccount.movementsDates.push(new Date().toISOString());
        receiverAcc.movementsDates.push(new Date().toISOString());

        updateUI(currentAccount);
    }
};

const takeLoan = (e) => {
    e.preventDefault();

    const loanAmount = Math.floor(inputLoanAmount.value);
    inputLoanAmount.value = '';
    if (loanAmount > 0 && currentAccount.movements.some(move => move >= loanAmount * 0.1)) {
        currentAccount.movements.push(loanAmount);
        currentAccount.movementsDates.push(new Date().toISOString());
        updateUI(currentAccount);
    }
};

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

let sorted = false;
const sortMovements = (e) => {
    e.preventDefault();

    displayMovements(currentAccount, !sorted);
    sorted = !sorted;
};

//FAKE LOGIN \|/ ONLY TEST PURPOSES
inputLoginUsername.value = 'js';
inputLoginPin.value = '1111';
login(new Event('click'));
//FAKE LOGIN /|\ ONLY TEST PURPOSES

btnLogin.addEventListener('click', (e) => login(e));
btnTransfer.addEventListener('click', (e) => transfer(e));
btnLoan.addEventListener('click', (e) => takeLoan(e));
btnClose.addEventListener('click', (e) => closeAccount(e));
btnSort.addEventListener('click', (e) => sortMovements(e));