"use strict";

console.log("Hello world");
document.body.innerHTML = "<h1 style='text-align: center; color: #54ed39;font-size: 100px;'>Hello World!!!</h1>";

console.log("------------------------");

const age = 19,
    isOldEnough = age >= 18;

if (isOldEnough) {
    console.log("Sarah can start driving");
} else {
    console.log("Sarah is not allowed to drive a car");
}

console.log("------------------------");

const inputYear = "2001";
console.log(Number(inputYear));
console.log(+inputYear);

console.log(2 + 3 + 4 + "5");

console.log("------------------------");

const day = "monday";

switch (day) {
    case "monday":
        console.log("monday");
        break;
    case "tuesday":
        console.log("tuesday");
        break;
    default:
        console.log("Another day");
}

console.log("------------------------");

const isGood = true;

console.log(isGood ? "Good" : "Bad");