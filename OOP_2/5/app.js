// 5. Необходимо отобразить числовой инпут и кнопку.
// После нажатия на кнопку
// необходимо получить значение из инпута.
//  Проверить, что это число > 0, а также,
// добавить проверку на ввод только чисел.
// Если проверка true, то вывести в div
// удвоенное значение инпута

const btn = document.querySelector("button");

function isValid(val) {
  if (isNaN(val)) throw new Error("вы ввели не число");
  if (val <= 0) throw new Error("число менише нуля ");
}

btn.addEventListener("click", function () {
  const inp = document.querySelector("input");
  const div = document.querySelector("div");

  try {
    isValid(inp.value);
    div.innerHTML = inp.value * 2;
    inp.value = "";
  } catch (error) {
    alert(error.message);
  }
});
