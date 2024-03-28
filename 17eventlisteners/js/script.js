"use strict";

const btn = document.querySelector(`.button`),
    overlay = document.querySelector(`.overlay`);
//deprecated
// btn.onclick = function () {
//   alert(`Something`);
// };

console.log(`---------------------------`);

btn.addEventListener(`click`, function () {
    // alert(`Another click`);
});

let i= 0;
const deleteElement = (event) => {
    // event.target.remove();
    console.log(event.currentTarget);
    console.log(event.type);
    i++;
    if (i == 1) {
        btn.removeEventListener(`click`, deleteElement);
    }
}

btn.addEventListener(`click`, deleteElement);
overlay.addEventListener(`click`, deleteElement);

// btn.removeEventListener(`click`, deleteElement);

console.log(`--------------------------------`);

const  link = document.querySelector(`a`);
link.addEventListener(`click`, (event) => {
    event.preventDefault();
});