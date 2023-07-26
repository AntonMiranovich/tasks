// 16. На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 3 функции. Первая для формирования массива.
// Вторая для проверки, что в массиве только числа. Третья для формирования
// массива из всех четных чисел, возведенных в квадрат. Если результат функции
// проверки – true, то вызывать новую функцию, возвращающую массив из всех
// четных чисел, возведенных в квадрат

const n = prompt("Введите значение n");

function pushArr(a) {
  let arrFun = [];
  for (let i = 0; i < a; i++) {
    let arrEl = +prompt("Введите значение эддементов");
    arrFun.push(arrEl);
  }
  return arrFun;
}

const arr = pushArr(n);

function chekFun(array) {
  let chek = array.every(function (el) {
    return !isNaN(el) ? true : false;
  });
  return chek;
}

const chek = chekFun(arr);

function resultArray(arr) {
  let resArr = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? resArr.push(arr[i] ** 2) : null;
  }
  return resArr
}

const sumArr = resultArray(arr);

console.log(chek === true ? sumArr : "введите числа !!!");
