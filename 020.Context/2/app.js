// 2. На входе n – количество элементов массива.
// Далее производится заполнение
// массива с клавиатуры. Напишите функцию, которая
// принимает массив строк и
// находим там наибольшее по длине текстовое значение.
//  Добавить проверки

const num = +prompt("Введите число n");

function doArray(num) {
  const arr = [];
  for (let i = 0; i < num; i++) {
    let pro = prompt("Введите эл массива");
    isNaN(pro) ? arr.push(pro) : null;
  }
  return arr;
}

const arr = doArray(num);

function maxLength(str) {
  let res = str[0];
  for (let i = 0; i < str.length; i++) {
    str[i].length > res.length ? (res = str[i]) : null;
  }
  return res;
}

let result = maxLength(arr);

console.log(result);
