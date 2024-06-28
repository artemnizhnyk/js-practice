"use strict";

const bookings = [];

const createBooking = (flightNum = '_', numPassengers = 0, price = 100) => {
    const booking = {
        flightNum,
        numPassengers,
        price
    };
    console.log(booking);
    bookings.push(booking);
};

createBooking('LH123');
console.log(bookings);

console.log(`-----------------`);
const flight = 'LH234';
const artem = {
    name: 'Artem Nizhnyk',
    passport: 2321412451
};

const checkIn = (flightNum, passenger) => {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2321412451) {
      alert('Check in')
  } else {
      alert('Wrong passport')
  }
};

// checkIn(flight, artem);
console.log(flight);
console.log(artem);

console.log(`------------`);
const newPassport = (person) => {
    person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(artem);
console.log(artem);

console.log(`------------------`);
const oneWord = (str) => {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = (str) => {
    return str.slice(0, str.indexOf(' ')).toUpperCase() + str.slice(str.indexOf(' '));
};

//Higher-order function
const transformer = (str, fn) => {
    console.log(`Transformed string: ${fn(str)}`);
    console.log(fn.name);
};

transformer('JavaScript is the best!!!', upperFirstWord);
transformer('JavaScript is the best!!!', oneWord);

console.log(`--------------------`);

const greet = greeting => name => {console.log(`${greeting} ${name}`);};

const greeterHey = greet('Hey');
greeterHey('Artem');

greet('Hello')('Archie');