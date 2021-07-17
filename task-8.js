"use strict";

//Напиши скрипт создания и очистки коллекции элементов.
//Пользователь вводит количество элементов в input
//и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

//Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
//Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

//Каждый созданный div:

//Имеет случайный rgb цвет фона
//Размеры самого первого div - 30px на 30px
//Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
//Создай функцию destroyBoxes(), которая очищает div#boxes.

{
    /* <div id="controls">
    <input type="number" min="0" max="100" step="1" />
    <button type="button" data-action="render">Создать</button>
    <button type="button" data-action="destroy">Очистить</button>
  </div>
  
  <div id="boxes"></div> */
  }
  let render = document.querySelector('[data-action="render"]');
  let destroy = document.querySelector('[data-action="destroy"]');
  let boxes = document.getElementById('boxes');
  render.addEventListener('click', getAmount);
  destroy.addEventListener('click', destroyBoxes);
  
  function getAmount() {
    let amount = +document.querySelector('#controls input').value;
    createBoxes(amount);
  }
  
  function createBoxes(amount) {
    let basicSize = 30;
    let fragment = document.createDocumentFragment();
    for (var i = 0; i < amount; i++) {
      let size = basicSize + i * 10;
      let div = document.createElement('div');
      div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
      fragment.appendChild(div);
    }
    boxes.appendChild(fragment);
  }
  
  function destroyBoxes() {
    boxes.innerHTML = '';
  }
  
  function random() {
    return Math.floor(Math.random() * 256);
  }



  // 2 варіант
//   const btnRender = document.querySelector("[data-action='render']");
// const btnDestroy = document.querySelector("[data-action='destroy']");
// const divBox = document.querySelector("#boxes");
// const input = document.querySelector("input");

// const min = +input.getAttribute("min");
// const max = +input.getAttribute("max");
// const step = +input.getAttribute("step");

// btnRender.addEventListener("click", render);
// btnDestroy.addEventListener("click", destroy);
// let size = 30;

// function render() {
//   let arrDiv = [];
//   if (+input.value > min && +input.value <= max) {
//     for (let i = 0; i < +input.value; i += step) {
//       const divEl = document.createElement("div");
//       divEl.style.background = createRandom();
//       divEl.style.width = size + "px";
//       divEl.style.height = size + "px";
//       size += 10;

//       arrDiv.push(divEl);
//     }
//     divBox.append(...arrDiv);
//   } else {
//     alert(`Try once more`);
//   }
// }

// function destroy() {
//   input.value = "";
//   size = 30;
//   divBox.innerHTML = "";
// }

// function createRandom() {
//   ret
