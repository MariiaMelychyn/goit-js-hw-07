"use strict";

let valueEl = Number(document.querySelector('#value').textContent);

let counterValue = document.querySelector('#value');


const incrementBtn = document.querySelector('#counter').lastElementChild;
const decrementBtn = document.querySelector('#counter').firstElementChild;

incrementBtn.addEventListener('click', event => {
    valueEl += 1;
    counterValue.innerText = valueEl;
});

decrementBtn.addEventListener('click', event => {
    valueEl -= 1;
    counterValue.innerText = valueEl;
})
