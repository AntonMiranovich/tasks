// 9. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения массива с удвоенными значенями каждого
// элемента. Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую массив с удвоенными элементами

const arr = [1, 2, 3, 4, 5, 6, 7];

function isnum(a) {
  let chekNum = a.every(function (el) {
    return !isNaN(el) ? true : false;
  });
  return chekNum;
}

const chek = isnum(arr);

if (chek == true) {
  function sumArr(a) {
    let sumArroy = [];
    a.forEach(function (el) {
      sumArroy.push(el * 2);
    });
    return sumArroy;
  }
  let resultSum = sumArr(arr);
  console.log(resultSum);
} else {
  console.log("Введите числа !!!!");
}
