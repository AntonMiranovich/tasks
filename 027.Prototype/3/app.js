// 3. По условию задачи даны инпут и кнопка.
//Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив.
//Необходимо создать объект, где каждый
// ключ – индекс элемента массива, а значение –
// текущее итерируемое значение
// массива
// [11, 2, 13] – {
// 0: 11,
// 1: 2,
// 2: 13
// }

const btn = document.querySelector("button");
const arr = [];
const obj = {};

btn.addEventListener("click", function () {
  const inp = document.querySelector("input");
  const firstDiv = document.querySelector(".array");
  const res = document.querySelector(".result");

  arr.push(inp.value);
  firstDiv.innerHTML = arr;
  inp.value = "";

  for (let i = 0; i < arr.length; i++) {
    obj[i] = arr[i];
  }

  res.innerHTML = JSON.stringify(obj);
});
