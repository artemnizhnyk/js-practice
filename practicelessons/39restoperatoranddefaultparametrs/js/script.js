"use strict";

const log = function (a, b, ...rest) {
    console.log(a, b, rest);
};

log(`basic`, `rest`, `any`, `any2`, `any3`);

function calcOrDouble(number, basis = 2) {
    console.log(number*basis);
}

calcOrDouble(3);