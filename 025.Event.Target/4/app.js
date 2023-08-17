// Вывести в строчку все вводимые значения через инпут
// в виде массива. Добавить проверку, что поле не пустое.
//  После каждого клика очищать значение input.
//  Если вводимое значение не проходит валидацию,
//   то на месте массива вывести сообщение об ошибке
//   красным цветом

const btn = document.querySelector("button");
let arr = [];

function isValid(inp) {
  if (!inp) throw new Error("Поле ввода пустое");
}

btn.addEventListener("click", function () {
  try {
    const inp = document.querySelector("input");
    isValid(inp.value);
    const paragraf = document.querySelector("p");

    arr.push(inp.value);
    paragraf.innerHTML = arr;
    inp.value = "";
  } catch (error) {
    alert(error.message);
  }
});
