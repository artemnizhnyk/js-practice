"use strict";

const box = document.querySelector(`.box`);

const newHeight = 100;
const newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 200}px`;
    elem.style.width = `${w ?? 200}px`;
    elem.innerHTML = (h ?? 200) * (w ?? 200)
}

changeParams(box, newHeight, newWidth);

let username;
let userKey;

console.log(username ?? userKey ?? `User`);