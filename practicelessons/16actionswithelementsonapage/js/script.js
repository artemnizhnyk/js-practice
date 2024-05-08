"use strict";

const box = document.getElementById(`box`),
    btns = document.getElementsByTagName(`button`),
    circles = document.getElementsByClassName(`circle`),
    hearts = document.querySelectorAll(`.heart`),
    oneHeart = document.querySelector(`.heart`),
    wrapper = document.querySelector(`.wrapper`);

box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText = `background-color: blue; width: 500px`;

btns[1].style.borderRadius = '100%';

for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = `purple`;
}

hearts.forEach(item => {
    item.style.backgroundColor = `black`;
});

const div = document.createElement(`div`);
// const text = document.createTextNode(`Any`);

div.classList.add(`black`);
document.body.append(div);

// wrapper.append(div);
wrapper.prepend(div);

circles[0].remove();

hearts[0].replaceWith(circles[0]);

div.innerHTML = `<h1>Hello World</h1>`;

div.insertAdjacentHTML(`beforebegin`, `<h2>Hello</h2>`)