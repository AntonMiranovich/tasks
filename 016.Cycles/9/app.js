//Дан массив 2, 5, 9, 15, 0, 4. Выведите все числа кратные 3 циклом for of

const arr = [2, 5, 9, 15, 0, 4];
let sum = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 3 === 0) {
//     sum.push(arr[i]);
//   }
// }
// console.log(sum);


for(let el of arr){
    if (el % 3 === 0) {
        sum.push(el);
      }
}

console.log(sum);
