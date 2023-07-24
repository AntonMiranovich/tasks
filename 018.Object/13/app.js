// 13. На входе пустой объект; n – количество элементов рандомно сгенерированного
// массива. Необходимо заполнить пустой объект, где ключи – циклично
// сгенерированная последовательность от 0 до n, значения – элемент рандомно
// сгенерированного массива. Math.random()
// 4 -> [34, 11, 43, 1] // 4 – n; элементы массива сгенерированы рандомно
// {
// 0 : 34,
// 1 : 11,
// 2 : 43,
// 3 : 1
// }

const n = +prompt("Ведите значение n");
let arr = [];
let obj = {};

for (let i = 0; i < n; i++) {
  let numRandom = Math.floor(Math.random() * 100);
  arr.push(numRandom);
}

for (let i = 0; i < n; i++) {
  obj[`${i}`] = arr[i];
}

console.log(obj);
