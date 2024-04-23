"use strict";

const box = document.querySelector(`.box`);

let observer = new MutationObserver(mutations=>{
    console.log(mutations);
});

observer.observe(box, {
    childList: true
});

observer.disconnect();