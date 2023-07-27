// 4. Напишите функцию, которая принимает массив чисел и находит минимальное и
// максимальное числа соответственно. Добавить проверки на ввод и если значения
// массива не соответствуют условию задания, вывести сообщение об ошибке.

const arr = [1, 2, -3, 4, -5, 6];

function findMinMax(a) {
  let min = a[0];
  let max = a[0];
  for (let i = 0; i < a.length; i++) {
    if (min < a[i]) min = a[i];
    if (max > a[i]) max = a[i];
  }
  return [min, max];
}

const result = findMinMax(arr);
console.log(result);
