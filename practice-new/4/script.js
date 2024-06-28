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

console.log(`--------------------`);
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],

    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
    }
};

lufthansa.book(239, 'Artem Nizhnyk');
lufthansa.book(635, 'Daniel Matwijewsky');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

const book = lufthansa.book;

// book(23, 'Valik Yurchenko');
book.call(eurowings, 23, 'Valik Yurchenko');
console.log(eurowings);

book.call(lufthansa, 239, 'Vlad Ivanov');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss',
    iataCode: 'LX',
    bookings: [],
};

book.call(swiss, 583, 'Taya Pichkur');
console.log(swiss);

const flightData = [583, 'Eugene Khchaturov'];
book.apply(swiss, flightData);
console.log(swiss);