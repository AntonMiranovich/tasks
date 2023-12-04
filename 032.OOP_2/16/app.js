// 7. Вывести в строчку все вводимые значения через инпут в виде массива, а также
// все удвоенные значения данного массива в div ниже. Добавить проверку, что
// поле не пустое

class DablVal {
  doArr() {
    const btn = document.querySelector("button");
    let str = "";
    let dablStr = "";
    btn.addEventListener("click", function () {
      const inp = document.querySelector("input").value;
      const res = document.querySelector(".result");
      const dablRes = document.querySelector(".dablResult");
      str += ` ${inp}`;
      dablStr +=' '+inp * 2;
      res.innerHTML = str;
      dablRes.innerHTML = dablStr;
    });
  }
}

const dablVal = new DablVal();
dablVal.doArr()
