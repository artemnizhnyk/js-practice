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

console.log("------------------------");

function logger() {
    console.log("Any logger function");
}

logger();

console.log("------------------------");

function fruitProcessor(appleQuantity, orangeQuantity) {
    // console.log(`${appleQuantity}, ${orangeQuantity}`);
    return `Juice with ${appleQuantity} and ${orangeQuantity} oranges`;
}

console.log(fruitProcessor(5, 0));


// console.log(`age 2 ${calcAge2(2000)}`); not available here
console.log(`age 2 ${calcAge1(2000)}`);


console.log("------------------------");

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

console.log(calcAge1(2001));

const calcAge2 = birthYear => 2037 - birthYear;
console.log(calcAge2(2001));


console.log("------------------------");

const friends = ["Daniel", "Valik", "Eugene"];

for (const friend of friends) {
    console.log(friend);
}

friends.push("Vlad");
console.log(friends);

const artem = ["Artem", "Nizhnyk", 2024 - 2001, "programmer", friends];
console.log(artem);

friends.pop();
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Valik"));
console.log(friends.indexOf("Not existing value"));

console.log(friends.includes("Eugene"));

console.log("------------------------");
const artemsFriends = ["Daniel", "Valik", "Eugene", "Vlad"];


const artemArray = [
    "Artem",
    "Nizhnyk",
    2024 - 2001,
    [artemsFriends]
];

const artemObject = {
    firstName: "Artem",
    lastName: "Nizhnyk",
    job: 'programmer',
    birthYear: 2001,
    friends: artemsFriends,
    hasDriversLicense: true,

    calcAge: function() {
        if (this.age) {
            return this.age;
        }
        this.age = 2024 - this.birthYear;
        return this.age
    }
};

console.log(artemObject.firstName);
console.log(artemObject['first' + 'Name']);

console.log(artemObject.calcAge());

