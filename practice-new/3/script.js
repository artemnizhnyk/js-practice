"use strict";

const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdayss = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
    [weekdayss[3]]: {
        open: 12,
        close: 22
    },
    [weekdayss[4]]: {
        open: 11,
        close: 23
    },
    [weekdayss[5]]: {
        open: 0, // Open 24 hours
        close: 24
    }
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours,

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({starterIndex = 1, mainIndex = 0, address = 'empty', time = '20:00'}) {
        console.log(time, address, mainIndex, starterIndex);
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(`Pasta with ${ing1}, ${ing2} and ${ing3}`);
    },

    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient, ...otherIngredients);
    }
};

restaurant.orderDelivery({
    time: '22:30',
    address: "Via del Sole, 21",
    mainIndex: 2,
    starterIndex: 2
});

console.log(`-------------`);
const {name, categories} = restaurant;
console.log(name, categories, openingHours);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

const {menu = ['Any'], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

console.log(`---------------------`);
//Mutating
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
({a, b} = obj);
console.log(a, b);

console.log(`---------------`);
// nested objects
const {fri: {open, close}} = openingHours;
console.log(open, close);

console.log(`-------------`);

// const array = [2, 3, 4];
// const a = array[0];
// const b = array[1];
// const c = array[2];
//
// const [x, y, z] = array;
// console.log(x, y, z);
// console.log(array);
//
// console.log(`-------------`);
// let [main, , secondary] = restaurant.categories;
// console.log(first, second);

// Variable switching
// [main, secondary] = [secondary, main];

console.log(`-------------`);

const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

console.log(`-------------`);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
// console.log(i, j);
// const [i, , [j , k]] = nested;
// console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

console.log(`-------------`);

const arr = [7, 8, 9];
const newArr = [5, 6, ...arr];

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];
const menu123 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu123);

console.log(`-------------------`);

const str = 'Artem';
const letters = [...str, ' ', 'N.'];
console.log(letters);
console.log(``);

console.log(`-------------------`);
// const ingredients = [
//     prompt(`Let's make pasta! Ingredient 1?`),
//     prompt(`Let's make pasta! Ingredient 2?`),
//     prompt(`Let's make pasta! Ingredient 3?`)
// ];
// restaurant.orderPasta(...ingredients);

console.log(`------------`);
const newRestaurant = {...restaurant, founder: 'Any Founder'};

const restaurantCopy = {...restaurant};

console.log(`------------`);
const arrNewOne = [1, 2, ...[3, 4]];

const [a1, b1, ...others] = [1, 2, 3, 4, 5];
console.log(a1, b1, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

console.log(`--------------`);
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

console.log(`---------------`);
const add = (...digits) => {
    return digits.reduce((previousValue, currentValue) => previousValue + currentValue);
};

console.log(add(5, 6, 9));
const args = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(add(...args));

console.log(`----------------------`);
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('chicken');

console.log(`------------------`);

console.log(3 || 'Jonas');
console.log(0 || 'Jonas');

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log(`-----------------------`);

console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log(7 && 'Jonas' && 0);

if (restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms', 'spinachh');
}

restaurant.orderPizza && restaurant.orderPizza();

console.log(`------------------`);
const rest1 = {
    name: 'Capri',
    numGuests: 0
};

const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi'
};
//
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests = rest1.numGuests || 10;

// rest2.numGuests ||= 10;
// rest1.numGuests ||= 10;

rest2.numGuests ??= 10;
rest1.numGuests ??= 10;

console.log(rest2);
console.log(rest1);
console.log(`--------------------`);

// rest2.owner = rest2.owner && '<ANONYMOUS>';
// // rest1.owner = rest1.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest2);
console.log(rest1);

console.log(`----------------------`);

const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu1) console.log(item);

for (const item of menu1.entries()) console.log(item);

for (const [i, el] of menu1.entries()) console.log(`${i + 1}: ${el}`);

console.log(`----------------------`);

// if (restaurant.openingHours.mon) {
//     console.log(restaurant.openingHours.mon.open);
// }
//
// if (restaurant.openingHours.fri) {
//     console.log(restaurant.openingHours.fri.open);
// }

