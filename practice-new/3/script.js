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
