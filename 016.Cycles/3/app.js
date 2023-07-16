// . Дан массив с элементами [2, 3, 4, 5]. С помощью 3 циклов найдите произведение
// элементов этого массива.

const arr = [2, 3, 4, 5];
let result = 1;

for (let i = 0; i < arr.length; i++) {
  result *= arr[i];
}
console.log(result);



// let i = 0;
// while (i < arr.length) {
//   result *= arr[i];
//   i++;
// }
// console.log(result);



for (let el of arr) {
  result *= el;
}
console.log(result);




let i = 0;
do {
  result *= arr[i];
} while (i < arr.length);
console.log(result);
