// Вы вводите строку. Проверить является ли это
//  слово палиндром. Добавить проверки

const btn = document.querySelector("button");

function isValid(inp) {
  if (!inp) throw new Error("Поле ввода пустое ");
}

btn.addEventListener("click", function () {
  try {
    const inp = document.querySelector("input");
    isValid(inp.value);
    const div = document.querySelector("div");

    const reverse = inp.value.split("").reverse().join("");
    if (inp.value === reverse) {
      div.innerHTML = "Это слово паллиндром";
    } else {
      div.innerHTML = "Это слово НЕ паллиндром";
    }
  } catch (error) {
    alert(error.message);
  }
});
