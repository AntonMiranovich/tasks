// // Записать в результат удвоенное значение инпута.
//  Добавить проверки

const btn = document.querySelector("button");

function isValid(inp) {
  if (isNaN(inp.value)) throw new Error("Введено не правильное значение");
}

btn.addEventListener("click", function () {
  try {
    const inp = document.querySelector("input");
    isValid(inp);
    const res = document.querySelector("p");
    res.innerHTML = inp.value * 2;
  } catch (error) {
    alert(error.message);
  }
});
