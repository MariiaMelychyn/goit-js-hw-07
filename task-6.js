"use strict";

let inputEl = document.getElementById('validation-input');

let inputLength = inputEl.getAttribute('data-length');
let InInputLength = parseInt(inputLength, 6);

inputEl.oninput = function () {
    if (inputEl.nodeValue.length === InInputLength){
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    }
    if (inputEl.nodeValue.length === 0) {
        inputEl.classList.remove('valid');
        inputEl.classList.remove('invalid');
    }
    if (inputEl.nodeValue.length !== InInputLength && inputEl.value.length !== 0) {
        inputEl.classList.add('invalid');
    }
};

