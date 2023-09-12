// 9. Отобразить в div массив из 15 рандомных значений от 0 до 100. Необходимо
// распознать по какому из значений контейнера производится событие клика. Если
// клик происходит, то удалить данное значение из массива в div

class DelitElArr {
  doArr() {
    const div = document.querySelector("div");
    const arr = [];
    for (let i = 0; i < 15; i++) {
      arr.push(Math.floor(Math.random() * 100));
    }
    div.innerHTML = arr;
  }

  delEl() {
    const div = document.querySelector("div");
    div.addEventListener("click", function (event) {
      event.target.remove();
    });
  }
}

const delitElArr = new DelitElArr();
delitElArr.doArr();
delitElArr.delEl();
