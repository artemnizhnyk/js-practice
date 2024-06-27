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