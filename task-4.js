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



// 2 варіант
// const [buttonDec, value, buttonInc] = document.querySelector(
//     "#counter"
//   ).children;
  
  
//   const increment = () => (value.textContent = +value.textContent + 1);
  
//   const decriment = () => (value.textContent -= 1);
  
  
//   buttonInc.addEventListener("click", increment);
//   buttonDec.addEventListener("click", decriment);
  