"use strict";
{
    /* <input type="text" placeholder="Ваше имя?" id="name-input" />
  <h1>Привет, <span id="name-output">незнакомец</span>!</h1> */
  }
  


  const nameInput = document.querySelector("#name-input");
// console.log(nameInput);
const nameOutput = document.querySelector("#name-output");
// console.log(nameOutput);

nameInput.oninput = function () {
  if (nameInput.value === "") {
    nameOutput.innerHTML = "незнакомец";
  } else {
    nameOutput.innerHTML = nameInput.value;
  }
};




