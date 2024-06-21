"use strict";

const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22
        },
        fri: {
            open: 11,
            close: 23
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24
        }
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({starterIndex = 1, mainIndex = 0, address = 'empty', time = '20:00'}) {
        console.log(time, address, mainIndex, starterIndex);
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Pasta with ${ing1}, ${ing2} and ${ing3}`);
    },

    orderPizza: function (mainIngredient, ...otherIngredients) {
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
const {name, categories, openingHours} = restaurant;
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

const [pizza, ,risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

console.log(`--------------`);
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

console.log(`---------------`);
const add = (...digits) => {
    return digits.reduce((previousValue, currentValue) => previousValue+currentValue);
};

console.log(add(5, 6, 9));
const args = [1,2,3,4,5,6,7,8,9];
console.log(add(...args));

console.log(`----------------------`);
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('chicken');

console.log(`------------------`);

console.log(3 || 'Jonas');
console.log(0  || 'Jonas');

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log(`-----------------------`);

console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log(7 && 'Jonas' && 0);

if (restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms', 'spinachh')
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

for (const [i, el] of menu1.entries()) console.log(`${i+1}: ${el}`);