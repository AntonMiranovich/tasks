// 9. Отобразить в div массив из 15 рандомных значений от 0 до 100. Необходимо
// распознать по какому из значений контейнера производится событие клика. Если
// клик происходит, то удалить данное значение из массива в div

const div = document.querySelector("div");

for (let i = 1; i <= 15; i++) {
  let p = document.createElement("p");
  p.textContent = Math.floor(Math.random() * 100);
  div.appendChild(p);
}

div.addEventListener("click", function (event) {
  event.target.remove();
});
