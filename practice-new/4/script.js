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

checkIn(flight, artem);
console.log(flight);
console.log(artem);

console.log(`------------`);
const newPassport = (person) => {
    person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(artem);
console.log(artem);