console.log(restaurant.openingHours?.mon?.open);
console.log(restaurant.openingHours?.fri?.open);

console.log(`-----------------`);
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
    console.log(day);
    console.log(restaurant.openingHours[day]?.open ?? 'closed');
}

console.log(`-----------------`);
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

console.log(`-----------------`);
const users = [
    // {name: 'Jonas', email: 'any@mail.com'}
];

console.log(users[0]?.name ?? 'User array is empty');

console.log(`------------------`);
for (const day of Object.keys(openingHours)) {
    console.log(day);
}

const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, {open, close}] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}

console.log(`------------------`);
const set = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(set);

set.forEach(it => console.log(it));
console.log(set.size);
console.log(set.has('Pizza'));
console.log(set.has('Notpizza'));
set.add('Garlic bread');
set.add('Garlic bread');
console.log(set);
console.log(set);

console.log(`---------------`);
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const uniqueStaff = new Set(staff);
const uniqueStaffArray = [...new Set(staff)];
console.log(uniqueStaff);
console.log(uniqueStaffArray);

console.log(`-------------------------`);
const rest = new Map();
rest.set('name', 'Classico Italiano');

rest.set(1, 'Firenze, Italy')
    .set(2, 'Lisbon, Portugal')
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open')
    .set(false, 'We are closed');

console.log(rest);

console.log(rest.get('name'));
console.log(rest.get(true));

console.log(`---------------------------`);
// const time = 11;
// console.log(rest.get(time >= rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
console.log(rest.has('open'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
rest.clear();
console.log(rest);

const oneTwoArr = [1, 2];

rest.set(oneTwoArr, 'Test');
console.log(rest);
console.log(rest.size);

console.log(rest.get(oneTwoArr));

console.log(`-------------`);
const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    [4, 'C++'],
    ['correct', 3],
    [true, 'Correct✨'],
    [false, 'Try again!']
]);
console.log(question);

console.log(`--------------------`);
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
question.forEach((value, key) => console.log(typeof key === 'number' ? `${key} => ${value}` : ''));

const arrayFromMap = [...question];
console.log(arrayFromMap);

console.log(`--------------------`);
const airline = 'TAP Air Portugal';
// const plane = 'A320';

console.log(airline.indexOf('r'));
console.log(airline.slice(4, 7));


console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(-8));

const checkMiddleSeat = (seat) => {
    //B and E are middle seats
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E') console.log('Middle');
    else console.log('Not middle');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(typeof new String('Artem'));

console.log(`-------------------`);
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'ArtEm';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

console.log(`----------------------`);
const email = 'hello@mail.com';
const loginEmail = '   Hello@Mail.com \n';
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(normalizedEmail === email);

console.log(`----------------`);
const priceComa = '288,97&';
const priceDot = priceComa.replace('&', '$').replace(',', '.');
console.log(priceDot);

console.log(`------------------`);
const plane = 'A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

console.log(`---------------------`);
console.log('a+very+nice+string'.split('+'));

const [firstName, lastName] = 'Artem Nizhnyk'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = (name) => {
    let names = name.split(' ');
    names = names.map(it => it[0].toUpperCase() + it.slice(1));
    return names.join(' ');
};

const passengerJessica = 'jessica ann smith davis';
console.log(capitalizeName(passengerJessica));
console.log(capitalizeName('artem nizhnyk'));

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));

console.log(`--------------------`);
const maskCreditCard = (number) => {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
};

console.log(maskCreditCard(2134618274618274612));
console.log(maskCreditCard('2138671487162647687'));


console.log('Bad weather... All Departures Delayed...\n'.repeat(10));
console.log('------------------------------------');

console.log(flights.split('+'));

flights.split('+').forEach(row => {
    let [type, from, to, time] = row.split(';');
    console.log(type.replaceAll('_', ' ').trim()
    + ` from ${from.slice(0,3).toUpperCase()}`
    + ` to ${to.slice(0,3).toUpperCase()}`
    + ` (${time.replace(':', 'h')})`);
});
console.log('------------------------------------');