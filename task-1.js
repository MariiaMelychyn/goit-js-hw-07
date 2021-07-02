"use strict";

const allCategories = document.querySelectorAll(".item");
console.log(`В списке ${allCategories.length} категории.`);

const categoriesArr = [...allCategories]
.map(
    categories => `Категория: ${categories.children[0].textContent}
Количество элементов: ${categories.children[1].children.length}`
).join("\n");
console.log(categoriesArr);