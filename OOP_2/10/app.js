// 10. Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое. После каждого клика очищать значение input. Если
// вводимое значение не проходит валидацию, то на месте массива вывести
// сообщение об ошибке красным цветом

const btn = document.querySelector("button");
const arr = [];
btn.addEventListener("click", function () {
  const inp = document.querySelector("input");
  const div = document.querySelector("div");
  try {
    if (inp.value.length > 0) {
      arr.push(inp.value);
    } else {
      throw new Error("поля для ввода пустое");
    }
    div.innerHTML = arr;
    inp.value = "";
  } catch (error) {
    div.style='color:red'
    div.innerHTML = error.message;
  }
});
