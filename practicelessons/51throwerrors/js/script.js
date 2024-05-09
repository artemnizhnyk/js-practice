'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: 'any',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: ''
    }
];

try {
    data.forEach((blockObj, i) => {
        const block = document.createElement(blockObj.tag);

        if (!blockObj.id) throw new SyntaxError(`Data with number ${i + 1} doesn't have a id`);

        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    });
}catch (e) {
    if (e.name === `SyntaxError`) {
        console.log(e.message);
    } else throw e;
}



const err = new Error(`any error`);
console.log(err.name, err.message, err.stack);