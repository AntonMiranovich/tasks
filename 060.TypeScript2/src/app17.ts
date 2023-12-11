// 17. Создайте массив чисел и найдите наибольшую разницу между двумя элементами.

const arr17: number[] = [102, 51, 7, 45, 2, 46];

let res17: number = 0;

for (let i = 0; i < arr17.length; i++) {
  for (let j = 0; j < arr17.length; j++) {
    if (arr17[i] - arr17[j] > res17) res17 = arr17[i] - arr17[j];
  }
}

console.log(`наибольшая разницу между двумя элементами ${res17}`);
