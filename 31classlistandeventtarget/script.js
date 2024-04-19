const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector(`.btn-block`);

// console.log(btns[0].classList.length);
// console.log(`------------------`);
// console.log(btns[0].classList.item(0));
// console.log(`------------------`);
// console.log(btns[0].classList.add(`red`));
// console.log(`------------------`);
// console.log(btns[0].classList.remove(`blue`));
// console.log(`------------------`);
// console.log(btns[0].classList.toggle(`blue`));
// console.log(`------------------`);
// console.log(`------------------`);
// console.log(`------------------`);
//
btns[0].addEventListener(`click`, () => {
    // if (!btns[1].classList.contains(`red`)){
    //     btns[1].classList.add(`red`);
    // } else {
    //     btns[1].classList.remove(`red`);
    // }
    btns[1].classList.toggle(`red`);
});
// console.log(`------------------`);
// console.log(`------------------`);
// console.log(`------------------`);

// wrapper.addEventListener(`click`, (event) => {
//     if (event.target && event.target.tagName == `BUTTON`) {
//         // if (event.target && event.target.classList.contains(`blue`)) {
//         console.log(`hello`);
//     }
// });

// btns.forEach((btn) => {
//     btn.addEventListener(`click`, () => {        BAD
//         console.log(`hello`);                    NOT DYNAMIC
//     })
// })

const btn = document.createElement(`button`);
btn.classList.add(`red`);
wrapper.append(btn);

wrapper.addEventListener(`click`, (event) => {
    if (event.target && event.target.matches(`button.red`)) {
        console.log(`hello`);
    }
});