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


                //2 варіант
// let input = document.getElementById("name-input");
// //console.log(input);
// let nameOutput = document.getElementById("name-output");
// // console.log(nameOutput);
// input.oninput = function () {
//   if (nameInput.value === "") {
//     nameOutput.innerHTML = "незнакомец";
//   } else {
//     nameOutput.innerHTML = nameInput.value;
//   }
// };



// 3 варіант
// const nameInput = document.querySelector('#name-input');
// const nameOutput = document.querySelector('#name-output');
// console.dir(nameInput);
// nameInput.addEventListener('input', onInput);

// function onInput({ target: { value } }) {
//   // if (value.trim() === '') {
//   //   nameOutput.textContent = 'незнакомец';
//   // } else {
//   //   nameOutput.textContent = value;
//   // }
//   nameOutput.textContent = value.trim() === '' ? 'незнакомец' : value;
// }







