// Заполнять массив числами бесконечно до тех пор, пока длина массива не будет
// равна 5. Вывести массив в консоль (цикл for, while)

const n = 5;
arr = [];

// for (let i = 0; i < n; i++) {
//   arr.push(i);
// }

// console.log(arr);

let i = 0;
while (i < n) {
  arr.push(i);
  i++;
}
console.log(arr);
