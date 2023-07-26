// 14. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для поиска максимального значения в массиве. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// максимальное значение массива

const arr = [1, 8, 2, 3, 4, 5, 6, 7];

function isNum(a) {
  let chekNum = a.every(function (el) {
    return !isNaN(el) ? true : false;
  });
  return chekNum;
}

const chek = isNum(arr);

if (chek == true) {

  function maxNumArr(a) {
    let max = arr[0];
    a.forEach(function (el) {
      max < el ? (max = el) : null;
    });
    return max;
  }
  let maxNum = maxNumArr(arr);
  console.log(maxNum);

} else {
  console.log("Введите числа !!!!");
}
