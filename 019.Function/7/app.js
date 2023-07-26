// 7. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения суммы всех элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// сумму всех элементов массива

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
    let sum = a.reduce(function (sum, el) {
      sum += el;
      return sum;
    });
    return sum;
  }
  let resultSum = sumArr(arr);
  console.log(resultSum);
} else {
  console.log("Введите числа !!!!");
}
