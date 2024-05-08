"use strict";

// localStorage.setItem(`number`, 5);
// localStorage.removeItem(`number`);
// localStorage.clear();
// console.log(localStorage.getItem(`number`));

const checkBox = document.querySelector(`#checkbox`),
    form = document.querySelector(`form`),
    change = document.querySelector(`#color`);

if (localStorage.getItem(`isChecked`) == `true`) {
    checkBox.checked = true;
} else {
    checkBox.checked = false;
}

if (localStorage.getItem(`bg`) === `changed`) {
    form.style.backgroundColor = `red`;
}

checkBox.addEventListener(`change`, () => {
    if (checkBox.checked) {
        localStorage.setItem(`isChecked`, true);
    } else {
        localStorage.setItem(`isChecked`, false);
    }
});

change.addEventListener(`click`, () => {
    if (localStorage.getItem(`bg`) === `changed`) {
        localStorage.removeItem('bg');
        form.style.backgroundColor = `white`;
    } else {
        localStorage.setItem(`bg`, `changed`);
        form.style.backgroundColor = `red`;
    }
});

const person = {
    name: `Alex`,
    age: 25
};

const serializedPerson = JSON.stringify(person);
localStorage.setItem(`alex`, serializedPerson);

console.log(JSON.parse(localStorage.getItem(`alex`)));