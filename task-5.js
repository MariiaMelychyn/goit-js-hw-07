"use strict";

let inputEl = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");

inputEl.oninput = function () {
    if (inputEl.value === ' ') {
        nameOutput.innerHTML = 'незнакомец';

    } else {
        nameOutput.innerHTML = inputEl.value;
    }
}
