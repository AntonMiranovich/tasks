// 2. По условию задачи даны инпут и кнопка.
//Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив строк.
// Необходимо вывести: полный
// массив из всех элементов, а также массив из уникальных значений

const btn = document.querySelector("button");
const arr = [];
const newArr = [];

btn.addEventListener("click", function () {
  const inp = document.querySelector("input");
  const firstDiv = document.querySelector(".array");
  const res = document.querySelector(".result");
  arr.push(inp.value);

  firstDiv.innerHTML = arr;

  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) newArr.push(arr[i]);
  }

  res.innerHTML = newArr;
  inp.value = "";
});
