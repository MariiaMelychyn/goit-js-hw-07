"use strict";


let controlEl = document.getElementById("font-size-control");
let textEl = document.getElementById("text");

 controlEl.addEventListener("input", (e) => {
     const all = controlEl.nodeValue;
     textEl.style.fontSize = size + "px";
 });
