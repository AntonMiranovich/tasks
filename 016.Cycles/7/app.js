// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for of найдите сумму
// элементов этого массива

const a = [1, 2, 3, 4, 5];

let result = 0;




for (let i = 0; i < a.length; i++) {
  result += a[i];
}
console.log(result);




for (let el of a) {
  result += el;
}

let i = 0;



do {
  result += a[i];
  i++;
} while (i < a.length);
console.log(result);
