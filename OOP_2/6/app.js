// 6. Вывести в строчку все вводимые значения через
//  инпут в виде массива. Добавить
// проверку, что поле не пустое

class DoArr {
  doArrOnClick() {
    const btn = document.querySelector("button");
    const arr = [];
    btn.addEventListener("click", function () {
      const inp = document.querySelector("input").value;
      const div = document.querySelector("div");
      arr.push(inp);
      div.innerHTML = arr;
    });
  }
}

const doArr = new DoArr();
doArr.doArrOnClick();
