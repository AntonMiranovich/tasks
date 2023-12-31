// Необходимо отобразить кнопку с надписью
// «Нажми на меня» и пустой инпут.
// По клику на кнопку вызвать alert и отобразить
// сообщение из значения

const btn = document.querySelector("button");

function isValid(inp) {
  if (!inp.value) throw new Error("строка пустая");
}

btn.addEventListener("click", function () {
  try {
    const inp = document.querySelector("input");
    isValid(inp);
    alert(inp.value);
  } catch (error) {
    alert(error.message);
  }
});
