'use strict';

setTimeout(() => console.log(`timeout`));

Promise.resolve()
    .then(()=> console.log(`promise_1`));

queueMicrotask(()=> console.log(`wow`));

Promise.resolve()
    .then(()=> console.log(`promise_2`));

console.log(`code`);

//1 () => {}     <- macro
//2 microtasks: then/catch/finally/await  <- all
//3 render
//4 () => {}     <- macro