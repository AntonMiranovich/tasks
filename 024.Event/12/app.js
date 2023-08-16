// Вывести в строчку все вводимые значения через инпут в виде массива.
// Добавить проверку, что поле не пустое

const btn = document.querySelector("button");
const btnDelArr = document.querySelector(".delArr");
let arr = [];

function isValid(inp) {
  if (!inp) throw new Error("поле воода числа пусто");
}

btn.addEventListener("click", function () {
  try {
    const inp = document.querySelector("input");
    isValid(inp.value);
    const res = document.querySelector(".result");
    arr.push(inp.value);
    res.innerHTML = arr;
    inp.value = "";
  } catch (error) {
    alert(error.message);
  }
});

btnDelArr.addEventListener("click", function () {
  const inp = document.querySelector("input");
  const res = document.querySelector(".result");
  inp.value = "";
  arr = [];
  res.innerHTML = arr;
});
