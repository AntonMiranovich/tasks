// 1. Создайте массив чисел и найдите сумму всех нечетных элементов в массиве

const arrNum: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newArr = arrNum.reduce((sum: number, el: number) => {
  return el % 2 !== 0 ? (sum += el) : sum;
}, 0);

console.log(newArr);
