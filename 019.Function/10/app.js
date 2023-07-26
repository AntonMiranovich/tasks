// 10. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения только четных элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// массив с четными элементами массива

const arr = [1, 2, 3, 4, 5, 6, 7,];

function isNum(a) {
  let chekNum = a.every(function (el) {
    return !isNaN(el) ? true : false;
  });
  return chekNum;
}

const chek = isNum(arr);

function resultEl(a) {
  let evens = [];
  a.forEach(function (el) {
    el % 2 === 0 ? evens.push(el) : null;
  });
  return evens;
}

let result = resultEl(arr);
console.log(chek===true?result:'введите числа')


