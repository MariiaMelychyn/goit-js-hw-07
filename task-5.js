"use strict";
{
    /* <input type="text" placeholder="Ваше имя?" id="name-input" />
  <h1>Привет, <span id="name-output">незнакомец</span>!</h1> */
  }
  

let inputEl = document.querySelector('#name-input');
inputEl.addEventListener('input', onInputChange);


let nameOutput = document.querySelector('#name-output');


